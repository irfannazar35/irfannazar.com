/* ==========================================================================
   INTERACTIVE CANVAS DAM & RESERVOIR HYDROMETRICS SIMULATION
   ========================================================================== */

class DamSimulation {
  constructor(canvasId, sliderId, readoutId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.slider = document.getElementById(sliderId);
    this.readout = document.getElementById(readoutId);

    this.waterHeightPercent = this.slider ? parseFloat(this.slider.value) : 75;
    this.waveOffset = 0;
    this.flowOffset = 0;
    this.animationFrame = null;

    this.init();
  }

  init() {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    if (this.slider) {
      this.slider.addEventListener('input', (e) => {
        this.waterHeightPercent = parseFloat(e.target.value);
        this.updateReadout();
      });
    }

    this.updateReadout();

    window.addEventListener('themeChanged', () => {
      this.draw();
    });

    this.animate();
  }

  resizeCanvas() {
    const container = this.canvas.parentElement;
    if (container) {
      this.canvas.width = container.clientWidth - 40;
      this.canvas.height = 320;
    }
  }

  animate() {
    this.waveOffset += 0.04;
    this.flowOffset += 0.09;
    this.draw();
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  updateReadout() {
    if (!this.readout) return;

    const level = Math.round(this.waterHeightPercent);
    const status = this.waterHeightPercent <= 10
      ? 'DSL'
      : this.waterHeightPercent < 100
        ? 'STORAGE'
        : this.waterHeightPercent === 100
          ? 'FSL'
          : 'SPILLWAY ACTIVE';

    this.readout.textContent = `${level}% ${status}`;
  }

  draw() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // Colors based on theme
    const waterFillColor = isDark ? 'rgba(34, 197, 94, 0.22)' : 'rgba(34, 197, 94, 0.2)';
    const floodFillColor = isDark ? 'rgba(14, 165, 233, 0.2)' : 'rgba(14, 165, 233, 0.18)';
    const waterStrokeColor = isDark ? '#22C55E' : '#16A34A';
    const spillWaterColor = isDark ? '#38BDF8' : '#0284C7';
    const damFillColor = isDark ? '#94A3B8' : '#D7E2DC';
    const damStrokeColor = isDark ? '#123326' : '#123326';
    const textColor = isDark ? '#4D665B' : '#4D665B';
    const accentColor = isDark ? '#15803D' : '#15803D';

    this.ctx.clearRect(0, 0, width, height);

    // Ground Line
    const groundY = height - 40;
    this.ctx.beginPath();
    this.ctx.moveTo(10, groundY);
    this.ctx.lineTo(width - 10, groundY);
    this.ctx.strokeStyle = damStrokeColor;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Dam Geometry Coordinates
    const damCrestWidth = 35;
    const damBaseWidth = 140;
    const damHeight = 180;
    const damTopY = groundY - damHeight;
    const damCenterX = width * 0.58;

    const damLeftTopX = damCenterX - damCrestWidth / 2;
    const damRightTopX = damCenterX + damCrestWidth / 2;
    const damLeftBaseX = damCenterX - damBaseWidth / 2;
    const damRightBaseX = damCenterX + damBaseWidth / 2;

    // Water Surface Level calculation
    const deadLevelY = groundY - 24;
    const fullSupplyY = damTopY + 44;
    const highFloodY = damTopY + 18;
    const clampedPercent = Math.max(0, Math.min(this.waterHeightPercent, 120));
    const storagePercent = Math.min(clampedPercent, 100);
    const surchargePercent = Math.max(0, clampedPercent - 100) / 20;
    const currentWaterY = deadLevelY - ((deadLevelY - fullSupplyY) * (storagePercent / 100));
    const floodWaterY = fullSupplyY - ((fullSupplyY - highFloodY) * surchargePercent);
    const displayWaterY = clampedPercent > 100 ? floodWaterY : currentWaterY;
    const waterDepth = Math.max(0, deadLevelY - displayWaterY);
    const damFaceRatio = Math.max(0, Math.min(1, (groundY - displayWaterY) / damHeight));
    const waterAgainstDamX = damLeftBaseX + (damLeftTopX - damLeftBaseX) * damFaceRatio;

    // Draw Water Reservoir Body with dynamic wave
    this.ctx.beginPath();
    this.ctx.moveTo(15, displayWaterY);

    for (let x = 15; x <= damLeftBaseX + 15; x += 10) {
      const waveY = displayWaterY + Math.sin(x * 0.03 + this.waveOffset) * Math.max(1.5, waterDepth / 36);
      this.ctx.lineTo(x, waveY);
    }

    this.ctx.lineTo(waterAgainstDamX, displayWaterY);
    this.ctx.lineTo(damLeftBaseX, groundY);
    this.ctx.lineTo(15, groundY);
    this.ctx.closePath();

    this.ctx.fillStyle = clampedPercent > 100 ? floodFillColor : waterFillColor;
    this.ctx.fill();

    // Water Surface Wave Line
    this.ctx.beginPath();
    this.ctx.moveTo(15, displayWaterY);
    for (let x = 15; x <= damLeftBaseX + 15; x += 5) {
      const waveY = displayWaterY + Math.sin(x * 0.03 + this.waveOffset) * Math.max(1.5, waterDepth / 36);
      this.ctx.lineTo(x, waveY);
    }
    this.ctx.strokeStyle = clampedPercent > 100 ? spillWaterColor : waterStrokeColor;
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

    // Reference level markers
    this.drawLevelMarker(15, damLeftBaseX - 8, deadLevelY, 'DSL', '#92400E', 3);
    this.drawLevelMarker(15, damLeftBaseX - 8, fullSupplyY, 'FSL / SPILLWAY SILL', waterStrokeColor, 3);
    this.drawLevelMarker(15, damLeftBaseX - 8, highFloodY, 'HFL', spillWaterColor, 3);

    // Draw Embankment Dam Body
    this.ctx.beginPath();
    this.ctx.moveTo(damLeftBaseX, groundY);
    this.ctx.lineTo(damLeftTopX, damTopY);
    this.ctx.lineTo(damRightTopX, damTopY);

    // Spillway Steps
    const spillwaySteps = 5;
    const stepWidth = (width - 30 - damRightTopX) / spillwaySteps;
    const stepHeight = (groundY - damTopY) / spillwaySteps;

    let currX = damRightTopX;
    let currY = damTopY;

    for (let i = 0; i < spillwaySteps; i++) {
      currX += stepWidth;
      this.ctx.lineTo(currX, currY);
      currY += stepHeight;
      this.ctx.lineTo(currX, currY);
    }

    this.ctx.lineTo(damLeftBaseX, groundY);
    this.ctx.closePath();

    this.ctx.fillStyle = damFillColor;
    this.ctx.fill();
    this.ctx.strokeStyle = damStrokeColor;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Spillway Water Flow activates only after the reservoir crosses FSL.
    if (clampedPercent > 100) {
      const flowIntensity = Math.max(0.18, surchargePercent);
      this.drawSpillwayFlow(damRightTopX, damTopY, stepWidth, stepHeight, spillwaySteps, spillWaterColor, flowIntensity);
    }

    // Technical Blueprint Annotations & Leaders
    this.ctx.font = '11px "JetBrains Mono", monospace';
    this.ctx.fillStyle = textColor;

    // Storage Indicator
    const elevation = 342.0 + (clampedPercent / 100) * 29.3;
    const levelLabel = clampedPercent <= 10 ? 'DEAD STORAGE' : clampedPercent > 100 ? 'SURCHARGE' : 'RESERVOIR';
    this.ctx.fillText(`${levelLabel}: ${elevation.toFixed(1)} m.a.s.l.`, 25, displayWaterY - 12);
    
    // Crest Label
    this.ctx.fillText('CREST ELEVATION', damLeftTopX - 10, damTopY - 12);

    // Spillway Label
    this.ctx.fillStyle = accentColor;
    this.ctx.fillText(clampedPercent > 100 ? 'SPILLWAY DISCHARGING' : 'STEPPED SPILLWAY', damRightTopX + 20, damTopY + 40);

    if (clampedPercent > 100) {
      this.ctx.fillStyle = spillWaterColor;
      this.ctx.fillText(`Q ~ ${Math.round(surchargePercent * 420)} cusecs`, damRightTopX + 24, damTopY + 62);
    }
  }

  drawLevelMarker(startX, endX, y, label, color, dashSize) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.setLineDash([dashSize, dashSize]);
    this.ctx.moveTo(startX, y);
    this.ctx.lineTo(endX, y);
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.font = '10px "JetBrains Mono", monospace';
    this.ctx.fillStyle = color;
    this.ctx.fillText(label, startX + 4, y - 5);
    this.ctx.restore();
  }

  drawSpillwayFlow(startX, startY, stepWidth, stepHeight, steps, color, intensity) {
    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    for (let stream = 0; stream < 4; stream++) {
      const offset = stream * 7 + Math.sin(this.flowOffset + stream) * 3;
      let x = startX + 4;
      let y = startY + 12 + offset;

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);

      for (let i = 0; i < steps; i++) {
        x += stepWidth * 0.72;
        y += Math.sin(this.flowOffset + i + stream) * 2;
        this.ctx.lineTo(x, y);
        x += stepWidth * 0.28;
        y += stepHeight;
        this.ctx.lineTo(x, y);
      }

      this.ctx.globalAlpha = 0.42 + intensity * 0.46;
      this.ctx.lineWidth = 2 + intensity * 4 - stream * 0.2;
      this.ctx.stroke();
    }

    // Foam pulses moving down the spillway.
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.globalAlpha = 0.55;
    for (let i = 0; i < steps; i++) {
      const pulse = (this.flowOffset * 18 + i * 31) % (stepWidth * steps);
      const x = startX + 12 + pulse;
      const y = startY + 18 + Math.min(steps - 1, Math.floor(pulse / stepWidth)) * stepHeight;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 2 + intensity * 2, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.ctx.restore();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new DamSimulation('damCanvas', 'waterSlider', 'waterReadout');
});

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
    this.animationFrame = null;

    this.init();
  }

  init() {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    if (this.slider) {
      this.slider.addEventListener('input', (e) => {
        this.waterHeightPercent = parseFloat(e.target.value);
        if (this.readout) {
          this.readout.textContent = `${Math.round(this.waterHeightPercent)}% FSL`;
        }
      });
    }

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
    this.draw();
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  draw() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // Colors based on theme
    const waterFillColor = isDark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.18)';
    const waterStrokeColor = isDark ? '#22C55E' : '#16A34A';
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
    const minWaterY = damTopY + 20; // Full level
    const maxWaterY = groundY - 10; // Min level
    const currentWaterY = maxWaterY - ((maxWaterY - minWaterY) * (this.waterHeightPercent / 100));

    // Draw Water Reservoir Body with dynamic wave
    this.ctx.beginPath();
    this.ctx.moveTo(15, currentWaterY);

    for (let x = 15; x <= damLeftBaseX + 15; x += 10) {
      const waveY = currentWaterY + Math.sin(x * 0.03 + this.waveOffset) * 4;
      this.ctx.lineTo(x, waveY);
    }

    this.ctx.lineTo(damLeftBaseX + (damLeftTopX - damLeftBaseX) * (1 - (currentWaterY - damTopY) / damHeight), currentWaterY);
    this.ctx.lineTo(damLeftBaseX, groundY);
    this.ctx.lineTo(15, groundY);
    this.ctx.closePath();

    this.ctx.fillStyle = waterFillColor;
    this.ctx.fill();

    // Water Surface Wave Line
    this.ctx.beginPath();
    this.ctx.moveTo(15, currentWaterY);
    for (let x = 15; x <= damLeftBaseX + 15; x += 5) {
      const waveY = currentWaterY + Math.sin(x * 0.03 + this.waveOffset) * 4;
      this.ctx.lineTo(x, waveY);
    }
    this.ctx.strokeStyle = waterStrokeColor;
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

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

    // Spillway Water Flow (if high water level > 80%)
    if (this.waterHeightPercent > 80) {
      this.ctx.beginPath();
      this.ctx.moveTo(damRightTopX, damTopY + 5);
      let sX = damRightTopX;
      let sY = damTopY + 5;
      for (let i = 0; i < spillwaySteps; i++) {
        sX += stepWidth;
        this.ctx.lineTo(sX, sY);
        sY += stepHeight;
        this.ctx.lineTo(sX, sY);
      }
      this.ctx.strokeStyle = waterStrokeColor;
      this.ctx.lineWidth = 3;
      this.ctx.setLineDash([4, 4]);
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    }

    // Technical Blueprint Annotations & Leaders
    this.ctx.font = '11px "JetBrains Mono", monospace';
    this.ctx.fillStyle = textColor;

    // FSL Indicator
    this.ctx.fillText(`FSL: ${(currentWaterY * -0.5 + 450).toFixed(1)} m.a.s.l.`, 25, currentWaterY - 12);
    
    // Crest Label
    this.ctx.fillText('CREST ELEVATION', damLeftTopX - 10, damTopY - 12);

    // Spillway Label
    this.ctx.fillStyle = accentColor;
    this.ctx.fillText('STEPPED SPILLWAY', damRightTopX + 20, damTopY + 40);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new DamSimulation('damCanvas', 'waterSlider', 'waterReadout');
});

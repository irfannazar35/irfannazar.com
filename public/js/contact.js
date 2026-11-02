document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('portfolioContactForm');
  const feedback = document.getElementById('formFeedback');
  const copyFeedback = document.getElementById('copyFeedback');
  document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Unavailable');
        await navigator.clipboard.writeText(email);
        copyFeedback.textContent = `Copied ${email}`;
      } catch {
        copyFeedback.textContent = `Please select and copy this address: ${email}`;
      }
    });
  });
  if (!form) return;
  const message = document.getElementById('contactMessage');
  const count = document.getElementById('messageCount');
  const draft = document.getElementById('contactEmailDraft');
  const gmailLink = document.getElementById('contactGmailDraft');
  function updateDraft() {
    count.textContent = `${message.value.length.toLocaleString()} / 5,000`;
    const topic = document.getElementById('contactSubject').value || 'Professional inquiry';
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const organization = document.getElementById('contactOrganization').value.trim();
    const body = `${message.value.trim()}\n\n${name}\n${organization}\nReply to: ${email}`;
    const subject = `Portfolio Inquiry: ${topic}`;
    draft.href = `mailto:irfannazar35@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    gmailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=irfannazar35%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  form.addEventListener('input', updateDraft);
  form.addEventListener('change', updateDraft);
  updateDraft();
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = document.getElementById('contactName').value.trim();
    if (!name || message.value.trim().length < 20) {
      feedback.textContent = 'Please enter your name and a message of at least 20 non-padding characters.';
      feedback.dataset.state = 'error';
      (!name ? document.getElementById('contactName') : message).focus();
      return;
    }
    updateDraft();
    window.open(gmailLink.href, '_blank', 'noopener,noreferrer');
    feedback.dataset.state = 'info';
    feedback.textContent = 'Your email draft is ready. Review it and press Send in Gmail. If a new tab did not open, use “Open Gmail draft” below. Your message is kept here until you leave or refresh this page.';
    gmailLink.hidden = false;
  });
});

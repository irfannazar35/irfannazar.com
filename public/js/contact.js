/* ==========================================================================
   CONTACT FORM & INTERACTIVE ACTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('portfolioContactForm');
  const formFeedback = document.getElementById('formFeedback');
  const copyEmailBtn = document.getElementById('copyEmailBtn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'irfannazar35@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '✓ Copied!';
        copyEmailBtn.style.color = 'var(--accent-emerald)';
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
          copyEmailBtn.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.style.color = 'var(--accent-amber)';
          formFeedback.textContent = 'Please fill out all required fields.';
        }
        return;
      }

      const inboxEmail = 'irfannazar35@gmail.com';
      const mailSubject = `Portfolio Inquiry: ${subject}`;
      const mailBody = [
        `Inquiry Topic: ${subject}`,
        `Name: ${name}`,
        `Sender Email: ${email}`,
        '',
        'Message:',
        message,
        '',
        'Auto acknowledgement shown to sender:',
        'Your query has been received and will be responded back.'
      ].join('\n');

      const mailtoUrl = `mailto:${inboxEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      window.location.href = mailtoUrl;

      if (formFeedback) {
        formFeedback.style.color = 'var(--accent-emerald)';
        formFeedback.innerHTML = `Thank you, ${name}. Your query has been received and will be responded back. If your email app did not open, please email ${inboxEmail}.`;
      }
      contactForm.reset();
    });
  }
});

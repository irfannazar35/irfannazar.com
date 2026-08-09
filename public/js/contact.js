/* ==========================================================================
   CONTACT FORM & INTERACTIVE ACTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('portfolioContactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('contactSubmitBtn');
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
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value.trim();
      const endpoint = contactForm.getAttribute('action');

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.style.color = 'var(--accent-amber)';
          formFeedback.textContent = 'Please fill out all required fields.';
        }
        return;
      }

      if (formFeedback) {
        formFeedback.style.color = 'var(--text-muted)';
        formFeedback.textContent = 'Sending your inquiry...';
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.72';
        submitBtn.style.cursor = 'wait';
      }

      const payload = new FormData(contactForm);
      payload.set('_subject', `Portfolio Inquiry: ${subject}`);
      payload.set('submitted_from', window.location.href);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: payload
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok || result.success === false) {
          throw new Error(result.message || 'The inquiry could not be sent.');
        }

        if (formFeedback) {
          formFeedback.style.color = 'var(--accent-emerald)';
          formFeedback.textContent = `Thank you, ${name}. Your inquiry has been sent successfully.`;
        }
        contactForm.reset();
      } catch (error) {
        console.error('Inquiry send failed:', error);
        if (formFeedback) {
          formFeedback.style.color = 'var(--accent-amber)';
          formFeedback.textContent = 'Sorry, the inquiry could not be sent right now. Please try again in a moment.';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Inquiry Message →';
          submitBtn.style.opacity = '';
          submitBtn.style.cursor = '';
        }
      }
    });
  }
});

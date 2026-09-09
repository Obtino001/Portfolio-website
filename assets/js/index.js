/**
 * Yasir Malik Portfolio — Index Page Interactions (index.js)
 * Hero Form, FAQ Accordion
 */
(function () {
  'use strict';

  // ── BUDGET DROPDOWN COLORING ──
  const budgetSelect = document.getElementById('hf-budget');
  if (budgetSelect) {
    budgetSelect.addEventListener('change', function () {
      this.style.color = this.value ? '#111827' : '#9aa3b0';
    });
  }

  // ── HERO CONTACT FORM SUBMISSION ──
  const heroForm = document.getElementById('hero-form');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('hf-name') ? document.getElementById('hf-name').value.trim() : '';
      const email = document.getElementById('hf-email') ? document.getElementById('hf-email').value.trim() : '';
      const message = document.getElementById('hf-message') ? document.getElementById('hf-message').value.trim() : '';
      const successEl = document.getElementById('hf-success');
      const errorEl = document.getElementById('hf-error');
      const submitBtn = document.getElementById('hf-submit');

      if (!name || !email || !message) {
        if (errorEl) errorEl.style.display = 'block';
        if (successEl) successEl.style.display = 'none';
        return;
      }

      if (errorEl) errorEl.style.display = 'none';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      setTimeout(() => {
        if (successEl) successEl.style.display = 'flex';
        if (submitBtn) submitBtn.style.display = 'none';
        heroForm.reset();
      }, 500);
    });
  }

  // ── FAQ ACCORDION ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        const qBtn = openItem.querySelector('.faq-question');
        if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

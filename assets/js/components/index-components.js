/**
 * Yasir Malik Portfolio — Index Web Components (index-components.js)
 * <faq-accordion> & <contact-form>
 */

// ── 1. <faq-accordion> ──
class FaqAccordion extends HTMLElement {
  connectedCallback() {
    this.items = this.querySelectorAll('.faq-item');
    this.buttons = this.querySelectorAll('.faq-question');

    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('open');

        // Close all other items
        this.querySelectorAll('.faq-item.open').forEach(openItem => {
          openItem.classList.remove('open');
          const qBtn = openItem.querySelector('.faq-question');
          if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
        });

        // Toggle selected item
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
}
if (!customElements.get('faq-accordion')) {
  customElements.define('faq-accordion', FaqAccordion);
}

// ── 2. <contact-form> ──
class ContactForm extends HTMLElement {
  connectedCallback() {
    this.form = this.querySelector('form') || this;
    this.budgetSelect = this.querySelector('#hf-budget') || this.querySelector('select');
    this.nameInput = this.querySelector('#hf-name');
    this.emailInput = this.querySelector('#hf-email');
    this.msgInput = this.querySelector('#hf-message');
    this.successEl = this.querySelector('#hf-success');
    this.errorEl = this.querySelector('#hf-error');
    this.submitBtn = this.querySelector('#hf-submit') || this.querySelector('button[type="submit"]');

    if (this.budgetSelect) {
      this.budgetSelect.addEventListener('change', (e) => {
        e.target.style.color = e.target.value ? '#111827' : '#9aa3b0';
      });
    }

    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.nameInput ? this.nameInput.value.trim() : '';
    const email = this.emailInput ? this.emailInput.value.trim() : '';
    const message = this.msgInput ? this.msgInput.value.trim() : '';

    if (!name || !email || !message) {
      if (this.errorEl) this.errorEl.style.display = 'block';
      if (this.successEl) this.successEl.style.display = 'none';
      return;
    }

    if (this.errorEl) this.errorEl.style.display = 'none';
    if (this.submitBtn) {
      this.submitBtn.disabled = true;
      this.submitBtn.textContent = 'Sending...';
    }

    setTimeout(() => {
      if (this.successEl) this.successEl.style.display = 'flex';
      if (this.submitBtn) this.submitBtn.style.display = 'none';
      if (this.form && this.form.reset) this.form.reset();
    }, 500);
  }
}
if (!customElements.get('contact-form')) {
  customElements.define('contact-form', ContactForm);
}

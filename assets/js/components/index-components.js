/**
 * Yasir Malik Portfolio — Index Web Components (index-components.js)
 * <faq-accordion> & <contact-form>
 * 
 * Connected to Google Apps Script & Google Sheets
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

// ── 2. <contact-form> with Google Sheet Sync & Celebratory Animations ──
class ContactForm extends HTMLElement {
  connectedCallback() {
    // 💡 PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL BELOW:
    // Follow the 60-second guide in google-apps-script.js
    this.GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzyxmPjJ_N_dXGYahoHHK4uSuG20hV2rksIyZPTtqL_-s61a4fZdchM8TFRxwRHankm/exec';

    this.form = this.querySelector('form') || this.querySelector('#hero-form');
    this.budgetSelect = this.querySelector('#hf-budget') || this.querySelector('select');
    this.nameInput = this.querySelector('#hf-name');
    this.emailInput = this.querySelector('#hf-email');
    this.msgInput = this.querySelector('#hf-message');
    this.submitBtn = this.querySelector('#hf-submit') || this.querySelector('button[type="submit"]');
    this.errorEl = this.querySelector('#hf-error');
    this.successCard = document.getElementById('hf-success-card') || this.querySelector('#hf-success-card');
    this.clientNameEl = document.getElementById('success-client-name') || this.querySelector('#success-client-name');
    this.resetBtn = document.getElementById('hf-reset-btn') || this.querySelector('#hf-reset-btn');

    if (this.budgetSelect) {
      this.budgetSelect.addEventListener('change', (e) => {
        e.target.style.color = e.target.value ? '#111827' : '#9aa3b0';
      });
    }

    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.resetToForm());
    }

    this.initCtaConnectors();
  }

  // Connect all CTAs across the site to focus & pre-populate the form
  initCtaConnectors() {
    document.querySelectorAll('a[href="#hero-form"], .ann-cta, [href="#schedule"]').forEach(cta => {
      cta.addEventListener('click', (e) => {
        const text = cta.textContent.trim().toLowerCase();
        if (text.includes('audit')) {
          if (this.msgInput && !this.msgInput.value) {
            this.msgInput.value = "Hi Yasir, I'd like to book a free Shopify speed & CRO audit for my store.";
          }
        }
        setTimeout(() => {
          if (this.nameInput) this.nameInput.focus();
        }, 400);
      });
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const name = this.nameInput ? this.nameInput.value.trim() : '';
    const email = this.emailInput ? this.emailInput.value.trim() : '';
    const budget = this.budgetSelect ? this.budgetSelect.value : 'Under $2,000';
    const message = this.msgInput ? this.msgInput.value.trim() : '';

    // Validation
    if (!name || !email || !message) {
      if (this.errorEl) this.errorEl.style.display = 'block';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (this.errorEl) {
        this.errorEl.textContent = 'Please provide a valid email address.';
        this.errorEl.style.display = 'block';
      }
      return;
    }

    if (this.errorEl) this.errorEl.style.display = 'none';

    // ── 1. LOADER STATE ──
    const originalBtnHtml = this.submitBtn.innerHTML;
    this.submitBtn.disabled = true;
    this.submitBtn.innerHTML = `<span class="btn-spinner"></span> Sending inquiry to Yasir...`;
    if (this.nameInput) this.nameInput.disabled = true;
    if (this.emailInput) this.emailInput.disabled = true;
    if (this.budgetSelect) this.budgetSelect.disabled = true;
    if (this.msgInput) this.msgInput.disabled = true;

    // Build payload for Google Sheet
    const payload = new URLSearchParams();
    payload.append('name', name);
    payload.append('email', email);
    payload.append('budget', budget || 'Under $2,000');
    payload.append('message', message);
    payload.append('page', window.location.href);
    payload.append('timestamp', new Date().toISOString());

    try {
      // If Web App URL is configured, send to Google Sheets
      if (this.GOOGLE_SCRIPT_URL && this.GOOGLE_SCRIPT_URL.startsWith('https://script.google.com')) {
        await fetch(this.GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: payload,
          mode: 'no-cors' // Google Apps Script redirects require no-cors mode in browser
        });
      } else {
        // Realistic network latency simulation for local development/preview
        await new Promise(r => setTimeout(r, 650));
      }
    } catch (err) {
      console.warn('Google Sheet submission notice:', err);
    }

    // ── 2. CELEBRATORY SUCCESS STATE WITH ANIMATIONS ──
    if (this.clientNameEl) {
      const firstName = name.split(' ')[0];
      this.clientNameEl.textContent = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    }

    // Fade out form and pop success card
    if (this.form) this.form.style.display = 'none';
    if (this.successCard) {
      this.successCard.style.display = 'flex';
      this.successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Reset inputs
    this.submitBtn.innerHTML = originalBtnHtml;
    this.submitBtn.disabled = false;
    if (this.nameInput) { this.nameInput.disabled = false; this.nameInput.value = ''; }
    if (this.emailInput) { this.emailInput.disabled = false; this.emailInput.value = ''; }
    if (this.budgetSelect) { this.budgetSelect.disabled = false; this.budgetSelect.selectedIndex = 0; }
    if (this.msgInput) { this.msgInput.disabled = false; this.msgInput.value = ''; }
  }

  resetToForm() {
    if (this.successCard) this.successCard.style.display = 'none';
    if (this.form) {
      this.form.style.display = 'flex';
      this.form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (this.nameInput) this.nameInput.focus();
    }
  }
}
if (!customElements.get('contact-form')) {
  customElements.define('contact-form', ContactForm);
}

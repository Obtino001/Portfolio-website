/**
 * Yasir Malik Portfolio — Core Web Components (main-components.js)
 * Native HTML5 Custom Elements for maximum speed, zero framework overhead.
 */

// ── 1. <announcement-bar> ──
class AnnouncementBar extends HTMLElement {
  connectedCallback() {
    this.closeBtn = this.querySelector('.announcement-close') || this.querySelector('#announcement-close');
    this.bar = this.querySelector('.announcement-bar') || this;

    if (sessionStorage.getItem('ann_dismissed') === '1') {
      this.bar.classList.add('hidden');
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.bar.classList.add('hidden');
        sessionStorage.setItem('ann_dismissed', '1');
      });
    }
  }
}
if (!customElements.get('announcement-bar')) {
  customElements.define('announcement-bar', AnnouncementBar);
}

// ── 2. <mobile-nav> ──
class MobileNav extends HTMLElement {
  connectedCallback() {
    this.hamburgerBtn = document.getElementById('nav-hamburger') || this.querySelector('#nav-hamburger') || this.querySelector('.nav-hamburger');
    this.mobileMenu = document.getElementById('mobile-menu') || this.querySelector('#mobile-menu') || this.querySelector('.mobile-menu');

    if (this.hamburgerBtn && this.mobileMenu) {
      this.hamburgerBtn.addEventListener('click', () => this.toggleMenu());
    }

    this.querySelectorAll('.mobile-menu-links a, .mobile-menu-cta a').forEach(link => {
      link.addEventListener('click', () => {
        if (this.mobileMenu && this.mobileMenu.classList.contains('open')) {
          this.closeMenu();
        }
      });
    });

    document.querySelectorAll('.mobile-menu-links a, .mobile-menu-cta a').forEach(link => {
      link.addEventListener('click', () => {
        if (this.mobileMenu && this.mobileMenu.classList.contains('open')) {
          this.closeMenu();
        }
      });
    });
  }

  toggleMenu() {
    const isOpen = this.mobileMenu.classList.contains('open');
    if (isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.mobileMenu.classList.add('open');
    this.mobileMenu.removeAttribute('inert');
    this.mobileMenu.setAttribute('aria-hidden', 'false');
    if (this.hamburgerBtn) {
      this.hamburgerBtn.classList.add('open');
      this.hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.mobileMenu.classList.remove('open');
    this.mobileMenu.setAttribute('inert', '');
    this.mobileMenu.setAttribute('aria-hidden', 'true');
    if (this.hamburgerBtn) {
      this.hamburgerBtn.classList.remove('open');
      this.hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }
}
if (!customElements.get('mobile-nav')) {
  customElements.define('mobile-nav', MobileNav);
}

// ── 3. <logo-popover> ──
class LogoPopover extends HTMLElement {
  connectedCallback() {
    this.trigger = this.querySelector('#logo-mark-trigger') || this.querySelector('.logo-mark');
    this.popover = this.querySelector('#logo-popover') || this.querySelector('.logo-popover');
    this.copyBtn = this.querySelector('#logo-copy-svg') || this.querySelector('.logo-popover__btn');
    this.copyLabel = this.querySelector('#logo-copy-label');

    if (this.trigger && this.popover) {
      this.trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = this.popover.classList.toggle('open');
        this.trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      document.addEventListener('click', () => {
        this.popover.classList.remove('open');
        this.trigger.setAttribute('aria-expanded', 'false');
      });

      this.popover.addEventListener('click', (e) => e.stopPropagation());
    }

    if (this.copyBtn) {
      this.copyBtn.addEventListener('click', async () => {
        const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#152238"/><path d="M9 10L14 17V22H18V17L23 10H19L16 14.5L13 10H9Z" fill="#7eb5d5"/><circle cx="16" cy="7" r="1.5" fill="#16a34a"/></svg>`;
        try {
          await navigator.clipboard.writeText(svgContent);
          if (this.copyLabel) this.copyLabel.textContent = 'Copied!';
          this.copyBtn.classList.add('copied');
          setTimeout(() => {
            if (this.copyLabel) this.copyLabel.textContent = 'Copy Logo as SVG';
            this.copyBtn.classList.remove('copied');
            if (this.popover) this.popover.classList.remove('open');
          }, 1500);
        } catch (_) {}
      });
    }
  }
}
if (!customElements.get('logo-popover')) {
  customElements.define('logo-popover', LogoPopover);
}

// ── 4. <scroll-reveal> ──
class ScrollReveal extends HTMLElement {
  connectedCallback() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      const targets = this.querySelectorAll('.reveal');
      if (targets.length > 0) {
        targets.forEach(el => observer.observe(el));
      } else {
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      }
    } else {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  }
}
if (!customElements.get('scroll-reveal')) {
  customElements.define('scroll-reveal', ScrollReveal);
}

// ── Global sticky nav & smooth scroll listeners ──
(function initGlobalBehaviors() {
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navOffset = 72;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})();

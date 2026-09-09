/**
 * Yasir Malik Portfolio — Core Interactions (main.js)
 * Nav, Announcement Bar, Mobile Drawer, Logo Popover, Scroll Reveal
 */
(function () {
  'use strict';

  // ── NAV SCROLL BEHAVIOR ──
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── ANNOUNCEMENT BAR CLOSE ──
  const closeBtn = document.getElementById('announcement-close');
  const bar = document.getElementById('announcement-bar');
  if (closeBtn && bar) {
    // Check if dismissed in this session
    if (sessionStorage.getItem('ann_dismissed') === '1') {
      bar.classList.add('hidden');
    }
    closeBtn.addEventListener('click', () => {
      bar.classList.add('hidden');
      sessionStorage.setItem('ann_dismissed', '1');
    });
  }

  // ── MOBILE MENU TOGGLE ──
  const hamburgerBtn = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function toggleMobileMenu() {
    if (!mobileMenu || !hamburgerBtn) return;
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('inert', '');
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.add('open');
      mobileMenu.removeAttribute('inert');
      hamburgerBtn.classList.add('open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
  }

  document.querySelectorAll('.mobile-menu-links a, .mobile-menu-cta a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu && mobileMenu.classList.contains('open')) toggleMobileMenu();
    });
  });

  // ── LOGO POPOVER & COPY SVG ──
  const logoTrigger = document.getElementById('logo-mark-trigger');
  const logoPopover = document.getElementById('logo-popover');
  const copySvgBtn = document.getElementById('logo-copy-svg');
  const copyLabel = document.getElementById('logo-copy-label');

  if (logoTrigger && logoPopover) {
    logoTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      logoPopover.classList.toggle('open');
      logoTrigger.setAttribute('aria-expanded', logoPopover.classList.contains('open') ? 'true' : 'false');
    });

    document.addEventListener('click', () => {
      logoPopover.classList.remove('open');
      if (logoTrigger) logoTrigger.setAttribute('aria-expanded', 'false');
    });

    logoPopover.addEventListener('click', (e) => e.stopPropagation());
  }

  if (copySvgBtn) {
    copySvgBtn.addEventListener('click', async () => {
      const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#152238"/><path d="M9 10L14 17V22H18V17L23 10H19L16 14.5L13 10H9Z" fill="#7eb5d5"/><circle cx="16" cy="7" r="1.5" fill="#16a34a"/></svg>`;
      try {
        await navigator.clipboard.writeText(svgContent);
        if (copyLabel) copyLabel.textContent = 'Copied!';
        copySvgBtn.classList.add('copied');
        setTimeout(() => {
          if (copyLabel) copyLabel.textContent = 'Copy Logo as SVG';
          copySvgBtn.classList.remove('copied');
          if (logoPopover) logoPopover.classList.remove('open');
        }, 1500);
      } catch (_) {}
    });
  }

  // ── REVEAL ON SCROLL ──
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  // ── SMOOTH SCROLL FOR IN-PAGE ANCHORS ──
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

/**
 * Yasir Malik Portfolio — Blog Page Logic (blog.js)
 * Search, Category Filtering, Article Preview Modal
 */
(function () {
  'use strict';

  const searchInput = document.getElementById('blogSearch');
  const catButtons = document.querySelectorAll('.cat-btn');
  const allCards = document.querySelectorAll('.blog-card');

  let currentFilter = 'all';
  let currentSearch = '';

  function filterCards() {
    allCards.forEach(card => {
      const titleEl = card.querySelector('.blog-card__title');
      const excerptEl = card.querySelector('.blog-card__excerpt');
      const title = titleEl ? titleEl.textContent.toLowerCase() : '';
      const excerpt = excerptEl ? excerptEl.textContent.toLowerCase() : '';
      const cat = card.getAttribute('data-category');

      const matchesCat = (currentFilter === 'all') || (cat && cat.toLowerCase() === currentFilter.toLowerCase());
      const matchesSearch = !currentSearch || title.includes(currentSearch) || excerpt.includes(currentSearch) || (cat && cat.toLowerCase().includes(currentSearch));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        card.classList.add('visible');
      } else {
        card.style.display = 'none';
      }
    });
  }

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }

  // ── ARTICLE PREVIEW MODAL ──
  const modalBackdrop = document.getElementById('articleModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const modalCat = document.getElementById('modalCat');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalReadTime = document.getElementById('modalReadTime');
  const modalExcerpt = document.getElementById('modalExcerpt');

  function openModal(card) {
    if (!modalBackdrop) return;
    const cat = card.querySelector('.blog-card__cat') ? card.querySelector('.blog-card__cat').textContent : 'Shopify';
    const title = card.querySelector('.blog-card__title') ? card.querySelector('.blog-card__title').textContent : '';
    const excerpt = card.querySelector('.blog-card__excerpt') ? card.querySelector('.blog-card__excerpt').textContent : '';
    const metaSpans = card.querySelectorAll('.blog-card__meta span');
    const date = metaSpans[0] ? metaSpans[0].textContent : '2026';
    const readTime = metaSpans[2] ? metaSpans[2].textContent : '8 min read';

    if (modalCat) modalCat.textContent = cat;
    if (modalTitle) modalTitle.textContent = title;
    if (modalExcerpt) modalExcerpt.textContent = excerpt;
    if (modalDate) modalDate.textContent = date;
    if (modalReadTime) modalReadTime.textContent = readTime;

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  allCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(card);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) closeModal();
  });
})();

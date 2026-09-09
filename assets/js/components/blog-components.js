/**
 * Yasir Malik Portfolio — Blog Web Components (blog-components.js)
 * <blog-filter> & <article-modal>
 */

// ── 1. <blog-filter> ──
class BlogFilter extends HTMLElement {
  connectedCallback() {
    this.searchInput = document.getElementById('blogSearch') || this.querySelector('#blogSearch');
    this.catButtons = document.querySelectorAll('.cat-btn');
    this.allCards = document.querySelectorAll('.blog-card');
    this.currentFilter = 'all';
    this.currentSearch = '';

    this.catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.getAttribute('data-filter') || 'all';
        this.filterCards();
      });
    });

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.currentSearch = e.target.value.trim().toLowerCase();
        this.filterCards();
      });
    }
  }

  filterCards() {
    this.allCards.forEach(card => {
      const titleEl = card.querySelector('.blog-card__title');
      const excerptEl = card.querySelector('.blog-card__excerpt');
      const title = titleEl ? titleEl.textContent.toLowerCase() : '';
      const excerpt = excerptEl ? excerptEl.textContent.toLowerCase() : '';
      const cat = card.getAttribute('data-category');

      const matchesCat = (this.currentFilter === 'all') || (cat && cat.toLowerCase() === this.currentFilter.toLowerCase());
      const matchesSearch = !this.currentSearch || title.includes(this.currentSearch) || excerpt.includes(this.currentSearch) || (cat && cat.toLowerCase().includes(this.currentSearch));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        card.classList.add('visible');
      } else {
        card.style.display = 'none';
      }
    });
  }
}
if (!customElements.get('blog-filter')) {
  customElements.define('blog-filter', BlogFilter);
}

// ── 2. <article-modal> ──
class ArticleModal extends HTMLElement {
  connectedCallback() {
    this.backdrop = document.getElementById('articleModalBackdrop') || this.querySelector('#articleModalBackdrop');
    this.closeBtn = document.getElementById('modalCloseBtn') || this.querySelector('#modalCloseBtn');
    this.doneBtn = document.getElementById('modalDoneBtn') || this.querySelector('#modalDoneBtn');
    this.modalCat = document.getElementById('modalCat');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalDate = document.getElementById('modalDate');
    this.modalReadTime = document.getElementById('modalReadTime');
    this.modalExcerpt = document.getElementById('modalExcerpt');

    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        this.open(card);
      });
    });

    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.doneBtn) this.doneBtn.addEventListener('click', () => this.close());
    if (this.backdrop) {
      this.backdrop.addEventListener('click', (e) => {
        if (e.target === this.backdrop) this.close();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.backdrop && this.backdrop.classList.contains('open')) this.close();
    });
  }

  open(card) {
    if (!this.backdrop) return;
    const cat = card.querySelector('.blog-card__cat') ? card.querySelector('.blog-card__cat').textContent : 'Shopify';
    const title = card.querySelector('.blog-card__title') ? card.querySelector('.blog-card__title').textContent : '';
    const excerpt = card.querySelector('.blog-card__excerpt') ? card.querySelector('.blog-card__excerpt').textContent : '';
    const metaSpans = card.querySelectorAll('.blog-card__meta span');
    const date = metaSpans[0] ? metaSpans[0].textContent : '2026';
    const readTime = metaSpans[2] ? metaSpans[2].textContent : '8 min read';

    if (this.modalCat) this.modalCat.textContent = cat;
    if (this.modalTitle) this.modalTitle.textContent = title;
    if (this.modalExcerpt) this.modalExcerpt.textContent = excerpt;
    if (this.modalDate) this.modalDate.textContent = date;
    if (this.modalReadTime) this.modalReadTime.textContent = readTime;

    this.backdrop.classList.add('open');
    this.backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.backdrop) return;
    this.backdrop.classList.remove('open');
    this.backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}
if (!customElements.get('article-modal')) {
  customElements.define('article-modal', ArticleModal);
}

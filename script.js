/**
 * ==========================================================================
 * PORTOFOLIO PROFESIONAL — NAUFAL ILMI BEKTI
 * JavaScript Interaktif & Responsif (Vanilla JS)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveNavOnScroll();
  initScrollAnimations();
  initCopyrightYear();
  initBackToTop();
  initViewSwitcher();
  initColorCopy();
  initBusinessCardInteractions();
});

/**
 * 1. NAVBAR & MOBILE HAMBURGER MENU
 */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Update hamburger icon to close (X) and back
      const icon = toggleBtn.querySelector('svg');
      if (icon) {
        if (isOpen) {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
        } else {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          const icon = toggleBtn.querySelector('svg');
          if (icon) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
          }
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('svg');
        if (icon) {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/**
 * 2. ACTIVE NAV LINK ON SCROLL (IntersectionObserver)
 */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * 3. SCROLL REVEAL ANIMATIONS
 */
function initScrollAnimations() {
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll('.fade-up');

  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 4. COPYRIGHT YEAR AUTOMATION
 */
function initCopyrightYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
}

/**
 * 5. BACK TO TOP SMOOTH SCROLL
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * 6. VIEW SWITCHER (Brand Identity Board vs Website Portofolio)
 */
function initViewSwitcher() {
  const btnBrand = document.getElementById('switch-brand-board');
  const btnPortfolio = document.getElementById('switch-portfolio');
  const viewBrand = document.getElementById('view-brand-board');
  const viewPortfolio = document.getElementById('view-portfolio');
  const quickJumpToPortfolio = document.querySelectorAll('.js-jump-portfolio');
  const quickJumpToBrand = document.querySelectorAll('.js-jump-brand');

  function activateView(viewName) {
    if (viewName === 'portfolio') {
      btnPortfolio?.classList.add('active');
      btnBrand?.classList.remove('active');
      viewPortfolio?.classList.remove('view-hidden');
      viewBrand?.classList.add('view-hidden');
      window.location.hash = 'portfolio';
    } else {
      btnBrand?.classList.add('active');
      btnPortfolio?.classList.remove('active');
      viewBrand?.classList.remove('view-hidden');
      viewPortfolio?.classList.add('view-hidden');
      window.location.hash = 'brand-board';
    }
  }

  btnBrand?.addEventListener('click', () => {
    activateView('brand');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btnPortfolio?.addEventListener('click', () => {
    activateView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  quickJumpToPortfolio.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      activateView('portfolio');
      const target = document.getElementById('home');
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  quickJumpToBrand.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      activateView('brand');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Handle URL Hash deep linking
  if (window.location.hash === '#portfolio') {
    activateView('portfolio');
  } else {
    // Default to Brand Board as requested for the new brand identity presentation
    activateView('brand');
  }
}

/**
 * 7. COLOR HEX COPY WITH TOAST NOTIFICATION
 */
function initColorCopy() {
  const copyButtons = document.querySelectorAll('.js-copy-hex');
  const toast = document.getElementById('toast-notice');

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const hex = btn.getAttribute('data-hex') || '#00B894';
      try {
        await navigator.clipboard.writeText(hex);
        showToast(`Kode HEX ${hex} berhasil disalin!`);
      } catch (err) {
        showToast(`HEX: ${hex}`);
      }
    });
  });
}

/**
 * 8. INTERACTIVE 3D PERSPECTIVE ON DIGITAL BUSINESS CARDS
 */
function initBusinessCardInteractions() {
  const cards = document.querySelectorAll('.js-tilt-card');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}



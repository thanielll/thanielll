const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#primary-navigation');
const year = document.querySelector('#year');
const revealElements = document.querySelectorAll('.reveal');
const faqItems = document.querySelectorAll('.faq-item');

if (year) {
  year.textContent = new Date().getFullYear();
}

const closeNavigation = () => {
  if (!navToggle || !navLinks) return;

  navLinks.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');

    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });
}

const updateHeaderState = () => {
  if (!header) return;

  header.classList.toggle('is-scrolled', window.scrollY > 24);
};

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.removeAttribute('open');
      }
    });
  });
});

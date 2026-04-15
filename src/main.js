// VetStation Core — Landing JS
// Minimal: scroll effects + nav active state

// ── Scroll-in animation for sections ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.10 }
);

// Group by parent to stagger siblings
const animEls = document.querySelectorAll(
  '.pain-card, .pillar-card, .flow-step, .diff-card, .includes-list li, .growth-tier'
);

// Build sibling groups for stagger
const parentMap = new Map();
animEls.forEach((el) => {
  const parent = el.parentElement;
  if (!parentMap.has(parent)) parentMap.set(parent, []);
  parentMap.get(parent).push(el);
});

parentMap.forEach((siblings) => {
  siblings.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity .4s ${i * 0.07}s ease, transform .4s ${i * 0.07}s ease`;
    observer.observe(el);
  });
});

// visible class triggers the animation
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  </style>
`);

// ── Nav shrink on scroll ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 2px 16px rgba(0,0,0,.08)';
    nav.style.background = 'rgba(250,250,250,.97)';
  } else {
    nav.style.boxShadow = 'none';
    nav.style.background = '';
  }
}, { passive: true });

// ── Smooth active nav link ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--c-brand)';
          }
        });
      }
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);

sections.forEach((s) => navObserver.observe(s));

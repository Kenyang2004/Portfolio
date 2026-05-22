// ============================================
//  Ken Yang Portfolio — main.js
// ============================================


// ---- TYPING ANIMATION ----
const phrases = [
  'CS Student @ Simon Fraser University',
  'Backend Developer',
  'AI / ML Enthusiast',
  'Building cool things with code',
];

let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;

const typedEl = document.getElementById('typed');

function type() {
  const phrase = phrases[phraseIndex];

  if (!isDeleting) {
    typedEl.textContent = phrase.slice(0, ++charIndex);
    if (charIndex === phrase.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = phrase.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 300);
      return;
    }
  }

  setTimeout(type, isDeleting ? 40 : 70);
}

setTimeout(type, 1200);


// ---- SCROLL FADE-IN ----
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
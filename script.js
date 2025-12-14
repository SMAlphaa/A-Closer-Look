// scripts.js - navigation + mobile toggle
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const opened = navLinks.style.display === 'flex';
      navLinks.style.display = opened ? 'none' : 'flex';
      // ensure dropdowns are visible in mobile menu
      navLinks.style.flexDirection = 'column';
    });
  }

  // Close mobile menu when clicking outside (optional nicety)
  document.addEventListener('click', (e) => {
    if (!navToggle || !navLinks) return;
    const target = e.target;
    if (window.innerWidth <= 880 && navLinks.style.display === 'flex') {
      if (!navLinks.contains(target) && target !== navToggle) {
        navLinks.style.display = 'none';
      }
    }
  });
});

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');

const closeMenu = () => {
  header.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'メニューを開く');
};

menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const hero = document.querySelector('.hero');

const updateFloatingActions = () => {
  document.body.classList.toggle('scrolled-past-hero', window.scrollY > hero.offsetHeight - 120);
};

updateFloatingActions();
window.addEventListener('scroll', updateFloatingActions, { passive: true });

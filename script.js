const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional: auto-close menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
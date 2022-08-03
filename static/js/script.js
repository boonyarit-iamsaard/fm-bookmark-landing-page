const hamburgerMenu = document.querySelector('.hamburger-menu');
const logo = document.querySelector('.logo');
const primaryNavigation = document.querySelector('.primary-navigation');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

/**
 * Toggle the navigation menu.
 * @param {Element[]} elements - The elements to toggle.
 */
const toggleNavigationMenu = elements => {
  elements.forEach(element => {
    element.classList.toggle('js-open');
  });
};

hamburgerMenu.addEventListener('click', () => {
  toggleNavigationMenu([hamburgerMenu, logo, primaryNavigation]);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleNavigationMenu([hamburgerMenu, logo, primaryNavigation]);
  });
});

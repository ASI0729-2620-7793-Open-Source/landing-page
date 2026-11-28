/**
 * Behavior for the Nubi Landing Page: call-to-action routing to the Web Application
 * and the accessible mobile navigation menu.
 */
(() => {
  'use strict';

  // Base URL of the deployed Nubi Web Application. The call-to-action buttons of the landing
  // page redirect to its sign-up and sign-in views.
  const WEB_APP_URL = 'https://nubi-frontend-7793.web.app';
  const APP_ROUTES = { signup: '/registro', login: '/ingresar' };

  if (WEB_APP_URL) {
    document.querySelectorAll('[data-app-route]').forEach((link) => {
      const route = APP_ROUTES[link.dataset.appRoute];
      if (route) {
        link.href = `${WEB_APP_URL}${route}`;
      }
    });
  }

  const menuToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    const setMenuOpen = (isOpen) => {
      mobileMenu.hidden = !isOpen;
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.addEventListener('click', () => {
      setMenuOpen(mobileMenu.hidden);
    });

    mobileMenu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        setMenuOpen(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !mobileMenu.hidden) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });
  }
})();

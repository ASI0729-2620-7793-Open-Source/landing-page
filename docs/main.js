/**
 * Behavior for the Nubi Landing Page: call-to-action routing to the Web Application
 * and the accessible mobile navigation menu.
 */
(() => {
  'use strict';

  // Base URL of the deployed Nubi Web Application. While it is empty, the call-to-action
  // buttons keep pointing to the sections of this page (plans / contact).
  const WEB_APP_URL = '';
  const APP_ROUTES = { signup: '/sign-up', login: '/login' };

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

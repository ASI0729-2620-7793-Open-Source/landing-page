/**
 * Internationalization (i18n) for the Nubi Landing Page.
 * Default language: English (en_US). Also available: Latin American Spanish (es_419).
 * Translations live in i18n/en.json and i18n/es.json and are applied to any element
 * carrying data-i18n (text), data-i18n-html (trusted markup such as <br>) or
 * data-i18n-<attribute> (alt, aria-label, content).
 */
(() => {
  'use strict';

  const DEFAULT_LANGUAGE = 'en';
  const STORAGE_KEY = 'nubi-language';
  const LOCALE_TAGS = { en: 'en', es: 'es-419' };
  const TRANSLATABLE_ATTRIBUTES = ['alt', 'aria-label', 'content', 'title'];
  const messagesCache = {};

  const readStoredLanguage = () => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return LOCALE_TAGS[stored] ? stored : DEFAULT_LANGUAGE;
    } catch (error) {
      return DEFAULT_LANGUAGE;
    }
  };

  const storeLanguage = (language) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // Storage can be blocked (private mode); the choice simply is not remembered.
    }
  };

  const loadMessages = async (language) => {
    if (!messagesCache[language]) {
      const response = await fetch(`i18n/${language}.json`);
      if (!response.ok) {
        throw new Error(`Cannot load locale ${language}`);
      }
      messagesCache[language] = await response.json();
    }
    return messagesCache[language];
  };

  const applyMessages = (messages) => {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const message = messages[element.dataset.i18n];
      if (message === undefined) {
        return;
      }
      if (element.hasAttribute('data-i18n-html')) {
        element.innerHTML = message;
      } else {
        element.textContent = message;
      }
    });

    TRANSLATABLE_ATTRIBUTES.forEach((attribute) => {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
        const message = messages[element.getAttribute(`data-i18n-${attribute}`)];
        if (message !== undefined) {
          element.setAttribute(attribute, message);
        }
      });
    });
  };

  const setLanguage = async (language) => {
    try {
      applyMessages(await loadMessages(language));
    } catch (error) {
      // Offline or opened from the file system: keep the English markup that ships with the page.
      language = DEFAULT_LANGUAGE;
    }
    document.documentElement.lang = LOCALE_TAGS[language];
    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    storeLanguage(language);
  };

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  const initialLanguage = readStoredLanguage();
  if (initialLanguage !== DEFAULT_LANGUAGE) {
    setLanguage(initialLanguage);
  }
})();

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locale/en.json';
import translationPT from '../locale/pt.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'sessionStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'sessionStorage', 'cookie'],
    },
  });

export default i18n;

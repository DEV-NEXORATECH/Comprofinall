import { createContext, useContext, useState, useCallback } from 'react';
import { id } from '../locales/id';
import { en } from '../locales/en';

const LanguageContext = createContext();

const locales = { id, en };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  }, []);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let val = locales[lang];
    for (const k of keys) {
      if (val == null) return key;
      val = val[k];
    }
    return val ?? key;
  }, [lang]);

  const locale = locales[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

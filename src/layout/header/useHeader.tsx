import { useState } from 'react';

export const useHeader = () => {
  const [state, setState] = useState({
    darkMode: false,
    currencyOpen: false,
    languageOpen: false,
  });
  const [currency, setCurrency] = useState<string>('eur');
  const [language, setLanguage] = useState<string>('en');

  const toggleDarkMode = () =>
    setState((prev) => ({
      ...prev,
      darkMode: !prev.darkMode,
    }));

  const toggleOpenCurrency = () =>
    setState((prev) => ({
      ...prev,
      currencyOpen: !prev.currencyOpen,
      languageOpen: false,
    }));

  const toggleOpenLanguage = () =>
    setState((prev) => ({
      ...prev,
      languageOpen: !prev.languageOpen,
      currencyOpen: false,
    }));
  return {
    state,
    currency,
    language,
    setCurrency,
    setLanguage,
    toggleDarkMode,
    toggleOpenCurrency,
    toggleOpenLanguage,
  };
};

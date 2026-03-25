import { useEffect, useState } from 'react';

export const useToggleDarkMode = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return { toggleDarkMode, dark };
};

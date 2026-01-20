import { useCallback, useEffect, useRef, useState } from 'react';

export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleClickOutside = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return { ref, isOpen, open, close, toggle };
};

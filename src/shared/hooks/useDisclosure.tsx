import { useCallback, useEffect, useRef, useState } from 'react';

export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // Ref typed as HTMLDivElement (or change to whatever element you wrap)
  const ref = useRef<HTMLDivElement | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleClickOutside = useCallback((e: MouseEvent | TouchEvent) => {
    // Cast target to Node for 'contains' check
    const target = e.target as Node;
    if (ref.current && !ref.current.contains(target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Listen for both mouse and touch events
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return { ref, isOpen, open, close, toggle };
};

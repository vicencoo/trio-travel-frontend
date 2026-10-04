import { useCallback, useEffect, useRef, useState } from 'react';

export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // Ref typed as HTMLDivElement (or change to whatever element you wrap)
  const ref = useRef<HTMLDivElement | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleClickOutside = useCallback((e: MouseEvent | TouchEvent) => {
    // composedPath() is captured at dispatch time, so it still includes the
    // wrapper when the clicked node was removed by the re-render this same
    // click triggered (e.g. the Menu icon swapped for the X icon).
    if (ref.current && !e.composedPath().includes(ref.current)) {
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

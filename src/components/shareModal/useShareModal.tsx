import { useEffect, useRef, useState } from 'react';

export const useShareModal = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleIsCopied = () => {
    setIsCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 3500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return { isCopied, handleIsCopied };
};

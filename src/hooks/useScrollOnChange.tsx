import { useEffect, useRef } from 'react';

export const useScrollOnChange = (trigger: number | boolean) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [trigger]);

  return { scrollRef };
};

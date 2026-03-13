import { useEffect, useRef } from 'react';

const HEADER_OFFSET = 65;

export const useScrollOnChange = (trigger: number | boolean) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const el = scrollRef.current;
    if (!el) return;

    const scroll = () => {
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

      // snap first
      window.scrollTo({ top, behavior: 'smooth' });

      // correct after layout settles
      setTimeout(() => {
        const finalTop =
          el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

        window.scrollTo({ top: finalTop, behavior: 'smooth' });
      }, 100);
    };

    requestAnimationFrame(scroll);
  }, [trigger]);

  return { scrollRef };
};

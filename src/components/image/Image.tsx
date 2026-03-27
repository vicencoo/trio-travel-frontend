import { useEffect, useRef } from 'react';
import type { ImageProps } from './types';
// import { DEFAULT_URL } from '@/constants/config';

export const Image = ({
  className,
  img,
  alt,
  loading = 'lazy',
  priority = 'auto',
  onClick,
  src,
}: ImageProps) => {
  const imageSrc = src ? `${src}` : img;
  const loadingType = priority === 'high' ? 'eager' : loading;
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.setAttribute('fetchpriority', priority);
    }
  }, [priority]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      loading={loadingType}
      className={className}
      onClick={onClick}
    />
  );
};

import { DEFAULT_URL } from '@/utils/defaults';
import type { ImageProps } from './types';

export const Image = ({ className, img, onClick, src }: ImageProps) => {
  return (
    <>
      {src ? (
        <img
          src={`${DEFAULT_URL}${src}`}
          className={className}
          loading='lazy'
          onClick={onClick}
        />
      ) : (
        <img src={img} className={className} onClick={onClick} />
      )}
    </>
  );
};

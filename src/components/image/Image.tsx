import type { ImageProps } from './types';

export const Image = ({ className, img, onClick }: ImageProps) => {
  return (
    <>
      {/* {src ? (
        <img
          src={`${DEFAULT_URL}${src}`}
          className={className}
          onClick={onClick}
        />
      ) : (
        <img src={img} className={className} onClick={onClick} />
      )} */}
      <img src={img} className={className} onClick={onClick} />
    </>
  );
};

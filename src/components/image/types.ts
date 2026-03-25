export type ImageProps = {
  src?: string | File;
  img?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
  priority?: 'high' | 'low' | 'auto';
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  className?: string;
};

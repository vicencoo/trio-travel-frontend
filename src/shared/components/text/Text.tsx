import type { TextProps } from './types';

export const Text = ({
  Tag = 'p',
  text,
  size = 'text-base',
  font = 'font-normal',
  children,
  onClick,
  ref,
  className = '',
}: TextProps) => {
  return (
    <Tag className={`${size} ${font} ${className}`} onClick={onClick} ref={ref}>
      {text || children}
    </Tag>
  );
};

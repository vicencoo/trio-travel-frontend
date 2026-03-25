import type { CardProps } from './types';

export const Card = ({
  width = 'w-full',
  gap = 'gap-5',
  padding = 'px-5 py-7',
  className = '',
  bgColor = 'bg-white ',
  borderColor = 'border-blue-100 ',
  onClick,
  children,
}: CardProps) => {
  return (
    <div
      className={`${bgColor} flex flex-col ${gap} ${width} ${padding} border ${borderColor} hover:shadow-sm transition-all duration-200 will-change-transform rounded-lg overflow-hidden ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

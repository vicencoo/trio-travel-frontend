import type { CardProps } from './types';

export const Card = ({
  width = 'w-full',
  gap = 'gap-5',
  padding = 'px-5 py-7',
  className = '',
  children,
}: CardProps) => {
  return (
    <div
      className={`bg-white flex flex-col ${gap} ${width} ${padding} border border-blue-100 hover:shadow-sm transition-shadow duration-200 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

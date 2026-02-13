import type { IconBoxProps } from './types';

export const IconBox = ({
  icon,
  bgColor = 'bg-indigo-600',
  size = 'w-16 h-16',
}: IconBoxProps) => {
  return (
    <span
      className={`flex ${size} items-center justify-center ${bgColor} rounded-lg`}
    >
      {icon}
    </span>
  );
};

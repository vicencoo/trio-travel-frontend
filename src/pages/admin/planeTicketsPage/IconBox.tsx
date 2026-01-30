import type { IconBoxProps } from './types';

export const IconBox = ({ icon, bgColor = 'bg-indigo-600' }: IconBoxProps) => {
  return (
    <span
      className={`flex w-16 h-16 items-center justify-center ${bgColor} rounded-lg`}
    >
      {icon}
    </span>
  );
};

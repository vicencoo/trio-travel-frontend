import type { ComponentType, ElementType, ReactElement } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type IconProps = {
  icon?: ReactElement | ComponentType | ElementType;
  size?: IconSize;
  className?: string;
  img?: string | File;
  onClick?: () => void;
};

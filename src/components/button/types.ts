import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  name: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  color?: string;
  hoverColor?: string;
  bgColor?: string;
  bgHover?: string;
  variant?: 'text' | 'outlined' | 'contained';
  fullWidth?: boolean;
  endIcon?: ReactNode;
  icon?: ReactNode;
  border?: string;
  borderHover?: string;
  type?: string;
  disabled?: boolean;
  padding?: string;
  className?: string;
};

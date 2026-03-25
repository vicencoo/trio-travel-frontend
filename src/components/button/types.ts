import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  padding?: string;
  className?: string;
};

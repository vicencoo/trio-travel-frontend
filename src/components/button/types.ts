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

// import type { ReactNode } from 'react';
// import type { ButtonProps as MuiButtonProps } from '@mui/material';

// export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
//   name: string;
//   color?: string;
//   hoverColor?: string;
//   bgColor?: string;
//   bgHover?: string;
//   border?: string;
//   borderHover?: string;
//   padding?: string;
//   icon?: ReactNode;
// }

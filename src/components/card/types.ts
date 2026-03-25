import type { ReactNode } from 'react';

export type CardProps = {
  width?: string;
  gap?: string;
  padding?: string;
  bgColor?: string;
  borderColor?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

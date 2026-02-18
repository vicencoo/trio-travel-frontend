import type { ReactNode } from 'react';

export type AdminPageHeaderProps = {
  icon: ReactNode;
  iconBgColor: string;
  label: string;
  text: string;
  buttonName: string;
  buttonBg?: string;
  buttonBgHover?: string;
  buttonBorderHover?: string;
  onClick: () => void;
  display?: boolean;
};

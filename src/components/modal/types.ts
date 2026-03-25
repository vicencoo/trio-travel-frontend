import type { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  bgColor?: string;
  closeIcon?: boolean;
  padding?: string;
  children: ReactNode;
  ref?: React.Ref<HTMLDivElement> | undefined;
};

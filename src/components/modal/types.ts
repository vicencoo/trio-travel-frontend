import type { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  closeIcon?: boolean;
  padding?: string;
  children: ReactNode;
};

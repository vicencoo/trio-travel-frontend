import type { MouseEventHandler, ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose?: MouseEventHandler<SVGSVGElement>;
  width?: string;
  height?: string;
  closeIcon?: boolean;
  padding?: string;
  children: ReactNode;
};

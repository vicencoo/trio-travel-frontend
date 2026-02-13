import type { PlaneTicket, TicketImage } from '../../../types';
import type { PlaneTicketFieldError } from '../../../errorTypes';
import type { ReactNode } from 'react';

export type TicketModalProps = {
  openModal: boolean;
  handleOpenModal: () => void;
  hadleTicketChange: (key: string, value: string) => void;
  handleImageChange: (images: (File | string | TicketImage)[]) => void;
  handleSubmit: () => void;
  planeTicket: PlaneTicket;
  errors?: PlaneTicketFieldError;
};

export type MetricCardProps = {
  label: string;
  value?: string | number;
  icon: ReactNode;
  iconBg: string;
};

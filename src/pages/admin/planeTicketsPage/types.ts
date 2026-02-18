import type { PlaneTicketFieldError } from '@/types/errorTypes';
import type { PlaneTicket, TicketImage } from '@/types/types';
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

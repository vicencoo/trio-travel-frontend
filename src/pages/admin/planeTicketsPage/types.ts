import type { PlaneTicketFieldError } from '@/types/errorTypes';
import type { PlaneTicket, TicketImage } from '@/types/types';

export type TicketModalProps = {
  openModal: boolean;
  handleOpenModal: () => void;
  hadleTicketChange: (key: string, value: string) => void;
  handleImageChange: (images: (File | string | TicketImage)[]) => void;
  handleSubmit: () => void;
  planeTicket: PlaneTicket;
  isAddingticket: boolean;
  errors?: PlaneTicketFieldError;
};

export type TicketItemProps = {
  ticket: PlaneTicket;
  handleDelete: (ticketId: number) => void;
  handleEdit: (ticket: PlaneTicket) => void;
};

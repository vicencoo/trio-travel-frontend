import type { BookingFieldError } from '@/shared/types/errorTypes';
import type { SoldTicket } from '@/shared/types/types';

export type WorkFormModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  formData: SoldTicket;
  handleChange: (key: string, value: string) => void;
  handleSave: () => void;
  errors: BookingFieldError;
};

export type BookingRowProps = {
  booking: SoldTicket;
  handleEdit: (data: SoldTicket) => void;
  handleDelete: (id: number | string) => void;
};

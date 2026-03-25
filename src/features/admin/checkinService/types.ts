import type { SoldTicket } from '@/types/types';

type Stats = {
  completedTickets?: number;
  pendingTickets?: number;
  progress?: number;
  totalTickets?: number;
};

export type CheckinTicketsResponse = {
  tickets?: SoldTicket[];
  stats?: Stats;
};

export type CheckinDateFilterProps = {
  isCurrentDay: boolean;
  formattedDate: string;
  handlePreviousDay: () => void;
  handleNextDay: () => void;
  handleSetCurrentDay: () => void;
  dateFilter: Date;
  handleDateChange: (date: Date | null) => void;
  stats?: Stats;
};

export type CheckinTicketCardProps = {
  ticket: SoldTicket;
  openModal: (ticket: SoldTicket) => void;
  loadingId: number | 'loading' | 'refresh' | null;
  toggleStatus: (id: number) => void;
};

export type CheckinTicketModalProps = {
  closeModal: () => void;
  isModalOpen: boolean;
  activeTicket?: SoldTicket | null;
};

export type TicketInfoProps = {
  label: string;
  value?: string | number | Date;
  onClick?: () => void;
  className?: string;
};

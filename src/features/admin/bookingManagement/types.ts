import type { BookingFieldError } from "@/types/errorTypes";
import type { FlightCompany, SoldTicket } from "@/types/types";
import type { SelectChangeEvent } from "@mui/material";

export type WorkFormModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  formData: SoldTicket;
  handleChange: (key: string, value: string) => void;
  handleSave: () => void;
  errors: BookingFieldError;
  isAddingTicket: boolean;
  flightCompanies: FlightCompany[];
  handleChangeCompany: (
    event: SelectChangeEvent<string | number | string[]>,
  ) => void;
};

export type BookingRowProps = {
  booking: SoldTicket;
  handleEdit: (data: SoldTicket) => void;
  handleDelete: (id: number) => void;
};

import type { InsuranceFieldError } from '@/types/errorTypes';
import type { Insurance } from '@/types/types';

export type InsuranceModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  data?: Insurance;
  handleChangeData: (key: string, value: string | number | Date) => void;
  handleSave: () => void;
  errors: InsuranceFieldError;
  isAddingInsurance: boolean;
};

export type InsuranceRowProps = {
  insurance: Insurance;
  handleEdit: (insurance: Insurance) => void;
  handleDelete: (id: number) => void;
};

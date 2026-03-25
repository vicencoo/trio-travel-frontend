import type { Insurance } from '@/types/types';

export type InsuranceCardProps = {
  insurance: Insurance;
  openPanel: (insurance: Insurance) => void;
};

export type InsuranceDetailPanelProps = {
  closePanel: () => void;
  insurance: Insurance | null;
  isPanelOpen: boolean;
  openModal: (insurance: Insurance) => void;
};

export type RenewInsuranceModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  insurance: Insurance | null;
  handleChangeExpDate: (date: Date | string) => void;
  newExpirationDate: Date | string;
  handleRenewInsurance: (id: number) => void;
};

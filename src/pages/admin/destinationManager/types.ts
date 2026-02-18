import type { DestinationFieldError } from '@/types/errorTypes';
import type { DestinationImages, DestinationTypes } from '@/types/types';
import type { Dispatch, SetStateAction } from 'react';

export type DestinationFormProps = {
  handleOpenModal: () => void;
  handleAddTypes: () => void;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  data: DestinationTypes;
  removeType: (value: string) => void;
  handleChangeData: (key: string, value: string) => void;
  handleImagesChange: (images: (File | string | DestinationImages)[]) => void;
  handleSave: () => void;
  errors: DestinationFieldError;
  isDestinationFormOpen: boolean;
};

export type DestinationTableRowProps = {
  data: DestinationTypes;
  handleEditDestination: (destination: DestinationTypes) => void;
  handleDeleteHotel: () => void;
};

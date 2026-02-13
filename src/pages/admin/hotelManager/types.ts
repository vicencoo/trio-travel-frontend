import type { Dispatch, SetStateAction } from 'react';
import type { HotelImages, HotelTypes } from '../../../types';
import type { HotelFieldError } from '../../../errorTypes';

export type HotelFormProps = {
  handleOpenForm: () => void;
  handleChangeData: (key: string, value: string) => void;
  hotelData: HotelTypes;
  handleImagesChange: (images: (File | string | HotelImages)[]) => void;
  handleSetFacilities: (itemId: string) => void;
  saveHotel: () => void;
  setDeletedImages: Dispatch<SetStateAction<string[]>>;
  errors: HotelFieldError;
};

export type HotelTableRowProps = {
  data: HotelTypes;
  handleEditHotel: (hotelItem: HotelTypes) => void;
  handleDeleteHotel: () => void;
};

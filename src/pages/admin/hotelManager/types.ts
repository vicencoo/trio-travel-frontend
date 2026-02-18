import type { HotelFieldError } from '@/types/errorTypes';
import type { HotelImage, HotelTypes } from '@/types/types';
import type { Dispatch, SetStateAction } from 'react';

export type HotelFormProps = {
  handleOpenForm: () => void;
  handleChangeData: (key: string, value: string) => void;
  hotelData: HotelTypes;
  handleImagesChange: (images: (File | string | HotelImage)[]) => void;
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

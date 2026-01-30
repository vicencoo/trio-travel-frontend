import type { HotelImages, HotelTypes } from '../../../types';

export type HotelFormProps = {
  handleOpenForm: () => void;
  handleChangeData: (key: string, value: string) => void;
  hotelData: HotelTypes;
  handleImagesChange: (images: (File | string | HotelImages)[]) => void;
  handleSetFacilities: (itemId: string) => void;
  saveHotel: () => void;
};

export type HotelTableRowProps = {
  data: HotelTypes;
  handleEditHotel: (hotelItem: HotelTypes) => void;
  handleDeleteHotel: () => void;
};

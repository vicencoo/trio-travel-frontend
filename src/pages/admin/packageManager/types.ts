import type { PackageFieldError } from '@/types/errorTypes';
import type { PackageImage, TouristPackage } from '@/types/types';
import type { SelectChangeEvent } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';

export type PackageFormProps = {
  onClose: () => void;
  handleChangePackageData: (key: string, value: string) => void;
  handlePackageDetailsChange: (
    event: SelectChangeEvent<string | string[]>,
    type: 'accomodation' | 'meal_included',
  ) => void;
  touristPackage: TouristPackage;
  handleImagesChange: (images: (File | string | PackageImage)[]) => void;
  handleSave: () => void;
  setDeletedImages: Dispatch<SetStateAction<string[]>>;
  errors: PackageFieldError;
};

export type PackageItemProps = {
  packageItem: TouristPackage;
  handleEditPackage: (packageItem: TouristPackage) => void;
  handleDeletePackage: (id: number) => void;
  handleRenew: (id: number) => void;
  publishOrDraftPackage: (id: number) => void;
};

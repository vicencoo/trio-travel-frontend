import type { SelectChangeEvent } from '@mui/material';
import type { PackageImages, TouristPackage } from '../../../types';

export type PackageFormProps = {
  onClose: () => void;
  handleChangePackageData: (key: string, value: string) => void;
  handlePackageDetailsChange: (
    event: SelectChangeEvent<string | string[]>,
    type: 'accomodation' | 'mealIncluded',
  ) => void;
  touristPackage: TouristPackage;
  handleImagesChange: (images: (File | string | PackageImages)[]) => void;
  handleSave: () => void;
};

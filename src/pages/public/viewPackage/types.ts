import type { TouristPackage } from '@/types/types';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type InfoItemProps = {
  icon: ReactNode;
  label: string;
  value?: string;
};

export type PackageImagesProps = {
  packageData: TouristPackage;
  next: () => void;
  prev: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
};

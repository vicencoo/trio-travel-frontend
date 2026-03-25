import type { Property } from '@/types/types';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type PropertyImagesProps = {
  prev: () => void;
  next: () => void;
  currentIndexImage: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  property: Property;
};

export type PropertyStatsProps = {
  icon: ReactNode;
  value?: string | number;
  label: string;
};

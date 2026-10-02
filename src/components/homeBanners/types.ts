import type { LucideIcon } from "lucide-react";

type InfoTypes = {
  id: number;
  text: string;
  icon: LucideIcon;
};

export type HomeBannerTypes = {
  title?: string;
  text?: string;
  badge?: string;
  info?: InfoTypes[];
  image: string;
  mobileImage?: string;
  buttonText: string;
  buttonUrl: string;
  isFirst?: boolean;
};

export type HomeBannerSliderTypes = {
  banners: (Omit<HomeBannerTypes, "isFirst"> & { id: number })[];
  interval?: number;
};

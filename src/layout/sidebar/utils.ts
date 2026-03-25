import { SIDEBAR_ITEMS } from '@/constants/navigation';

export const getLabelFromPath = (path: string) => {
  for (const item of SIDEBAR_ITEMS) {
    if (item.path === path) return item.label;
    const sub = item.subItems?.find((s) => s.path === path);
    if (sub) return sub.label;
  }
  return '';
};

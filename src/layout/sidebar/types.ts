import type { User } from '@/types/types';

export type SideBarProps = {
  isCollapsed: boolean;
  handleOpenSubItems: (label: string) => void;
  openSubItem: string | null;
  user?: User;
  onClose: () => void;
};

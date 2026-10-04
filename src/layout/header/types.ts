import type { User } from '@/types/types';

export type DashboardHeaderProps = {
  toggleCollapse: () => void;
  user?: User;
  handleLogout: () => void;
  isCollapsed: boolean;
  dark: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
};

export type MegaMenuProps = {
  isOpen: boolean;
  whatsappUrl: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: () => void;
};

export type AvatarProps = {
  letter: string;
  size?: string;
};

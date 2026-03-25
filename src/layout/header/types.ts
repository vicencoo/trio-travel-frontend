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

export type AvatarProps = {
  letter: string;
  size?: string;
};

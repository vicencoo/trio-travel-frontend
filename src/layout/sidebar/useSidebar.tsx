import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLabelFromPath } from './utils';

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [openSubItem, setOpenSubItem] = useState<string | null>(null);

  const { pathname } = useLocation();

  const currentPage = getLabelFromPath(pathname);

  const handleOpenSubItems = (label: string) => {
    setOpenSubItem((prev) => (prev === label ? null : label));
  };

  const closeSidebar = () => {
    setIsCollapsed(true);
  };

  const toggleCollapse = () => {
    setOpenSubItem(null);
    setIsCollapsed((prev) => !prev);
  };
  return {
    isCollapsed,
    toggleCollapse,
    openSubItem,
    handleOpenSubItems,
    closeSidebar,
    currentPage,
  };
};

import { useAuth } from '@/context/authContext';
import { Outlet } from 'react-router-dom';
import { SideBar } from './sidebar/SideBar';
import { DashboardHeader } from './header/DashboardHeader';
import { useSidebar } from './sidebar/useSidebar';
import { useToggleDarkMode } from '@/hooks/useToggleDarkMode';

export const AdminLayout = () => {
  const {
    isCollapsed,
    toggleCollapse,
    handleOpenSubItems,
    closeSidebar,
    currentPage,
    openSubItem,
  } = useSidebar();
  const { user, handleLogout } = useAuth();
  const { dark, toggleDarkMode } = useToggleDarkMode();

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <SideBar
          isCollapsed={isCollapsed}
          handleOpenSubItems={handleOpenSubItems}
          openSubItem={openSubItem}
          user={user || {}}
          onClose={closeSidebar}
        />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <DashboardHeader
            currentPage={currentPage}
            toggleCollapse={toggleCollapse}
            user={user || {}}
            handleLogout={handleLogout}
            isCollapsed={isCollapsed}
            dark={dark}
            toggleDarkMode={toggleDarkMode}
          />
          <main className='flex-1 overflow-y-auto hide-scrollbar'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

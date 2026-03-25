import { Text } from '@/components/text';
import { useNavigate } from 'react-router-dom';
import type { SideBarProps } from './types';
import { useEffect } from 'react';
import { ChevronDown, ChevronUp, Person, TypeOutline } from '@/icons';
import { SIDEBAR_ITEMS } from '@/constants/navigation';

export const SideBar = ({
  isCollapsed,
  handleOpenSubItems,
  user,
  onClose,
  openSubItem,
}: SideBarProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isMobile = window.innerWidth < 992;
    if (!isCollapsed && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCollapsed]);

  const handleNavigate = (path: string) => {
    navigate(path);
    if (window.innerWidth < 992) {
      onClose();
    }
  };

  return (
    <>
      {!isCollapsed && (
        <div
          className='fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden'
          onClick={onClose}
        />
      )}

      <div
        className={`
          ${isCollapsed ? 'w-20' : 'w-72'}
          fixed md:relative z-50 md:z-10
          ${isCollapsed ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
          overflow-hidden transition-all duration-200 ease-in-out
          bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
          border-r border-slate-200/50 dark:border-slate-700/50
          h-dvh md:h-screen        
          flex flex-col
        `}
      >
        <div
          className={`flex items-center gap-2 py-5 ${isCollapsed ? 'px-4' : 'px-6'}  border-b border-slate-200/50 dark:border-slate-700/50`}
        >
          <div className='flex w-12 h-12 min-w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 items-center justify-center'>
            <TypeOutline className='text-red-500' />
          </div>
          {!isCollapsed && (
            <div className='flex flex-col truncate'>
              <Text
                text={'Trio Travel'}
                size='text-xl'
                font='font-semibold font-serif'
                className='text-red-500'
              />
              <Text
                text={'Admin Panel'}
                size='text-xs'
                font='font-medium'
                className='text-gray-500'
              />
            </div>
          )}
        </div>
        {/*  */}
        <div className='flex-1 overflow-y-auto hide-scrollbar pt-5 pb-14 px-4 gap-3 flex flex-col'>
          {SIDEBAR_ITEMS.map((item) => (
            <div
              className='flex flex-col gap-2'
              key={item.label}
              onClick={() => item.path && handleNavigate(item.path)}
            >
              <div
                className={`flex items-center gap-2 px-3 ${!isCollapsed ? 'py-4' : 'py-3'}  border border-transparent rounded-lg cursor-pointer text-slate-700 dark:text-slate-300 hover:bg-slate-200  dark:hover:bg-slate-700 ease-in-out  select-none truncate ${location.pathname === item.path ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white' : 'text-slate-700 dark:text-slate-400 bg-transparent '} transition-all duration-200`}
                onClick={() => item.subItems && handleOpenSubItems(item.label)}
              >
                <div className='min-w-[22px] flex justify-center'>
                  <item.icon size={22} />
                </div>
                {!isCollapsed && (
                  <div className={`flex w-full items-center justify-between`}>
                    <Text text={item.label} font='font-semibold' />
                    {item.subItems && (
                      <>
                        {openSubItem !== item.label ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronUp size={18} />
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
              {!isCollapsed && (
                <div
                  className={`flex flex-col gap-1 pl-5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${openSubItem === item.label ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
                  `}
                >
                  {item?.subItems?.map((subItem) => (
                    <div
                      className={`flex items-center gap-2 cursor-pointer  px-2 py-3  hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg ${location.pathname === subItem.path ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white' : 'bg-transparent text-slate-900 dark:text-slate-400'} transition-all duration-200 select-none`}
                      onClick={() => handleNavigate(subItem.path)}
                      key={subItem.path}
                    >
                      <subItem.icon size={16} />
                      <Text
                        text={subItem.label}
                        size='text-[15px]'
                        font='font-medium'
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='border-t border-slate-300/60 dark:border-slate-700/70 flex items-center gap-2 p-4 bg-white dark:bg-slate-900'>
          <span className='flex w-10 min-w-10 h-10 items-center justify-center  border border-blue-500 rounded-full text-slate-900 dark:text-slate-300'>
            <Person />
          </span>
          {!isCollapsed && (
            <div className='flex flex-col '>
              <Text
                text={user?.username}
                size='text-sm'
                font='font-semibold font-serif'
                className='capitalize text-slate-900 dark:text-slate-300'
              />
              <Text
                text={user?.email}
                size='text-xs'
                font='font-medium'
                className='truncate text-slate-700 dark:text-slate-500'
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

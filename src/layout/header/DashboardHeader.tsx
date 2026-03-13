import { Text } from '@/shared/components/text';
import {
  ChevronDownIcon,
  ChevronUp,
  LogOut,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Sun,
} from 'lucide-react';
import { useDisclosure } from '@/shared/hooks/useDisclosure';
import type { AvatarProps, DashboardHeaderProps } from './types';

const Avatar = ({ letter, size = ' w-12 min-w-12 h-12' }: AvatarProps) => {
  return (
    <span
      className={`flex ${size} rounded-xl items-center justify-center text-white text-lg uppercase font-bold font-serif bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700
      `}
    >
      {letter}
    </span>
  );
};

export const DashboardHeader = ({
  toggleCollapse,
  user,
  handleLogout,
  isCollapsed,
  dark,
  toggleDarkMode,
  currentPage,
}: DashboardHeaderProps) => {
  const { toggle, ref: wrapperRef, isOpen } = useDisclosure();
  const firstLetter = user?.username?.charAt(0) || '';

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-700/50 py-3 px-5 select-none relative'>
      <div className='flex items-center justify-between'>
        {/* Left Side */}
        <div className='flex items-center gap-7'>
          <span
            className='cursor-pointer text-slate-900 dark:text-slate-400'
            onClick={toggleCollapse}
          >
            {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
          </span>

          <div className='flex flex-col'>
            <Text
              text={currentPage}
              size='md:text-xl'
              font='font-bold font-serif'
              className='leading-6 text-slate-900 dark:text-slate-300 capitalize'
            />
            <Text
              text={`Welcome back ${user?.username}!`}
              font='font-medium'
              size='text-xs'
              className='text-slate-900 dark:text-slate-500 capitalize truncate'
            />
          </div>
        </div>

        {/* Right Side */}
        <div className='flex items-center md:gap-4 gap-1'>
          <div
            className={`cursor-pointer p-2 rounded-full bg-transparent ${dark ? 'hover:bg-slate-700 text-slate-500' : 'hover:bg-slate-300 text-slate-700'} transition-all duration-300`}
            onClick={toggleDarkMode}
          >
            {dark ? <Sun /> : <Moon />}
          </div>

          <div className='w-px h-6 bg-slate-300 dark:bg-slate-600' />

          <div ref={wrapperRef}>
            <div
              className='flex items-center gap-3 border p-1 border-transparent hover:border-slate-400/50 rounded-xl hover:bg-orange-50/30 transition-all duration-200 cursor-pointer group'
              onClick={() => toggle()}
            >
              <Avatar letter={firstLetter} size='w-8 min-w-8 h-8' />
              <div className='flex flex-col'>
                <Text
                  text={user?.username}
                  size='text-xs'
                  font='font-bold font-serif'
                  className='text-slate-600 dark:text-slate-300 leading-3 capitalize'
                />
                <Text
                  text={user?.role}
                  size='text-[10px]'
                  font='font-medium'
                  className='text-slate-400 dark:text-slate-500 leading-3 capitalize'
                />
              </div>
              <span className='text-black dark:text-slate-200'>
                {isOpen ? (
                  <ChevronUp size={12} />
                ) : (
                  <ChevronDownIcon size={12} />
                )}
              </span>
            </div>

            {/* User Info / Actions */}
            <div
              className={`absolute top-full right-5 ${
                isOpen
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                  : 'opacity-0 -translate-y-3 scale-95 pointer-events-none'
              } transition-all duration-500 ease-out flex flex-col w-max bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl shadow-lg overflow-hidden z-[9999]`}
            >
              <div className='flex items-center gap-3 p-5 border-b border-slate-300 dark:border-slate-600'>
                <Avatar letter={firstLetter} />
                <div className='flex flex-col gap-1'>
                  <Text
                    text={user?.username}
                    size='text-xs'
                    font='font-semibold font-serif'
                    className='capitalize leading-4 text-slate-900 dark:text-slate-200'
                  />
                  <Text
                    text={user?.email}
                    size='text-xs'
                    className='text-gray-500 dark:text-slate-400'
                  />
                  <div className='flex items-center w-max px-3 py-1 bg-green-100 rounded-xl text-green-900 gap-1 uppercase text-[10px] font-medium font-serif tracking-widest'>
                    <span className='w-1.5 h-1.5 bg-green-900 rounded-full' />
                    {user?.role}
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-1 px-5 py-2'>
                <div className='flex items-center gap-2 text-gray-500 dark:text-slate-300 p-3 bg-transparent hover:bg-gray-200 dark:hover:bg-slate-500 dark:hover:text-slate-100 transition-colors duration-200 rounded-xl cursor-pointer'>
                  <Settings size={14} />
                  <Text
                    text={'Account Settings'}
                    size='text-sm'
                    font='font-medium'
                    className='tracking-widest'
                  />
                </div>

                <div
                  className='flex items-center gap-2 p-3 text-gray-500 dark:text-slate-300  hover:bg-red-500 hover:text-white dark:hover:text-white transition-colors duration-200 rounded-xl cursor-pointer'
                  onClick={handleLogout}
                >
                  <LogOut size={14} />
                  <Text
                    text={'Log Out'}
                    size='text-sm'
                    font='font-medium'
                    className='tracking-widest'
                  />
                </div>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

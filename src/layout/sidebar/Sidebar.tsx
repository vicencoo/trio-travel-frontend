import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Text } from '../../components/text';
import { useNavigate } from 'react-router-dom';
import type { SidebarProps } from './types';
import { useDisclosure } from '../../hooks/useDisclosure';
import { useEffect } from 'react';
// import { useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode';
// import { Roles, UserToken } from '../../types';

export const Sidebar = ({ items }: SidebarProps) => {
  const navigate = useNavigate();

  const { ref: wrapperRef, isOpen, toggle } = useDisclosure();

  useEffect(() => {
    const body = document.body;
    if (isOpen) body.classList.add('dash-open');
    else body.classList.remove('dash-open');
    return () => body.classList.remove('dash-open');
  }, [isOpen]);

  // const token = localStorage.getItem('token');
  // if (!token) return null;
  // const user = jwtDecode<UserToken>(token);
  // const isAdmin = user.role === Roles.ADMIN;
  // if (!isAdmin) return null;

  return (
    <div className='fixed top-0 -left-14 h-screen z-50' ref={wrapperRef}>
      <button
        className='absolute md:top-1 top-3 left-16 z-[9999]'
        onClick={() => toggle()}
      >
        <MenuIcon fontSize='large' sx={{ color: isOpen ? 'white' : 'black' }} />
      </button>

      <div
        className={`flex flex-col gap-4 bg-slate-900 text-grey-lite shadow-lg h-screen px-3 pt-24 text-nowrap
          overflow-hidden transition-all duration-300
          ${
            isOpen
              ? 'w-[210px] opacity-100 translate-x-14'
              : 'w-0 opacity-0 -translate-x-10'
          }
        `}
      >
        {items.map((item) => (
          <div
            className={`flex items-center justify-between w-full px-3 cursor-pointer py-2 rounded-md hover:bg-dashboard-item hover:text-slate-900 transition-colors duration-300 ${
              location.pathname === item.path
                ? 'bg-dashboard-item text-slate-900 font-medium'
                : 'text-white'
            }`}
            key={item.id}
            onClick={() => navigate(item.path)}
          >
            <Text
              text={item.text}
              size='text-lg'
              font={'font-medium'}
              className='cursor-pointer'
            />

            {location.pathname === item.path && (
              <ChevronRightIcon className='animate-slide-in text-slate-900' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

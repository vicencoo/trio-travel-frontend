import { useLocation, useNavigate } from 'react-router-dom';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Text } from '../../components/text';
import { HEADER_ITEMS, SIDEBAR_ITEMS } from '../..';
import { Image } from '../../components/image';
import { Sidebar } from '../sidebar';
import { useDisclosure } from '../../hooks/useDisclosure';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { ref: wrapperRef, isOpen, toggle } = useDisclosure();
  return (
    <div className='flex items-center w-full border-b shadow-lg pl-14 pr-4 py-3 md:py-3 justify-between sticky top-0 z-[9999] bg-white/95'>
      <div className='flex items-center gap-4 '>
        <Sidebar items={SIDEBAR_ITEMS} />
        <Image
          img='/images/TrioTravel.png'
          className='min-w-[100px] max-w-[100px] h-[20px] object-cover cursor-pointer hover:scale-110 transition-all duration-300 will-change-transform'
          onClick={() => navigate('/')}
        />
      </div>

      <div className='hidden md:flex w-full justify-center items-center gap-7 pr-10'>
        {HEADER_ITEMS.map((item) => (
          <Text
            key={item.id}
            text={item.name}
            className={`cursor-pointer capitalize text-gray-600  select-none hover:text-gray-950 hover:scale-110 transition-all duration-300 will-change-transform ${
              location.pathname === item.path && 'text-gray-950 scale-110'
            }`}
            size='text-sm'
            font='font-serif'
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>

      <span className='md:hidden flex w-full justify-end relative'>
        <div ref={wrapperRef} className='relative'>
          {/* Toggle button */}
          {isOpen ? (
            <KeyboardArrowUpOutlinedIcon
              fontSize='large'
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
            />
          ) : (
            <KeyboardArrowDownOutlinedIcon
              fontSize='large'
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
            />
          )}

          {/* Dropdown menu */}
          <div
            className={`absolute top-10 right-0 bg-white rounded-lg shadow-2xl border border-gray-200
        px-5 py-2 flex flex-col gap-3
        transform transition-all duration-500 ease-out origin-top
        ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
          >
            {HEADER_ITEMS.map((item) => (
              <Text
                key={item.id}
                text={item.name}
                className={`cursor-pointer capitalize text-gray-600 hover:text-gray-950 hover:scale-110 transition-all duration-500 delay-100 will-change-transform text-nowrap ${
                  location.pathname === item.path && 'text-gray-950 scale-110'
                }  ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                size='text-lg'
                font='font-medium font-serif'
                onClick={() => {
                  navigate(item.path);
                  toggle();
                }}
              />
            ))}
          </div>
        </div>
      </span>
    </div>
  );
};

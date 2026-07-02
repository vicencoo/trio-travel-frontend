import { Link, useLocation } from 'react-router-dom';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Image } from '@/components/image';
import { Menu } from '@/icons';
import { HEADER_ITEMS } from '@/constants/navigation';

export const Header = () => {
  const location = useLocation();

  const { ref: wrapperRef, isOpen, toggle } = useDisclosure();
  return (
    <div className='flex items-center w-full border-b shadow-lg py-3 px-8 justify-between sticky top-0 z-[9999] bg-white/95'>
      <Link to='/' aria-label='Trio Travel homepage'>
        <Image
          img='/images/TrioTravel.webp'
          alt='Trio Travel Agency Logo'
          className='min-w-[100px] max-w-[100px] h-[20px] object-cover cursor-pointer hover:scale-110 transition-all duration-300 will-change-transform'
        />
      </Link>

      <div className='hidden md:flex w-full justify-center items-center gap-7 pr-10'>
        {HEADER_ITEMS.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`cursor-pointer capitalize text-gray-600 select-none hover:text-gray-950 hover:scale-110 transition-all duration-300 will-change-transform text-sm font-serif ${
              location.pathname === item.path && 'text-gray-950 scale-110'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <span className='md:hidden flex w-full justify-end relative'>
        <div ref={wrapperRef} className='relative'>
          {/* Toggle button */}
          {/* {isOpen ? (
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
          )} */}

          <Menu
            size={21}
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          />

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
              <Link
                key={item.id}
                to={item.path}
                className={`cursor-pointer capitalize text-gray-600 hover:text-gray-950 hover:scale-110 transition-all duration-500 delay-100 will-change-transform text-nowrap text-lg font-medium font-serif ${
                  location.pathname === item.path && 'text-gray-950 scale-110'
                }  ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                onClick={toggle}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </span>
    </div>
  );
};

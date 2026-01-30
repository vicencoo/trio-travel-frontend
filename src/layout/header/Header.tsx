import { useLocation, useNavigate } from 'react-router-dom';
import { LightMode, DarkMode } from '@mui/icons-material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Text } from '../../components/text';
import { Icon } from '../../components/icon';
import { useHeader } from './useHeader';
import { HeaderItems, SIDEBAR_ITEMS } from '../..';
import { Image } from '../../components/image';
import { Sidebar } from '../sidebar';
// import { Currency } from './Currency';
// import { Language } from './Language';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state,
    toggleDarkMode,
    toggleMenuOpen,
    // currency,
    // language,
    // setCurrency,
    // setLanguage,
    // toggleOpenCurrency,
    // toggleOpenLanguage,
  } = useHeader();
  return (
    <div className='flex items-center w-full border-b shadow-lg pl-14 pr-4 py-3 md:py-2 justify-between sticky top-0 z-[9999] bg-white/95'>
      <div className='flex items-center gap-4 '>
        <Sidebar items={SIDEBAR_ITEMS} />
        <Image
          img='/images/TrioTravel.png'
          className='min-w-[100px] max-w-[100px] h-[20px] object-cover cursor-pointer hover:scale-110 transition-all duration-300 will-change-transform'
          onClick={() => navigate('/')}
        />
      </div>

      <div className='hidden md:flex items-center gap-7'>
        {HeaderItems.map((item) => (
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
        {state.isMenuOpen ? (
          <KeyboardArrowUpOutlinedIcon
            fontSize='large'
            onClick={toggleMenuOpen}
          />
        ) : (
          <KeyboardArrowDownOutlinedIcon
            fontSize='large'
            onClick={toggleMenuOpen}
          />
        )}
        <div
          className={`absolute ${state.isMenuOpen ? 'flex' : 'hidden'} top-10 bg-white rounded-lg shadow-2xl border border-gray-200
         px-5 py-2 flex flex-col gap-3`}
        >
          {HeaderItems.map((item) => (
            <Text
              key={item.id}
              text={item.name}
              className={`cursor-pointer capitalize text-gray-600 hover:text-gray-950 hover:scale-110 transition-all duration-300 will-change-transform  text-nowrap ${
                location.pathname === item.path && 'text-gray-950 scale-110'
              }`}
              size='text-lg'
              font='font-medium font-serif'
              onClick={() => {
                navigate(item.path);
                toggleMenuOpen();
              }}
            />
          ))}
        </div>
      </span>

      <div className='flex items-center gap-5'>
        {/* <Language
          language={language}
          setLanguage={setLanguage}
          state={state}
          toggleOpenLanguage={toggleOpenLanguage}
        /> */}

        {/* <Currency
          currency={currency}
          setCurrency={setCurrency}
          state={state}
          toggleOpenCurrency={toggleOpenCurrency}
        /> */}

        <span className='p-2 bg-gray-200 rounded-full hidden md:flex items-center justify-center'>
          <Icon
            icon={
              state.darkMode ? (
                <DarkMode fontSize='inherit' />
              ) : (
                <LightMode fontSize='inherit' />
              )
            }
            onClick={toggleDarkMode}
            className='cursor-pointer'
            size='xs'
          />
        </span>

        <div className='hidden md:flex gap-1'>
          <Text
            text={'Log In'}
            className='px-3 py-1 rounded-3xl cursor-pointer border border-transparent hover:border-gray-600'
            size='text-sm'
            font='font-semibold'
          />

          <Text
            text={'Sign Up'}
            className='border px-3 py-1 rounded-3xl cursor-pointer hover:border-gray-600 bg-gray-200'
            size='text-sm'
            font='font-semibold'
          />
        </div>
      </div>
    </div>
  );
};

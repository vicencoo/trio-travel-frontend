import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Text } from '../../components/text';
import { CURRENCIES } from '../..';

type CurrencyProps = {
  currency: string;
  toggleOpenCurrency: () => void;
  state: { currencyOpen: boolean };
  setCurrency: (currency: string) => void;
};

export const Currency = ({
  currency,
  toggleOpenCurrency,
  state,
  setCurrency,
}: CurrencyProps) => {
  return (
    <div className='relative'>
      <span
        className='flex items-center justify-center gap-0 text-gray-500 cursor-pointer hover:text-gray-800 select-none w-[40px]'
        onClick={toggleOpenCurrency}
      >
        <Text
          text={currency}
          size='text-xs'
          font='font-medium'
          className='uppercase'
        />
        <span className='flex items-center'>
          {state.currencyOpen ? (
            <KeyboardArrowUpIcon fontSize='inherit' />
          ) : (
            <KeyboardArrowDownIcon fontSize='inherit' />
          )}
        </span>
      </span>
      {state.currencyOpen && (
        <div className='w-[80px] h-[190px] border rounded-lg shadow-md absolute top-6 right-0 bg-white flex flex-col gap-2 p-2'>
          {CURRENCIES.map((item) => (
            <Text
              key={item.id}
              text={item.value}
              size='text-sm'
              font='font-medium'
              className={`uppercase text-gray-600 hover:text-gray-900 cursor-pointer bg-gray-100 px-3 py-1 hover:bg-gray-300 rounded-lg hover:scale-105 transition-all duration-300 will-change-transform ${
                currency === item.value
                  ? 'bg-gray-300 text-gray-900 scale-105'
                  : ''
              }`}
              onClick={() => {
                setCurrency(item.value);
                toggleOpenCurrency();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

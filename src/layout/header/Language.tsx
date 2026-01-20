import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Text } from '../../components/text';
import { LANGUAGES } from '../..';

type LanguageProps = {
  state: { languageOpen: boolean };
  toggleOpenLanguage: () => void;
  language: string;
  setLanguage: (language: string) => void;
};

export const Language = ({
  state,
  toggleOpenLanguage,
  language,
  setLanguage,
}: LanguageProps) => {
  return (
    <div className='relative'>
      <span
        className='flex items-center gap-1 cursor-pointer text-gray-500 hover:text-gray-800 w-[60px]'
        onClick={toggleOpenLanguage}
      >
        <span>{<LanguageIcon />}</span>
        <Text
          text={language}
          size='text-xs'
          font='font-medium'
          className='uppercase'
        />
        <span className='flex items-center'>
          {state.languageOpen ? (
            <KeyboardArrowUpIcon fontSize='inherit' />
          ) : (
            <KeyboardArrowDownIcon fontSize='inherit' />
          )}
        </span>
      </span>
      {state.languageOpen && (
        <div className='w-[80px] h-[190px] border rounded-lg shadow-md absolute top-6 right-0 bg-white flex flex-col gap-2 p-2'>
          {LANGUAGES.map((item) => (
            <Text
              key={item.id}
              text={item.value}
              size='text-sm'
              font='font-medium'
              className={`uppercase text-gray-600 hover:text-gray-900 cursor-pointer bg-gray-100 px-3 py-1 hover:bg-gray-300 rounded-lg hover:scale-105 transition-all duration-300 will-change-transform ${
                language === item.value
                  ? 'bg-gray-300 text-gray-900 scale-105'
                  : ''
              }`}
              onClick={() => {
                setLanguage(item.value);
                toggleOpenLanguage();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

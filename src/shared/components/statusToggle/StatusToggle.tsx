import { Text } from '../text';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export type StatusToggleProps = {
  status: string;
  activeText: string;
  draftText: string;
  onChange: (status: 'active' | 'draft') => void;
};

export const StatusToggle = ({
  status,
  activeText,
  draftText,
  onChange,
}: StatusToggleProps) => {
  return (
    <div className='flex flex-col gap-2 '>
      <Text
        text={'Statusi I Postimit'}
        size='text-lg'
        font='font-semibold font-serif'
        className='text-slate-900 dark:text-slate-300'
      />

      <div className='relative flex items-center bg-gray-200 dark:bg-slate-600 border border-gray-300 rounded-xl p-1 w-fit shadow-inner'>
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg transition-all duration-300 ease-in-out
        ${
          status === 'active'
            ? 'translate-x-[calc(100%)] bg-green-500 shadow-green-300 shadow-md'
            : 'translate-x-0 bg-red-500 shadow-red-300 shadow-md'
        }`}
        />

        <button
          type='button'
          onClick={() => onChange('draft')}
          className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-300 select-none cursor-pointer
        ${status === 'draft' ? 'text-white' : 'text-gray-500 dark:text-slate-400'}`}
        >
          <WatchLaterIcon fontSize='inherit' />
          Draft
        </button>

        <button
          type='button'
          onClick={() => onChange('active')}
          className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-300 select-none cursor-pointer
        ${status === 'active' ? 'text-white' : 'text-gray-500 dark:text-slate-400'}`}
        >
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${status === 'active' ? 'bg-white' : 'bg-gray-400 '}`}
          />
          Aktive
        </button>
      </div>
      <Text
        text={status === 'active' ? activeText : draftText}
        size='text-xs'
        className={`transition-colors duration-300 ${status === 'active' ? 'text-green-600' : 'text-red-400'}`}
      />
    </div>
  );
};

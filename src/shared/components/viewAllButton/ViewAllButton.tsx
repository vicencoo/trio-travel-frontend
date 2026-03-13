import { useNavigate } from 'react-router-dom';
import { Text } from '../text';
import type { ViewAllButtonProps } from './types';

export const ViewAllButton = ({
  text,
  path,
  onClick,
  disabled,
}: ViewAllButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      className={`flex items-center  text-white gap-2 rounded-full px-5 py-3 ${disabled ? 'bg-black/50' : 'hover:scale-105 transition-all duration-300 will-change-transform bg-black select-none'} `}
      disabled={disabled}
      onClick={() => {
        if (onClick) {
          onClick();
        } else if (path) {
          navigate(path);
        }
      }}
    >
      <div className='grid grid-cols-3 auto-rows-[2px] gap-1'>
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className='block w-0.5 h-0.5 bg-white' />
        ))}
      </div>
      <Text
        text={text}
        size='text-sm'
        font='font-medium'
        className='capitalize'
      />
    </button>
  );
};

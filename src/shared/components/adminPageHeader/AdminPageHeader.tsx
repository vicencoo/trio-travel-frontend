import AddIcon from '@mui/icons-material/Add';
import { Text } from '../text';
import type { AdminPageHeaderProps } from './types';
import { Button } from '../button';

export const AdminPageHeader = ({
  icon,
  iconBgColor,
  label,
  text,
  count,
  buttonName,
  buttonBg = '#6366f1',
  buttonBgHover = '#4f46e5',
  buttonBorderHover = '#3730a3',
  display = true,
  onClick,
}: AdminPageHeaderProps) => {
  return (
    <div className='flex md:flex-row flex-col md:gap-0 gap-7 w-full justify-between items-center bg-white dark:bg-slate-700 p-7 rounded-lg shadow-lg'>
      <div className='flex w-full items-center gap-3'>
        <span
          className={`flex max-w-16 min-w-16 h-16 items-center justify-center ${iconBgColor} rounded-xl`}
        >
          {icon}
        </span>
        <div className='flex flex-col'>
          <div className='flex items-end gap-1'>
            <Text
              text={label}
              size='md:text-2xl text-lg'
              font='font-semibold'
              className='text-slate-950 dark:text-slate-300'
            />
            {count && (
              <Text
                text={`(${count})`}
                size='text-sm'
                font='font-bold'
                className='text-gray-500 dark:text-slate-400'
              />
            )}
          </div>
          <Text
            text={text}
            size='md:text-base text-sm'
            font='font-medium'
            className='text-gray-500'
          />
        </div>
      </div>
      {display && (
        <div className='flex md:w-fit w-full md:justify-end justify-center'>
          <Button
            name={buttonName}
            endIcon={<AddIcon />}
            bgColor={buttonBg}
            bgHover={buttonBgHover}
            color='white'
            border='transparent'
            borderHover={buttonBorderHover}
            onClick={onClick}
            fullWidth
          />
        </div>
      )}
    </div>
  );
};

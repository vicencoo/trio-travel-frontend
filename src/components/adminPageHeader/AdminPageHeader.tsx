import AddIcon from '@mui/icons-material/Add';
import { Text } from '../text';
import type { AdminPageHeaderProps } from './types';
import { Button } from '../button';

export const AdminPageHeader = ({
  icon,
  iconBgColor,
  label,
  text,
  buttonName,
  buttonBg = '#6366f1',
  buttonBgHover = '#4f46e5',
  buttonBorderHover = '#3730a3',
  display = true,
  onClick,
}: AdminPageHeaderProps) => {
  return (
    <div className='flex md:flex-row flex-col md:gap-0 gap-7 w-full justify-between items-center bg-white p-7 rounded-lg shadow-lg'>
      <div className='flex w-full items-center gap-3'>
        <span
          className={`flex max-w-16 min-w-16 h-16 items-center justify-center ${iconBgColor} rounded-lg`}
        >
          {icon}
        </span>
        <div className='flex flex-col'>
          <Text text={label} size='md:text-2xl text-lg' font='font-semibold' />
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

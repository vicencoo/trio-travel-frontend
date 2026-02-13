import { Text } from '../../../components/text';
import type { ReactNode } from 'react';

type PropertyStatsProps = {
  icon: ReactNode;
  value?: string | number;
  label: string;
};

export const PropertyStats = ({ icon, value, label }: PropertyStatsProps) => {
  return (
    <div className='flex items-center md:gap-2 gap-3'>
      <span className='w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg'>
        {icon}
      </span>
      <div className='flex flex-col'>
        <Text text={value} size='text-lg' font='font-bold' />
        <Text
          text={label}
          size='text-sm'
          font='font-semibold'
          className='text-gray-500 capitalize'
        />
      </div>
    </div>
  );
};

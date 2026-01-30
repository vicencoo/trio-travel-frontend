import type { ReactNode } from 'react';
import { Text } from '../../../components/text';

type InfoItemProps = {
  icon: ReactNode;
  label: string;
  value?: string;
};

export const InfoItem = ({ icon, label, value }: InfoItemProps) => {
  return (
    <div className='flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg'>
      <span className='flex w-11 h-11 items-center justify-center bg-white/10 rounded-lg'>
        {icon}
      </span>
      <div className='flex flex-col gap-1'>
        <Text
          text={label}
          size='text-xs'
          font='font-medium font-serif'
          className='text-gray-300'
        />
        <Text
          text={value}
          size='text-sm'
          font='font-medium font-serif'
          className='text-white uppercase'
        />
      </div>
    </div>
  );
};

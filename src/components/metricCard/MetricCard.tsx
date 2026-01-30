import { IconBox } from '../../pages/admin/planeTicketsPage/IconBox';
import { Text } from '../text';
import type { MetricCardProps } from './types';

export const MetricCard = ({ label, value, icon, iconBg }: MetricCardProps) => {
  return (
    <div className='flex items-center w-full justify-between bg-white rounded-lg p-5 shadow-lg'>
      <div className='flex flex-col'>
        <Text text={label} font='font-medium' className='text-gray-500' />
        <Text text={value} size='text-2xl' font='font-bold' />
      </div>
      <IconBox icon={icon} bgColor={`${iconBg}`} />
    </div>
  );
};

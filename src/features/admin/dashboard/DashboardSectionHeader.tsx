import { Text } from '@/components/text';
import type { SectionHeaderProps } from './types';

export const DashboardSectionHeader = ({
  label,
  icon,
  text,
}: SectionHeaderProps) => {
  return (
    <div className='flex items-center w-full justify-between'>
      <Text
        text={label}
        size='text-2xl'
        font='font-semibold font-serif'
        className='tracking-widest text-slate-900 dark:text-slate-400'
      />
      <span className='flex items-center gap-1 text-xs font-medium uppercase px-2 p-1 border border-gray-400 rounded-2xl dark:border-slate-700 bg-gray-50 text-gray-500 dark:bg-slate-800 dark:text-slate-500 '>
        {icon}
        {text}
      </span>
    </div>
  );
};

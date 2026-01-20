import { Text } from '../text';
import type { SectionHeaderProps } from './types';

export const SectionHeader = ({ title, text }: SectionHeaderProps) => {
  return (
    <div className='flex flex-col w-full items-center justify-center gap-1'>
      <Text
        text={title}
        size='text-3xl'
        font='font-medium'
        className='capitalize'
      />
      <Text
        text={text}
        size='text-sm'
        font='font-medium'
        className='text-gray-500'
      />
    </div>
  );
};

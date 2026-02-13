import { Image } from '../image';
import { Text } from '../text';
import type { NoDataFoundProps } from './types';

export const NoDataFound = ({ text }: NoDataFoundProps) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Image img='/images/no-data.png' className='w-2/3 md:w-5/12' />
      <Text
        text={text}
        size='text-xl'
        font='font-medium'
        className='capitalize text-gray-600'
      />
    </div>
  );
};

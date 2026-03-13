import { Text } from '@/shared/components/text';
import { STATISTIC_INFO } from '@/utils';

export const StatisticsSection = () => {
  return (
    <div className='flex md:flex-row flex-col w-full items-center bg-black text-white rounded-xl md:py-14 py-7 md:px-0 px-10  justify-center select-none'>
      {STATISTIC_INFO.map((item) => (
        <div
          className='flex flex-col md:px-8 md:py-0 py-7 items-center justify-center md:border-r last:border-r-0 md:border-b-0 border-b last:border-b-0 w-full'
          key={item.id}
        >
          <Text text={item.number} size='text-3xl' font='font-medium' />
          <Text
            text={item.text}
            size='text-lg'
            font='font-medium'
            className='text-nowrap'
          />
        </div>
      ))}
    </div>
  );
};

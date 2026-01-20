import { Image } from '../image';
import { Text } from '../text';
import type { DestinationCardProps } from './types';

export const DestinationCard = ({
  img,
  title,
  place,
  stay,
  stars,
  price,
}: DestinationCardProps) => {
  return (
    <div className='flex flex-col border h-[430px] rounded-3xl overflow-hidden bg-white relative shadow-sm cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 will-change-transform group'>
      <Image
        img={img}
        className='h-[270px] object-cover group-hover:scale-105 transition-all duration-300'
      />
      <div className='absolute bottom-0 w-full bg-white rounded-t-3xl px-7 py-4 flex flex-col justify-between h-[200px]'>
        <Text text={title} size='text-xl' font='font-semibold' />
        <div className='flex items-center justify-between'>
          <Text
            text={place}
            size='text-sm'
            font='font-medium'
            className='text-gray-500'
          />
          <Text
            text={stay}
            size='text-sm'
            font='font-medium'
            className='text-gray-500'
          />
        </div>
        <Text
          text={stars}
          size='text-sm'
          font='font-medium'
          className='text-gray-600'
        />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <Text
              text={'From'}
              size='text-sm'
              font='font-serif'
              className='text-gray-500'
            />
            <Text text={price} size='text-lg' font='font-medium' />
            <Text
              text={'- person'}
              size='text-sm'
              font='font-serif'
              className='text-gray-500'
            />
          </div>
          <Text
            text={'Book Now'}
            className='px-5 py-2 bg-gray-200 rounded-full border border-transparent hover:border hover:border-black'
            size='text-xs'
            font='font-medium'
          />
        </div>
      </div>
    </div>
  );
};

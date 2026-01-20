import { LocationOn } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import type { JSX } from 'react';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import { Button } from '../../../components/button';

export type HotelCardProps = {
  image: string;
  title: string;
  location: string;
  facilities?: JSX.Element[];
  price: string | number;
  rating?: string | number;
  reviews?: string | number;
};

export const HotelCard = ({
  image,
  title,
  location,
  facilities,
  price,
  rating,
  reviews,
}: HotelCardProps) => {
  return (
    <div className='flex flex-col bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 will-change-transform h-full cursor-pointer'>
      <div className='flex h-[220px] relative w-full'>
        <Image img={image} className='h-full w-full object-cover' />
        {rating && reviews && (
          <span className='absolute bottom-2 left-2 bg-white flex px-3 py-1 rounded-3xl items-center gap-1'>
            <StarIcon fontSize='small' className='text-yellow-400' />
            <span className='flex items-baseline gap-1'>
              <Text text={rating} font='font-bold' />
              <Text
                text={`(${reviews})`}
                size='text-xs'
                font='font-medium'
                className='text-gray-500'
              />
            </span>
          </span>
        )}
      </div>
      <div className='flex flex-col px-4 py-5 h-full justify-between'>
        <div className='flex flex-col gap-3'>
          <Text text={title} size='text-xl' font='font-medium' />
          <span className='flex items-center gap-1'>
            <LocationOn fontSize='small' className='text-gray-500' />
            <Text
              text={location}
              font='font-medium'
              className='text-gray-500'
            />
          </span>
          <span className='flex items-center gap-3'>
            {facilities &&
              facilities.map((facility, index) => (
                <span
                  className='flex w-8 h-8 items-center justify-center bg-blue-50 text-blue-500 rounded-md'
                  key={index}
                >
                  {facility}
                </span>
              ))}
          </span>
        </div>
        <div className='flex border-t-2 pt-5 mt-5 items-center w-full justify-between'>
          <Text size='text-xl' font='font-bold'>
            {`$${price}`}{' '}
            <span className='text-sm text-gray-500 font-medium'> / night</span>
          </Text>

          <Button
            name='view details'
            bgColor='#2563eb'
            bgHover='#1d4ed8 '
            border='#2563eb'
            color='white'
            borderHover='trasparent'
            padding='8px 30px'
          />
        </div>
      </div>
    </div>
  );
};

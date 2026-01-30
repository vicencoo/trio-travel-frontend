import { RepeatIcon } from 'lucide-react';
import { Image } from '../image';
import { Text } from '../text';
import { Button } from '../button';
import type { PlaneTicket } from '../../types';

export const FlightOfferCard = ({ ticket }: { ticket: PlaneTicket }) => {
  const firstImage = ticket?.ticketImages?.[0];
  const image =
    typeof firstImage === 'object' && 'image' in firstImage
      ? firstImage.image
      : '';
  return (
    <div className='flex w-full h-[250px] border border-gray-300 relative rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300 will-change-transform group'>
      <Image
        src={image}
        className='object-cover w-1/2 group-hover:scale-105 transition-all duration-300 will-change-transform'
      />
      <div className='absolute right-0 w-3/5 h-full bg-white rounded-l-3xl px-7 py-5 flex flex-col justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <Text
              text={ticket?.departureAirport}
              font='font-serif'
              className='text-gray-500 uppercase'
            />
            <div className='flex-1 border-t border-dashed border-gray-500 mx-3' />
            <Text
              text={ticket?.arrivalAirport}
              font='font-serif'
              className='text-gray-500 uppercase'
            />
          </div>

          <div className='flex items-center justify-between gap-2'>
            <Text
              text={ticket?.from}
              size='sm:text-3xl text-xl'
              font='font-semibold'
              className='capitalize'
            />
            <RepeatIcon fontSize='medium' className='text-gray-500' />
            <Text
              text={ticket?.to}
              size='sm:text-3xl text-xl'
              font='font-semibold'
              className='capitalize'
            />
          </div>
        </div>

        <div className='flex flex-col items-start'>
          <Text text={'From'} font='font-medium' className='text-gray-500' />
          <span className='flex items-baseline gap-2'>
            <Text
              text={`${ticket?.price}€`}
              size='text-3xl'
              font='font-semibold'
            />
            <Text
              text={'/person'}
              size='text-sm'
              font='font-medium'
              className='text-gray-500'
            />
          </span>
        </div>

        <Button
          name='kontakto agjensinë'
          hoverColor='black'
          bgHover='transparent'
          border='black'
          borderHover='black'
        />
      </div>
    </div>
  );
};

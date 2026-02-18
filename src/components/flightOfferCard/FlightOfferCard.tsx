import { RepeatIcon } from 'lucide-react';
import { Image } from '../image';
import { Text } from '../text';
import { Button } from '../button';
import type { PlaneTicket } from '@/types/types';
import { formattedPrice } from '@/utils/formattedPrice';

export const FlightOfferCard = ({ ticket }: { ticket: PlaneTicket }) => {
  const firstImage = ticket?.ticket_images?.[0];
  const image =
    typeof firstImage === 'object' && 'image' in firstImage
      ? firstImage.image
      : '';

  const from = ticket.from
    ? ticket.from.charAt(0).toUpperCase() + ticket.from.slice(1)
    : '';
  const to = ticket.to
    ? ticket.to.charAt(0).toUpperCase() + ticket.to.slice(1)
    : '';

  const message = encodeURIComponent(
    `Përshëndetje!
Jam i interesuar për bileta nga ${from} për në ${to}.
A mund të më dërgoni më shumë informacion ju lutem?`,
  );
  return (
    <div className='flex w-full h-[250px] border border-gray-300 relative rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300 will-change-transform group select-none'>
      <Image
        src={image}
        className='object-cover w-1/2 group-hover:scale-105 transition-all duration-300 will-change-transform'
      />
      <div className='absolute right-0 w-3/5 h-full bg-white rounded-l-3xl px-7 py-5 flex flex-col justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <Text
              text={ticket?.departure_airport}
              size='md:text-base text-sm'
              font='font-serif'
              className='text-gray-500 uppercase'
            />
            <div className='flex-1 border-t border-dashed border-gray-500 mx-3' />
            <Text
              text={ticket?.arrival_airport}
              size='md:text-base text-sm'
              font='font-serif'
              className='text-gray-500 uppercase'
            />
          </div>

          <div className='flex items-center justify-between gap-2'>
            <Text
              text={ticket?.from}
              size='sm:text-2xl text-lg'
              font='font-semibold'
              className='capitalize'
            />
            <RepeatIcon fontSize='medium' className='text-gray-500' />
            <Text
              text={ticket?.to}
              size='sm:text-2xl text-lg'
              font='font-semibold'
              className='capitalize'
            />
          </div>
        </div>

        <div className='flex flex-col items-start'>
          <Text
            text={'duke filluar nga'}
            size='md:text-sm text-xs'
            font='font-semibold font-serif'
            className='text-gray-500 uppercase'
          />
          <span className='flex items-baseline gap-2'>
            <Text
              text={`${formattedPrice(Number(ticket.price))}€`}
              size='md:text-3xl text-2xl'
              font='font-semibold font-serif'
            />
            <Text
              text={'/personi'}
              size='md:text-sm text-xs'
              font='font-medium'
              className='text-gray-500'
            />
          </span>
        </div>

        <Button
          name='kontakto agjencinë'
          hoverColor='black'
          bgHover='transparent'
          border='black'
          borderHover='black'
          onClick={() => {
            window.open(`https://wa.me/355696900916?text=${message}`);
          }}
        />
      </div>
    </div>
  );
};

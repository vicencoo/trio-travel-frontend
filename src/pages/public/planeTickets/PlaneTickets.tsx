import { Plane } from 'lucide-react';
import { Text } from '../../../components/text';
import { FlightOfferCard } from '../../../components/flightCard';
import { FLIGHT_OFFERS } from '../../..';
import { ViewAllButton } from '../../../components/viewAllButton/ViewAllButton';
import { Button } from '../../../components/button';
import { useState } from 'react';

const VISIBLE_COUNT = 4;

export const PlaneTickets = () => {
  const [visibleCount, setVisibleCount] = useState<number>(VISIBLE_COUNT);

  const handleChangeVisibleCount = () => {
    if (visibleCount < FLIGHT_OFFERS.length) {
      setVisibleCount((prev) => prev + VISIBLE_COUNT);
    }
  };

  return (
    <div className='flex flex-col gap-7 md:gap-14 pb-10'>
      <div className='flex flex-col gap-5 items-center text-white bg-gradient-to-r from-indigo-600 to-purple-600 py-9 md:py-20'>
        <Plane className='w-14 h-14' />
        <Text text={' Explore the World'} size='text-5xl' font='font-medium' />
        <Text
          text={
            'Discover amazing flight deals to destinations around the globe.Book your next adventure today!'
          }
          size='text-xl'
        />
      </div>

      <div className='container grid grid-cols-1 md:grid-cols-2 gap-4'>
        {FLIGHT_OFFERS.slice(0, visibleCount).map((offer) => (
          <FlightOfferCard item={offer} key={offer.id} />
        ))}
      </div>

      <div className='flex w-full justify-center'>
        <ViewAllButton
          text='Load More Tickets'
          onClick={handleChangeVisibleCount}
          disabled={visibleCount >= FLIGHT_OFFERS.length}
        />
      </div>

      <div className='container'>
        <div className='flex flex-col bg-white rounded-lg border shadow-lg p-6 md:p-10 gap-4 md:gap-6 text-center'>
          <Text
            text={'Need Help Planning Your Trip?'}
            size='text-3xl'
            font='font-medium'
          />
          <Text
            text={
              'We are here to help you find the perfect flight and create unforgettable memories. Contact us for personalized assistance.'
            }
            size='text-lg'
            font='font-medium'
            className='text-gray-500'
          />
          <span className='flex w-full justify-center'>
            <Button name='Contact Travel Experts' />
          </span>
        </div>
      </div>
    </div>
  );
};

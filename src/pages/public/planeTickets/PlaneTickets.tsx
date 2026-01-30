import { Plane } from 'lucide-react';
import { Text } from '../../../components/text';
import { FlightOfferCard } from '../../../components/flightCard';
import { ViewAllButton } from '../../../components/viewAllButton/ViewAllButton';
import { Button } from '../../../components/button';
import { usePlaneTickets } from './usePlaneTickets';

export const PlaneTickets = () => {
  const { planeTickets, handleLoadMore, ticketsToAppear } = usePlaneTickets();

  return (
    <div className='flex flex-col gap-7 md:gap-14 pb-10'>
      <div className='bg-gradient-to-r from-indigo-600 to-purple-600 py-9 md:py-20'>
        <div className='flex flex-col gap-5 items-center text-white container'>
          <Plane className='w-14 h-14' />
          <Text
            text={' Explore the World'}
            size='text-5xl'
            font='font-medium'
          />
          <Text
            text={
              'Discover amazing flight deals to destinations around the globe.Book your next adventure today!'
            }
            size='text-xl'
          />
        </div>
      </div>

      <div className='container grid grid-cols-1 md:grid-cols-2 gap-4'>
        {planeTickets.tickets.map((ticket) => (
          <FlightOfferCard ticket={ticket} key={ticket._id} />
        ))}
      </div>

      {planeTickets && planeTickets.totalTickets && (
        <div className='flex w-full justify-center'>
          <ViewAllButton
            text='Load More Tickets'
            onClick={handleLoadMore}
            disabled={ticketsToAppear >= planeTickets.totalTickets}
          />
        </div>
      )}

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

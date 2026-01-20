import { FLIGHT_OFFERS } from '../../..';
import { FlightOfferCard } from '../../../components/flightCard';
import { ViewAllButton } from '../../../components/viewAllButton/ViewAllButton';

export const FlightOffers = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {FLIGHT_OFFERS.slice(0, 4).map((item) => (
          <FlightOfferCard item={item} key={item.id} />
        ))}
      </div>
      <div className='flex w-full justify-center'>
        <ViewAllButton text='view all offers' path='planeTickets' />
      </div>
    </div>
  );
};

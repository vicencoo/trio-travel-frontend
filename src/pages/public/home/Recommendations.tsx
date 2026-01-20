import { RECOMMANDIONS } from '../../..';
import { DestinationCard } from '../../../components/destinationCard';
import { ViewAllButton } from '../../../components/viewAllButton/ViewAllButton';

export const Recommendations = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {RECOMMANDIONS.slice(0, 6).map((item) => (
          <DestinationCard
            key={item.id}
            img={item.image}
            title={item.title}
            place={item.place}
            stars={item.hotelStars}
            price={item.price}
            stay={item.stay}
          />
        ))}
      </div>
      <div className='flex justify-center w-full'>
        <ViewAllButton text='Load More Packages' path='/packages' />
      </div>
    </div>
  );
};

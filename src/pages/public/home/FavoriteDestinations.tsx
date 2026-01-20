import { FAVORITE_DESTINATIONS } from '../../..';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import { ViewAllButton } from '../../../components/viewAllButton/ViewAllButton';

export const FavoriteDestinations = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
        {FAVORITE_DESTINATIONS.slice(0, 8).map((item) => (
          <div
            className='p-5 border rounded-xl flex flex-col gap-3 group hover:scale-105 transition-all duration-300 will-change-transform cursor-pointer'
            key={item.id}
          >
            <Image
              img={item.image}
              className='w-full h-[100px] object-cover rounded-xl group-hover:scale-110 transition-all duration-300 will-change-transform'
            />
            <Text text={item.city} font='font-semibold' />
            <Text
              text={`${item.tours} tours , ${item.activities} activities`}
              size='text-sm'
              font='font-medium'
              className='text-gray-500'
            />
          </div>
        ))}
      </div>
      <div className='flex w-full justify-center'>
        <ViewAllButton text='view all destinations' path='/destinations' />
      </div>
    </div>
  );
};

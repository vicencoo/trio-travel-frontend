import { Search } from '@mui/icons-material';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { Text } from '../../../components/text';
import { HotelCard } from './HotelCard';
import { useHotel } from './useHotel';

export const Hotel = () => {
  const { hotels } = useHotel();
  return (
    <div className='flex flex-col gap-14 mb-20'>
      <div className='bg-gradient-to-r from-blue-500 to-indigo-600  py-9 md:py-20 text-white flex flex-col text-center gap-5 relative'>
        <Text
          text={'Our Partner Hotels'}
          size='text-5xl'
          font='font-semibold'
        />
        <Text
          text={`Discover handpicked luxury hotels and resorts we've partnered with to bring you exceptional stays worldwide`}
          size='text-lg'
          font='fontmedium'
        />
        <div className='container absolute md:-bottom-6 -bottom-28'>
          <div className='bg-white flex md:flex-row flex-col w-full gap-2 rounded-lg p-5 shadow-lg'>
            <Input
              placeholder='Search hotels and destinations...'
              className='flex-1 text-gray-500'
              icon={<Search className='text-gray-500' />}
            />
            <div className='flex gap-2 md:w-max w-full justify-center'>
              <Button
                name='all hotels'
                bgColor='#2563eb'
                bgHover='#1d4ed8 '
                border='#2563eb'
                color='white'
                borderHover='trasparent'
              />
              <Button
                name='featured'
                bgHover='transparent'
                hoverColor='black'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:pt-0 pt-24 container'>
        {hotels &&
          hotels.map((hotel) => {
            const firstImage = hotel?.hotelImages?.[0];
            const image =
              typeof firstImage === 'object' &&
              'hotelImage' in firstImage &&
              firstImage.hotelImage;

            return (
              <HotelCard
                key={hotel._id}
                image={image || ''}
                location={hotel.location}
                title={hotel.hotelName}
                facilities={hotel.facilities}
                price={hotel.price}
                rating={hotel.rating}
                reviews={hotel.reviews}
              />
            );
          })}
      </div>
    </div>
  );
};

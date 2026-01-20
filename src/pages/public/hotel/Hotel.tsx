import {
  BeachAccess,
  Wifi,
  LocalDining,
  LocalParking,
  Spa,
  Search,
} from '@mui/icons-material';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { Text } from '../../../components/text';
import { HotelCard } from './HotelCard';

const HOTELS = [
  {
    id: 1,
    name: 'Moncafe Boutique Hotel & SPA',
    location: 'Tirane, Albania',
    images: [
      '/hotels/moncafe-1.jpg',
      '/hotels/moncafe-2.jpg',
      '/hotels/moncafe-3.jpg',
    ],
    rating: 4.9,
    reviews: 474,
    price: 89,
    facilities: [
      <Wifi fontSize='small' />,
      <LocalDining fontSize='small' />,
      <LocalParking fontSize='small' />,
      <Spa fontSize='small' />,
    ],
  },
  {
    id: 2,
    name: 'ReiVal Hotel Marina',
    location: 'Vlore, Albania',
    images: [
      '/hotels/reival-1.jfif',
      '/hotels/reival-2.jpg',
      '/hotels/reival-3.jpg',
    ],
    rating: 4.5,
    reviews: 45,
    price: 49,
    facilities: [
      <Wifi fontSize='small' />,
      <LocalDining fontSize='small' />,
      <LocalParking fontSize='small' />,
      <BeachAccess fontSize='small' />,
    ],
  },
  {
    id: 3,
    name: 'El Mar Hotel',
    location: 'Vlore, Albania',
    images: [
      '/hotels/elmar-1.jpg',
      '/hotels/elmar-2.jpg',
      '/hotels/elmar-3.jpg',
    ],
    rating: 4.8,
    reviews: 324,
    price: 65,
    facilities: [
      <Wifi fontSize='small' />,
      <LocalDining fontSize='small' />,
      <LocalParking fontSize='small' />,
      <BeachAccess fontSize='small' />,
    ],
  },
  {
    id: 4,
    name: 'Moncafe Boutique Hotel & SPA',
    location: 'Tirane, Albania',
    images: [
      '/hotels/moncafe-1.jpg',
      '/hotels/moncafe-2.jpg',
      '/hotels/moncafe-3.jpg',
    ],
    rating: 4.9,
    reviews: 474,
    price: 89,
    facilities: [
      <Wifi fontSize='small' />,
      <LocalDining fontSize='small' />,
      <LocalParking fontSize='small' />,
      <Spa fontSize='small' />,
    ],
  },
  {
    id: 5,
    name: 'ReiVal Hotel Marina',
    location: 'Vlore, Albania',
    images: [
      '/hotels/reival-1.jfif',
      '/hotels/reival-2.jpg',
      '/hotels/reival-3.jpg',
    ],
    rating: 4.5,
    reviews: 45,
    price: 49,
    facilities: [
      <Wifi fontSize='small' />,
      <LocalDining fontSize='small' />,
      <LocalParking fontSize='small' />,
      <BeachAccess fontSize='small' />,
    ],
  },
  {
    id: 6,
    name: 'El Mar Hotel',
    location: 'Vlore, Albania',
    images: [
      '/hotels/elmar-1.jpg',
      '/hotels/elmar-2.jpg',
      '/hotels/elmar-3.jpg',
    ],
    rating: 4.8,
    reviews: 324,
    price: 65,
    facilities: [
      <Wifi fontSize='small' />,
      <LocalDining fontSize='small' />,
      <LocalParking fontSize='small' />,
      <BeachAccess fontSize='small' />,
    ],
  },
];

export const Hotel = () => {
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
        <div className='container absolute -bottom-6'>
          <div className='bg-white flex w-full gap-2 rounded-lg p-5 shadow-lg'>
            <Input
              placeholder='Search hotels and destinations...'
              className='flex-1 text-gray-500'
              icon={<Search className='text-gray-500' />}
            />
            <Button
              name='all hotels'
              bgColor='#2563eb'
              bgHover='#1d4ed8 '
              border='#2563eb'
              color='white'
              borderHover='trasparent'
            />
            <Button name='featured' bgHover='transparent' hoverColor='black' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container'>
        {HOTELS.map((hotel) => (
          <HotelCard
            key={hotel.id}
            image={hotel.images[0]}
            location={hotel.location}
            title={hotel.name}
            facilities={hotel.facilities}
            price={hotel.price}
            rating={hotel.rating}
            reviews={hotel.reviews}
          />
        ))}
      </div>
    </div>
  );
};

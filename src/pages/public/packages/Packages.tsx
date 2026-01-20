import SearchIcon from '@mui/icons-material/Search';
import { Text } from '../../../components/text';
import { Input } from '../../../components/input';
import { RECOMMANDIONS } from '../../..';
import { DestinationCard } from '../../../components/destinationCard';
import { useState } from 'react';

export const Packages = () => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filteredPackages = RECOMMANDIONS.filter((item) =>
    `${item.place} ${item.title}`.toLowerCase().includes(value.toLowerCase()),
  );
  return (
    <div className='flex flex-col md:gap-16 gap-8'>
      <div className='bg-gradient-to-r from-blue-400 to-blue-500 text-white'>
        <div className='container flex flex-col w-full gap-5 py-10'>
          <Text
            text={'Explore Our Travel Packages'}
            size='text-4xl'
            font='font-medium'
          />
          <Text
            text={'Discover unforgettable journeys crafted just for you'}
            size='text-xl'
          />
          <Input
            placeholder={'Search destinations or packages...'}
            icon={<SearchIcon className='text-black' />}
            className='md:w-3/6 w-full'
            height='h-12'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container'>
        {filteredPackages.map((item) => (
          <DestinationCard
            key={item.id}
            img={item.image}
            place={item.place}
            price={item.price}
            stars={item.hotelStars}
            stay={item.stay}
            title={item.title}
          />
        ))}
      </div>

      <div className='bg-gradient-to-r from-blue-400 to-blue-500 text-white'>
        <div className='container flex flex-col w-full gap-5 py-10 items-center'>
          <Text text={`Can't Find What You Are Looking For?`} size='text-3xl' />
          <Text
            text={'Let us create a custom package tailored to your dreams'}
            font='font-medium'
            size='text-lg'
          />
          <Text
            text={'Request Custom Package'}
            font='font-medium'
            className='px-7 py-3 border border-blue-900 rounded-3xl w-max bg-blue-500 hover:bg-blue-700 cursor-pointer transition-colors duration-300'
          />
        </div>
      </div>
    </div>
  );
};

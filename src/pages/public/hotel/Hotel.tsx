import { Search } from '@mui/icons-material';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { Text } from '../../../components/text';
import { useHotel } from './useHotel';
import { NoDataFound } from '../../../components/noDataFound';
import { Pagination } from '../../../components/pagination';
import { useScrollOnChange } from '../../../hooks/useScrollOnChange';
import { HotelCard } from '../../../components/hotelCard';

export const Hotel = () => {
  const { hotels, handlePageChange, pageNumber } = useHotel();
  const { scrollRef } = useScrollOnChange(pageNumber);
  return (
    <div className='flex flex-col gap-14 mb-20'>
      <div
        className='bg-gradient-to-r from-blue-500 to-indigo-600  md:pt-16 pt-9 pb-20  text-white flex flex-col text-center relative'
        ref={scrollRef}
      >
        <div className='flex flex-col gap-2 px-2'>
          <Text
            text={'Partnerët Tanë'}
            size='md:text-5xl text-4xl'
            font='font-semibold'
          />
          <Text
            text={`Zbulo hotele dhe resort-e luksoze të përzgjedhura me kujdes, me të cilat bashkëpunojmë për t’ju ofruar qëndrime të jashtëzakonshme në mbarë botën.`}
            size='md:text-lg text-sm'
            font='fontmedium'
          />
        </div>
        <div className='container absolute md:-bottom-10 -bottom-16'>
          <div className='bg-white flex md:flex-row flex-col w-full gap-3 rounded-lg p-5 shadow-lg'>
            <Input
              placeholder='Kërko emrin ose vendëndodhjen e hotelit...'
              className='flex-1 text-gray-500'
              icon={<Search className='text-gray-500' />}
            />
            <Button
              name='kërko hotel'
              endIcon={<Search />}
              bgColor='#3b82f6 '
              bgHover='#4f46e5 '
              color='white'
              border='transparent'
              borderHover='transparent'
              padding='9px 35px'
            />
          </div>
        </div>
      </div>
      {hotels && hotels.hotels.length > 0 ? (
        <div className='flex flex-col gap-10 items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-5 md:pt-0 pt-12 container'>
            {hotels.hotels.map((hotel) => {
              return <HotelCard data={hotel} key={hotel.id} />;
            })}
          </div>
          <Pagination
            onChange={handlePageChange}
            page={pageNumber}
            pages={hotels.pagination.allPages}
          />
        </div>
      ) : (
        <div className='py-28'>
          <NoDataFound text='No Hotels Found' />
        </div>
      )}
    </div>
  );
};

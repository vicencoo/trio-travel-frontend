import { Search } from '@mui/icons-material';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import { useProperty } from './useProperty';
import { NoPropertyFound } from '../../../components/noPropertyFound';
import { PropertyCard } from '../../../components/propertyCard';
import { Pagination } from '../../../components/pagination';
import { useScrollOnChange } from '../../../hooks/useScrollOnChange';

export const Properties = () => {
  const { data, handlePageChange, pageNumber } = useProperty();
  const { scrollRef } = useScrollOnChange(pageNumber);

  return (
    <div className='flex flex-col gap-10 pb-10' ref={scrollRef}>
      <div className='flex w-full h-[300px] relative'>
        <Image
          img='/images/property-cover.png'
          className='w-full object-cover'
        />

        <div className='absolute inset-0 bg-black/40' />

        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center text-white gap-3'>
          <div className='flex flex-col items-center'>
            <Text
              text={'Discover Your'}
              size='md:text-5xl text-xl'
              font='font-bold'
            />
            <Text
              text={'Dream Property'}
              size='md:text-5xl text-xl'
              font='font-bold'
              className='block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'
            />
          </div>
          <Text
            text={'Explore premium properties curated by our expert team'}
            font='font-semibold'
            size='md:text-lg'
          />
        </div>
      </div>

      {/* <div className='container'>
        <div className='flex md:flex-row flex-col w-full bg-white p-5 shadow-md rounded-lg items-center gap-2'>
          <Input
            icon={<Search fontSize='small' className='text-gray-500' />}
            placeholder='Search by location or by property name'
            className='flex-1 w-full'
          />
          <div className='flex md:w-max w-full gap-3'>
            <Button name='all' fullWidth />
            <Button name='for rent' fullWidth />
            <Button name='for sale' fullWidth />
          </div>
        </div>
      </div> */}
      {data?.properties && data.properties.length > 0 ? (
        <div className='flex flex-col gap-10 items-center'>
          <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {data &&
              data.properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
          </div>
          <Pagination
            onChange={handlePageChange}
            page={pageNumber}
            pages={data.pagination.totalPages}
          />
        </div>
      ) : (
        <NoPropertyFound />
      )}
    </div>
  );
};

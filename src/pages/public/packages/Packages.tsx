import SearchIcon from '@mui/icons-material/Search';
import { Text } from '../../../components/text';
import { Input } from '../../../components/input';
import { PackageCard } from '../../../components/destinationCard';
import { usePackages } from './usePackages';
import { NoDataFound } from '../../../components/noDataFound';
import { Pagination } from '../../../components/pagination';
import { useScrollOnChange } from '../../../hooks/useScrollOnChange';

export const Packages = () => {
  const { data, handlePageChange, pageNumber } = usePackages();

  const { scrollRef } = useScrollOnChange(pageNumber);

  return (
    <div className='flex flex-col md:gap-16 gap-8' ref={scrollRef}>
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
            // onChange={handleChange}
          />
        </div>
      </div>

      {data?.packages && data.packages.length > 0 ? (
        <div className='flex flex-col items-center gap-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container'>
            {data.packages.map((item) => (
              <PackageCard data={item} key={item._id} />
            ))}
          </div>
          <Pagination
            onChange={handlePageChange}
            page={pageNumber}
            pages={data.pagination.totalPages}
          />
        </div>
      ) : (
        <NoDataFound text='No Packages found' />
      )}

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

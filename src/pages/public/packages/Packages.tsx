import { usePackages } from './usePackages';
import { useScrollOnChange } from '@/hooks/useScrollOnChange';
import { Text } from '@/components/text';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { PackageCard } from '@/components/packageCard';
import { Pagination } from '@/components/pagination';
import { PackageCardSkeleton } from '@/components/skeletons';
import { NoDataFound } from '@/components/noDataFound';
import { Search } from '@/icons';

export const Packages = () => {
  const {
    data,
    handlePageChange,
    pageNumber,
    handleSearchChange,
    handleSearchClick,
    isLoading,
  } = usePackages();

  const message = encodeURIComponent(
    `Përshëndetje!
Do të doja të krijoja një paketë udhëtimi të personalizuar sipas dëshirave të mia.
A mund të më ndihmoni me sugjerime dhe organizimin?`,
  );

  const { scrollRef } = useScrollOnChange(pageNumber);

  return (
    <div className='flex flex-col md:gap-16 gap-8'>
      <div className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white'>
        {/* Decorative background blur */}
        <div className='absolute -top-16 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl' />
        <div className='absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl' />

        <div className='container relative flex flex-col w-full gap-6 py-16 md:py-20'>
          <div className='max-w-3xl space-y-3'>
            <Text
              text={'Eksploroni Paketat Tona Turistike'}
              size='text-4xl md:text-5xl'
              font='font-semibold'
            />
            <Text
              text={
                'Zbuloni udhëtime të paharrueshme, të krijuara posaçërisht për ju'
              }
              size='text-lg md:text-xl'
              className='text-white/90 max-w-2xl'
            />
          </div>

          <div
            className='flex flex-col md:flex-row md:w-3/4 w-full gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md border border-white/20 shadow-xl'
            ref={scrollRef}
          >
            <Input
              icon={<Search size={16} className='text-gray-500' />}
              className='flex-1'
              placeholder={'Kërkoni destinacione ose paketa udhëtimesh'}
              height='h-12'
              onChange={handleSearchChange}
            />
            <Button
              name='Kërko paketë'
              color='white'
              bgColor='#1d4ed8'
              bgHover='#1e40af'
              onClick={handleSearchClick}
              endIcon={<Search size={16} />}
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-5 container'>
          {Array.from({ length: 6 }).map((_, index) => (
            <PackageCardSkeleton key={index} />
          ))}
        </div>
      ) : data?.packages && data.packages.length > 0 ? (
        <div className='flex flex-col items-center gap-10 container'>
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-5'>
            {data.packages.map((item, idx) => (
              <PackageCard data={item} index={idx} key={item.id} />
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

      <div className='container'>
        <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white shadow-xl'>
          <div className='absolute -top-10 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl' />
          <div className='absolute bottom-0 left-0 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl' />

          <div className='relative flex flex-col items-center gap-5 px-6 py-10 md:px-10 md:py-14 text-center'>
            <Text
              text='Nuk po gjeni atë që po kërkoni?'
              size='text-2xl md:text-3xl'
              font='font-semibold'
            />
            <Text
              text='Le të krijojmë paketën perfekte të udhëtimit, të përshtatur sipas ëndrrave tuaja'
              font='font-medium'
              size='md:text-lg text-base'
              className='max-w-2xl text-white/90'
            />
            <button
              className='rounded-full bg-white px-7 py-3 font-medium text-blue-700 shadow-md transition-all hover:scale-[1.02] hover:bg-blue-50 duration-200 will-change-transform'
              onClick={() => {
                window.open(`https://wa.me/355696900916?text=${message}`);
              }}
            >
              Kërko Paketë të Personalizuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

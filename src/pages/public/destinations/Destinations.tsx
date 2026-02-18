import { useScrollOnChange } from '@/hooks/useScrollOnChange';
import { DestinationHero } from './DestinationHero';
import { useDestinations } from './useDestinations';
import { Text } from '@/components/text';
import { DestinationCard } from '@/components/destinationCard';
import { Pagination } from '@/components/pagination';
import { Image } from '@/components/image';

const message = encodeURIComponent(`
Përshëndetje
Jam i interesuar për një udhëtim të personalizuar.

Do të doja një ofertë sipas këtyre preferencave:
📍 Destinacioni:
📅 Data e nisjes:
⏳ Kohëzgjatja:
💰 Buxheti:
🧭 Stili i udhëtimit:

Faleminderit!
`);

export const Destinations = () => {
  const { data, handlePageChange, page } = useDestinations();
  const { scrollRef } = useScrollOnChange(page);

  return (
    <div className='flex flex-col gap-14'>
      <DestinationHero />

      <section className='container text-center'>
        <Text
          text={`Nëse ëndërron për plazhe të virgjëra, qytete ikonike apo aventura kulturore, destinacionet tona janë përzgjedhur me kujdes për t’u përshtatur me çdo stil udhëtimi dhe buxhet.`}
          size='md:text-xl text-lg'
          font='font-medium'
          className='text-gray-600'
        />
      </section>

      <div className='flex flex-col gap-10'>
        <div
          className='flex flex-col items-center justify-center gap-10 container'
          ref={scrollRef}
        >
          <Text
            text={'Destinacionet më të Pëlqyera'}
            size='text-4xl '
            font='font-medium'
            className='text-gray-700'
          />

          {data && data?.destinations?.length > 0 ? (
            <div className='flex flex-col items-center gap-8'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {data &&
                  data.destinations.map((destination) => {
                    return (
                      <DestinationCard
                        key={destination.id}
                        destination={destination}
                      />
                    );
                  })}
              </div>
              <Pagination
                onChange={handlePageChange}
                page={page}
                pages={data.pagination.allPages}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='bg-purple-100 py-6 md:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 container items-center'>
            <div className='flex flex-col gap-3 md:items-start items-center md:text-start text-center'>
              <Text
                text={'Nuk Je i Sigurt se Ku të Shkosh?'}
                size='md:text-4xl text-2xl'
                font='font-medium'
              />
              <Text
                text={`Ekspertët tanë të udhëtimeve do të të ndihmojnë të zgjedhësh destinacionin e përsosur
                bazuar në interesat, buxhetin dhe datat e udhëtimit.`}
                size='md:text-lg text-base'
              />
              <Text
                text={'Na Kontakto'}
                size='md:text-xl text-lg'
                className='flex w-fit px-6 md:px-8 py-2 md:py-3 rounded-full border border-black bg-purple-300 hover:bg-purple-600 hover:text-white cursor-pointer transition-all duration-300 will-change-transform select-none'
                onClick={() =>
                  window.open(`https://wa.me/355696900916?text=${message}`)
                }
              />
            </div>
            <span className='flex justify-center'>
              <Image
                img='/images/confused.png'
                className='h-[150px] md:h-[280px]'
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

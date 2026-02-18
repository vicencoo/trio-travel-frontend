import { Plane } from 'lucide-react';
import SearchIcon from '@mui/icons-material/Search';
import { usePlaneTickets } from './usePlaneTickets';
import { Text } from '@/components/text';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { PlaneTicketSkeleton } from '@/components/skeletons';
import { FlightOfferCard } from '@/components/flightOfferCard';
import { ViewAllButton } from '@/components/viewAllButton/ViewAllButton';
import { NoDataFound } from '@/components/noDataFound';

export const PlaneTickets = () => {
  const {
    planeTickets,
    handleLoadMore,
    ticketsToAppear,
    handleSearchChange,
    handleSearchClick,
    isLoading,
  } = usePlaneTickets();

  const message = encodeURIComponent(
    `Përshëndetje!
Do të doja disa sugjerime për udhëtimin tim. Mund të më ndihmoni, ju lutem?`,
  );

  return (
    <div className='flex flex-col gap-10 pb-10'>
      <div className='bg-gradient-to-r from-indigo-600 to-purple-600 py-9 md:py-14 relative md:mb-4 mb-20'>
        <div className='flex flex-col gap-5 items-center text-center text-white container'>
          <Plane className='w-14 h-14' />
          <Text text={'Eksploroni Botën'} size='text-5xl' font='font-medium' />
          <Text
            text={
              'Zbuloni oferta të mrekullueshme fluturimesh drejt destinacioneve në mbarë botën. Rezervoni aventurën tuaj të radhës sot!'
            }
            size='md:text-xl text-sm'
            font='font-medium'
            className='flex'
          />
        </div>
        <div className='container absolute md:-bottom-8 -bottom-24 '>
          <div className='bg-white rounded-xl shadow-md p-3 flex flex-col md:flex-row gap-3'>
            <Input
              placeholder='Kërkoni destinacion ose aeroport (p.sh. Paris, BUD, Romë, AMS)'
              className='flex-1'
              onChange={handleSearchChange}
              icon={<SearchIcon fontSize='small' className='text-gray-500' />}
            />
            <Button
              name='kërko biletë'
              onClick={handleSearchClick}
              endIcon={<SearchIcon fontSize='small' />}
              bgColor='#4f46e5'
              bgHover='#9333ea'
              color='white'
              border='transparent'
              borderHover='transparent'
              padding='9px 35px'
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <PlaneTicketSkeleton key={index} />
          ))}
        </div>
      ) : planeTickets && planeTickets.tickets.length > 0 ? (
        <div className='flex flex-col gap-10'>
          <div className='container grid grid-cols-1 md:grid-cols-2 gap-4'>
            {planeTickets.tickets.map((ticket) => (
              <FlightOfferCard ticket={ticket} key={ticket.id} />
            ))}
          </div>

          {planeTickets.totalTickets && (
            <div className='flex w-full justify-center'>
              <ViewAllButton
                text='Shiko më shumë bileta'
                onClick={handleLoadMore}
                disabled={ticketsToAppear >= planeTickets.totalTickets}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <NoDataFound text='Nuk u gjet asnjë biletë' />
        </div>
      )}

      <div className='container'>
        <div className='flex flex-col bg-white rounded-lg border shadow-lg p-5 md:p-10 gap-3 md:gap-6 text-center'>
          <Text
            text={'Keni nevojë për ndihmë në planifikimin e udhëtimit tuaj?'}
            size='md:text-3xl text-xl'
            font='font-medium'
          />
          <Text
            text={
              'Jemi këtu për t’ju ndihmuar të gjeni fluturimin ideal dhe të krijoni kujtime të paharrueshme. Na kontaktoni për asistencë të personalizuar.'
            }
            size='md:text-lg'
            font='font-medium'
            className='text-gray-500'
          />
          <span className='flex w-full justify-center'>
            <Button
              name='Kontaktoni Ekspertët e Udhëtimit'
              onClick={() => {
                window.open(`https://wa.me/355696900916?text=${message}`);
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

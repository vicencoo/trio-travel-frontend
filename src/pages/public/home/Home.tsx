import { useNavigate } from 'react-router-dom';
import type { PlaneTicket } from '@/types/types';
import { useHome } from './useHome';
import { Advertise } from './Advertise';
import { SectionHeader } from './SectionHeader';
import { PropertyCard } from '@/components/propertyCard';
import { ViewAllButton } from '@/components/viewAllButton/ViewAllButton';
import { PackageCard } from '@/components/packageCard';
import { FlightOfferCard } from '@/components/flightOfferCard';
import { StatisticsSection } from './StatisticsSection';
import { Destinations } from './Destinations';
import { FAQ } from './FAQ';

export const Home = () => {
  const { properties, planeTickets, packages, destinations } = useHome();
  const navigate = useNavigate();
  return (
    <div className='container flex flex-col md:gap-20 gap-14 md:mb-16 my-10'>
      <Advertise />

      {properties?.properties && properties.properties.length > 0 && (
        <div className='flex flex-col gap-10'>
          <SectionHeader
            title='Ofertat më të fundit për prona'
            text='Shfleto pronat më të mira në treg'
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {properties.properties.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>

          <div className='flex w-full justify-center'>
            <ViewAllButton
              text='shiko te gjitha pronat'
              onClick={() => navigate('/properties')}
            />
          </div>
        </div>
      )}

      {packages?.packages && packages.packages.length > 0 && (
        <div className='flex flex-col gap-10'>
          <SectionHeader
            title='Paketat tona turistike'
            text='Zbuloni eksperienca unike udhëtimi ose na kontaktoni për të krijuar paketën tuaj të personalizuar'
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {packages.packages.map((packageItem) => (
              <PackageCard key={packageItem.id} data={packageItem} />
            ))}
          </div>
          <div className='flex justify-center w-full'>
            <ViewAllButton text='Shiko Të Gjitha Paketat' path='/packages' />
          </div>
        </div>
      )}

      {planeTickets &&
        planeTickets.totalTickets &&
        planeTickets.totalTickets > 0 && (
          <div className='flex flex-col gap-10'>
            <SectionHeader
              title='Ofertat e fluturimeve'
              text='Gjeni ofertat më të mira të fluturimeve sipas destinacionit dhe datave tuaja të udhëtimit'
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {planeTickets.tickets &&
                planeTickets.tickets.map((ticket: PlaneTicket) => (
                  <FlightOfferCard ticket={ticket} key={ticket.id} />
                ))}
            </div>

            <div className='flex w-full justify-center'>
              <ViewAllButton
                text='Shiko Të Gjitha Ofertat'
                path='planeTickets'
              />
            </div>
          </div>
        )}

      <StatisticsSection />

      <div className='flex flex-col gap-10'>
        <SectionHeader
          title='Destinacionet më të pëlqyera'
          text='Udhëtoni botën me konfidencë te plotë'
        />
        <Destinations destinations={destinations} />
      </div>

      <div className='flex flex-col gap-10'>
        <SectionHeader title='Pyetjet më të shpeshta' />
        <FAQ />
      </div>
    </div>
  );
};

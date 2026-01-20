import { Map } from '../../components/map';
import { Text } from '../../components/text';
import { FooterInfo } from './FooterInfo';

const SERVICES = [
  { id: 1, text: 'Plane Tickets' },
  { id: 2, text: 'Package Booking' },
  { id: 3, text: 'Hotel Booking' },
  { id: 4, text: 'Rental Services' },
];

export const Footer = () => {
  return (
    <div className='container border-t border-gray-300 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 border-b border-gray-500 pb-5 md:gap-10 gap-5'>
        <FooterInfo />

        <div className='flex flex-col gap-4 md:mx-auto mx-0 md:items-start items-center'>
          <Text text={'Services'} size='text-xl' font='font-serif' />
          <div className='flex flex-col gap-2 md:items-start items-center'>
            {SERVICES.map((service) => (
              <Text
                text={service.text}
                key={service.id}
                className='hover:underline w-fit text-gray-400 cursor-pointer hover:text-gray-700 transition-colors duration-300'
                font='font-medium'
              />
            ))}
          </div>
        </div>

        <Map />
      </div>
      <span className='flex w-full justify-center pt-3'>
        <Text size='text-sm' font='font-medium'>
          &copy; Trio Travel Agency. All rights reserved.
        </Text>
      </span>
    </div>
  );
};

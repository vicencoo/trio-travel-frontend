import { Link } from 'react-router-dom';
import { Text } from '@/components/text';
import { FooterInfo } from './FooterInfo';
import { Map } from '@/components/map';
import { CORE_SERVICES, getServicePage } from '@/constants/services';

const FOOTER_SERVICES = [
  ...CORE_SERVICES,
  ...[
    'insurance',
    'carInsurance',
    'billPayments',
    'finePayments',
    'moneygram',
    'eAlbania',
  ]
    .map(getServicePage)
    .filter((service) => service !== undefined),
];

export const Footer = () => {
  return (
    <div className='flex flex-col w-full border-t border-gray-300 py-8 md:gap-10 gap-5'>
      {/* <div className=' container '> */}
      <div className=' container grid grid-cols-1 md:grid-cols-3 border-b border-gray-500 md:gap-10 gap-5 pb-5'>
        <FooterInfo />

        <div className='flex flex-col gap-4 md:mx-auto mx-0 md:items-start items-center'>
          <Text text={'Shërbimet'} size='text-xl' font='font-serif' />
          <nav
            aria-label='Shërbimet'
            className='grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2 md:items-start items-center'
          >
            {FOOTER_SERVICES.map((service) => (
              <Link
                to={service.path}
                key={service.path}
                className='hover:underline w-fit text-gray-600 hover:text-gray-700 transition-colors duration-300 font-medium'
              >
                {service.name}
              </Link>
            ))}
            <Link
              to='/sherbime'
              className='hover:underline w-fit text-red-600 hover:text-red-700 transition-colors duration-300 font-semibold'
            >
              Të gjitha shërbimet
            </Link>
          </nav>
        </div>

        <Map />
      </div>
      <span className='flex w-full justify-center pt-3'>
        <Text size='text-sm' font='font-medium'>
          &copy; Trio Travel & Immo. Të gjitha të drejtat e rezervuara.
        </Text>
      </span>
    </div>
    // </div>
  );
};

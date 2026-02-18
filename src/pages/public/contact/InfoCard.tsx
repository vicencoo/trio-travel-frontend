import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Card } from '@/components/card';
import { Text } from '@/components/text';

const INFO = [
  {
    id: 1,
    icon: <LocalPhoneOutlinedIcon fontSize='small' className='text-white' />,
    label: 'kontakt',
    value: '+355 69 690 0916',
  },
  {
    id: 2,
    icon: <EmailOutlinedIcon fontSize='small' className='text-white' />,
    label: 'email',
    value: 'triotravel.imobiliare@gmail.com',
  },
  {
    id: 3,
    icon: <LocationOnOutlinedIcon fontSize='small' className='text-white' />,
    label: 'vendëndodhja',
    value: 'Kryqëzimi Rinia, Vlorë, Albania',
  },
];

export const InfoCard = () => {
  return (
    <Card padding='px-5 py-3'>
      <div className='flex flex-col gap-2'>
        <Text text={'Dërgoni një Mesazh'} size='text-lg' font='font-medium' />
        <Text
          text={
            "Plotësoni formularin dhe ne do t'ju kontaktojmë sa më shpejt që të jetë e mundur. Cdo pyetje apo kërkesë juaja është e rëndësishme për ne."
          }
          size='text-sm'
          className='text-gray-500'
        />
      </div>

      <div className='flex flex-col gap-3'>
        {INFO.map((item) => (
          <div
            className='flex items-center gap-3 bg-blue-50 w-full px-5 py-3 rounded-md'
            key={item.id}
          >
            <span className='flex w-12 h-12 items-center justify-center bg-blue-600 rounded-md'>
              {item.icon}
            </span>
            <div className='flex flex-col gap-1'>
              <Text
                text={item.label}
                size='text-sm'
                font='font-medium'
                className='capitalize text-gray-500'
              />
              <Text
                text={item.value}
                size='text-sm'
                font='font-bold font-serif'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-3 bg-blue-50 rounded-md px-5 py-3'>
        <span className='flex items-center gap-1'>
          <AccessTimeOutlinedIcon className='text-red-500' />
          <Text text={'Orari i Punës'} size='text-lg' font='font-medium' />
        </span>
        <Text
          text={'E Hënë - E Shtunë : 9:00 AM - 8:00 PM'}
          size='text-sm'
          font='font-medium font-serif'
          className='text-gray-600'
        />
        <Text
          text={'E Diel : Mbyllur'}
          size='text-sm'
          font='font-medium font-serif'
          className='text-gray-600'
        />
      </div>
    </Card>
  );
};

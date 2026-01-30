import { BadgeCheck, MapPin, Users } from 'lucide-react';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';

const INFO = [
  { id: 1, icon: <Users />, text: 'Udhëtime me stil personal' },
  { id: 2, icon: <MapPin />, text: 'Sekrete ekskluzive të destinacioneve' },
  { id: 3, icon: <BadgeCheck />, text: 'Sherbim Cilesor Per Klientet' },
];

export const Advertise = () => {
  return (
    <div className='relative w-full h-[550px] rounded-3xl overflow-hidden select-none'>
      <Image
        img='/images/advertise.png'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black/40' />

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-8 text-white'>
        <span className='flex justify-center text-black'>
          <Text
            text={'Udhëtime Luksoze, Për Ty'}
            font='font-semibold'
            className='px-10 py-2 bg-yellow-300 w-max rounded-3xl'
          />
        </span>
        <Text
          text={'Hap Pasaportën për Aventurat e Botës'}
          size='md:text-5xl text-xl'
          font='font-medium'
        />
        <div className='flex md:flex-row flex-col items-center gap-5'>
          {INFO.map((item) => (
            <span className='flex items-center gap-1 text-nowrap' key={item.id}>
              <span className='text-yellow-400'>{item.icon}</span>
              <Text text={item.text} size='text-sm' font='font-medium' />
            </span>
          ))}
        </div>
        <span className='flex w-full justify-center'>
          <Text
            text={'Nis Aventurën Tënde'}
            size='text-lg'
            font='font-medium'
            className='border-2 px-7 py-2 border-black bg-black/40 rounded-3xl hover:bg-black/90 cursor-pointer transition-all duration-300'
          />
        </span>
      </div>
    </div>
  );
};

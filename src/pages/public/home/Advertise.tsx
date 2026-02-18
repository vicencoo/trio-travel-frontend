import { Image } from '@/components/image';
import { Text } from '@/components/text';
import { BadgeCheck, MapPin, Users } from 'lucide-react';

const INFO = [
  { id: 1, icon: <Users />, text: 'Itinerare të personalizuara' },
  { id: 2, icon: <MapPin />, text: 'Destinacione sekrete & unike' },
  { id: 3, icon: <BadgeCheck />, text: 'Shërbim premium 24/7' },
];

const message = encodeURIComponent(`
Përshëndetje 👋
Jam i interesuar për një udhëtim të personalizuar.

Do të doja një ofertë sipas këtyre preferencave:
📍 Destinacioni:
📅 Data e nisjes:
⏳ Kohëzgjatja:
💰 Buxheti:
🧭 Stili i udhëtimit:

Faleminderit! 😊
`);

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
            text={'Udhëtime Ekskluzive të Personalizuara'}
            font='font-semibold'
            className='px-10 py-2 bg-yellow-300 w-max rounded-3xl'
          />
        </span>
        <Text
          text={'Zbulo botën me udhëtime të dizajnuara vetëm për ty'}
          size='md:text-4xl text-xl'
          font='font-medium'
          className='drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
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
            text={'Planifiko Udhëtimin Tënd'}
            size='text-lg'
            font='font-medium'
            className='border-2 px-7 py-2 border-black rounded-3xl backdrop-blur-md bg-black/40 hover:bg-black/70 cursor-pointer transition-all duration-300'
            onClick={() =>
              window.open(`https://wa.me/355696900916?text=${message}`)
            }
          />
        </span>
      </div>
    </div>
  );
};

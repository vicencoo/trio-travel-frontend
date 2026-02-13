import { Image } from '../../../components/image';
import { Text } from '../../../components/text';

export const PropertyHero = () => {
  return (
    <div className='flex w-full md:h-[300px] h-[200px] relative overflow-hidden'>
      <Image img='/images/property-cover.png' className='w-full object-cover' />

      <div className='absolute inset-0 bg-black/50' />

      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center text-white gap-3'>
        <div className='flex flex-col items-center'>
          <Text
            text={'Zbuloni Pronën Tuaj Të Ënderrave'}
            size='md:text-5xl text-2xl'
            font='font-bold'
            className='block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center text-nowrap'
          />
        </div>
        <Text
          text={
            'Eksploroni pronat premium të kuruara nga ekipi ynë i ekspertëve'
          }
          font='font-semibold'
          size='md:text-lg text-sm'
          className='text-center'
        />
      </div>
    </div>
  );
};

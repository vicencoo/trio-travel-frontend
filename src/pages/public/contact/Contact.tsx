import { Text } from '@/components/text';
import { ContactForm } from './ContactForm';
import { InfoCard } from './InfoCard';
import { useContact } from './useContact';

export const Contact = () => {
  const { contact, handleChangeContact, handleSubmit } = useContact();
  return (
    <div className='flex flex-col gap-10 pb-7 md:pb-20'>
      <div className='relative w-full overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-12 md:py-20'>
        <div className='relative z-10 container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='flex flex-col items-center text-center gap-6 md:gap-8 max-w-4xl mx-auto'>
            <Text
              text={'Na Kontaktoni'}
              size='text-3xl md:text-5xl lg:text-6xl'
              font='font-bold'
              className='text-white leading-tight'
            />
            <div className='flex flex-col gap-3 md:gap-4'>
              <Text
                text={`Jemi këtu për t'ju ndihmuar të gjeni shërbimin më cilësor për
                atë çka ju nevojitet`}
                size='text-base md:text-xl'
                font='font-semibold'
                className='text-white/95 leading-relaxed'
              />
              <Text
                text={`Ekipi ynë profesional është gati t'ju shërbejë me pasion dhe
                përkushtim`}
                size='md:text-base text-sm'
                font='font-medium'
                className=' text-white/80 leading-relaxed'
              />
            </div>
          </div>
        </div>
        {/* Bottom wave decoration */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg
            className='w-full h-12 md:h-16'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='fill-purple-200'
            ></path>
          </svg>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 container'>
        <InfoCard />
        <ContactForm
          contact={contact}
          handleChangeContact={handleChangeContact}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

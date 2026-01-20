import { FAVORITE_DESTINATIONS } from '../../..';
import { Button } from '../../../components/button';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import { DestCard } from './DestCard';

export const Destinations = () => {
  return (
    <div className='flex flex-col gap-14'>
      <div className='flex flex-col items-center justify-center gap-14 bg-gray-900 text-white md:py-32 py-10'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <Text
            text={' Explore the World Your Way'}
            size='text-5xl'
            font='font-serif'
          />
          <Text
            text={`Handpicked destinations crafted for unforgettable journeys and
         meaningful experiences.`}
            size='text-lg'
            font='font-medium'
          />
        </div>
        <Button
          name='Start Exploring'
          bgHover='#059669'
          bgColor='#10b981'
          color='white'
        />
      </div>

      <section className='container text-center'>
        <Text
          text={` Whether you’re dreaming of pristine beaches, iconic cities, or
                cultural adventures, our destinations are carefully curated to match
                every travel style and budget.`}
          size='text-2xl'
          font='font-medium'
          className='text-gray-600'
        />
      </section>

      <div className='flex flex-col'>
        <div className='bg-gray-50  '>
          <div className='flex flex-col items-center justify-center py-10 gap-10 container'>
            <Text
              text={' Popular Destinations'}
              size='text-3xl'
              font='font-medium'
              className='text-gray-700'
            />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
              {FAVORITE_DESTINATIONS.map((item) => (
                <DestCard
                  key={item.id}
                  image={item.image}
                  city={item.city}
                  country={item.country}
                  tagline={item.tagline}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='bg-purple-100 py-6 md:py-24'>
          <div className='grid grid-cols-2 container items-center'>
            <div className='flex flex-col gap-3'>
              <Text
                text={'Not Sure Where to Go?'}
                size='text-4xl'
                font='font-medium'
              />
              <Text
                text={`Our travel experts will help you choose the perfect destination
           based on your interests, budget, and travel dates.`}
                size='text-lg'
              />
              <Text
                text={'Contact Us'}
                size='text-xl'
                className='flex w-fit px-8 py-3 rounded-full border border-black bg-purple-300 hover:bg-purple-600 hover:text-white cursor-pointer transition-all duration-300 will-change-transform select-none'
              />
            </div>
            <span className='flex justify-center'>
              <Image img='/images/confused.png' className='h-[280px]' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

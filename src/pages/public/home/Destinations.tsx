import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from 'react';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import { useNavigate } from 'react-router-dom';
import type { DestinationsProps } from './types';

const VISIBLE_COUNT = 8;

export const Destinations = ({ destinations }: DestinationsProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(VISIBLE_COUNT);
  const navigate = useNavigate();
  const total = destinations?.length || 0;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 455) {
        setVisibleCount(2);
      } else if (window.innerWidth < 690) {
        setVisibleCount(3); // below md
      } else if (window.innerWidth < 1077) {
        setVisibleCount(5); // below lg
      } else {
        setVisibleCount(8); // md and up
      }
    };
    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const visibleItems = [];
  if (destinations && total > 0) {
    for (let i = 0; i < visibleCount; i++) {
      visibleItems.push(destinations[(startIndex + i) % total]);
    }
  }
  return (
    <div className='flex items-center gap-3'>
      <div
        className='flex p-1 bg-gray-200 rounded-full items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'
        onClick={prev}
      >
        <ChevronLeftIcon fontSize='medium' />
      </div>
      <div className='flex items-center sm:justify-between justify-center sm:gap-0 gap-10 w-full'>
        {visibleItems.slice(0, visibleCount).map((destination) => {
          const firstImage = destination.destination_images[0];
          const image =
            typeof firstImage === 'object' && 'destination_image' in firstImage
              ? firstImage.destination_image
              : '';
          return (
            <div
              className='flex flex-col items-center gap-1'
              key={destination.id}
            >
              <Image
                src={image}
                className='w-[100px] h-[130px] object-cover rounded-full cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'
                onClick={() => navigate('/destinations')}
              />
              <Text
                text={destination.city}
                className='capitalize'
                size='text-sm'
                font='font-medium'
              />
            </div>
          );
        })}
      </div>
      <div
        className='flex p-1 bg-slate-200 rounded-full items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'
        onClick={next}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
};

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from 'react';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import { FAVORITE_DESTINATIONS } from '../../..';
import { useNavigate } from 'react-router-dom';

const VISIBLE_COUNT = 8;

export const PopularDestinations = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(VISIBLE_COUNT);
  const navigate = useNavigate();
  const total = FAVORITE_DESTINATIONS.length;

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

  const visibleItems = Array.from({ length: visibleCount }, (_, i) => {
    return FAVORITE_DESTINATIONS[(startIndex + i) % total];
  });
  return (
    <div className='flex items-center gap-3'>
      <div
        className='flex p-1 bg-gray-200 rounded-full items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'
        onClick={prev}
      >
        <ChevronLeftIcon fontSize='medium' />
      </div>
      <div className='flex items-center sm:justify-between justify-center sm:gap-0 gap-10 w-full'>
        {visibleItems.slice(0, visibleCount).map((item) => (
          <div className='flex flex-col items-center gap-1' key={item.id}>
            <Image
              img={item.image}
              className='w-[100px] h-[130px] object-cover rounded-full cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'
              onClick={() => navigate('/destinations')}
            />
            <Text
              text={item.city}
              className='capitalize'
              size='text-sm'
              font='font-medium'
            />
          </div>
        ))}
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

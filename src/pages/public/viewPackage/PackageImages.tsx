import { Image } from '../../../components/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { TouristPackage } from '../../../types';
import type { Dispatch, SetStateAction } from 'react';

type PackageImagesProps = {
  packageData: TouristPackage;
  next: () => void;
  prev: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
};

export const PackageImages = ({
  packageData,
  next,
  prev,
  currentImageIndex,
  setCurrentImageIndex,
}: PackageImagesProps) => {
  return (
    <div className='flex flex-col w-full justify-center items-center gap-2'>
      <div className='relative md:w-5/6 w-full md:h-[75vh] h-[55vh] bg-slate-900 overflow-hidden group rounded-lg border border-gray-500'>
        <div className='absolute inset-0 transition-transform duration-700 ease-out'>
          {packageData &&
            packageData?.packageImages?.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentImageIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-110'
                }`}
              >
                <Image
                  src={img.image}
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            ))}
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent' />
          <div className='absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10' />
        </div>

        {/* Buttons */}
        <button
          className='bg-white rounded-full absolute left-2 top-1/2 -translate-y-1/2 p-1 hover:scale-110 transition-all duration-300 will-change-transform'
          onClick={prev}
        >
          <ChevronLeftIcon fontSize='large' />
        </button>

        <button
          className='bg-white rounded-full absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:scale-110 transition-all duration-300 will-change-transform'
          onClick={next}
        >
          <ChevronRightIcon fontSize='large' />
        </button>
      </div>
      {/* Images */}
      <div className='grid md:grid-cols-6 grid-cols-3 gap-3'>
        {packageData &&
          packageData?.packageImages?.map((img, index) => (
            <Image
              key={index}
              src={img.image}
              className={`object-cover w-32 h-20 transition-all duration-500 will-change-transform rounded-xl hover:border-blue-300 ${index === currentImageIndex ? 'border-2 border-blue-500 scale-110' : 'border-2 border-gray-500'}  cursor-pointer`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
      </div>
    </div>
  );
};

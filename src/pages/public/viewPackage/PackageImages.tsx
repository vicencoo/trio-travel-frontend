import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { PackageImagesProps } from './types';
import { Image } from '@/components/image';
import type { PackageImage } from '@/types/types';

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
            packageData?.package_images
              ?.filter(
                (img): img is PackageImage =>
                  typeof img === 'object' && 'image' in img,
              )
              ?.map((img, index) => (
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

        {/* Image Number */}
        <span className='absolute right-2 top-2 bg-black/40 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full flex items-center justify-center  text-white text-sm font-semibold shadow-md'>
          {currentImageIndex + 1} / {packageData?.package_images?.length}
        </span>
      </div>
      {/* Images */}
      <div className='flex md:grid md:grid-cols-7 gap-3 overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory'>
        {packageData &&
          packageData?.package_images
            ?.filter(
              (img): img is PackageImage =>
                typeof img === 'object' && 'image' in img,
            )
            ?.map((img, index) => (
              <Image
                key={index}
                src={img.image}
                className={`object-cover w-32 h-20 flex-shrink-0 transition-all duration-500 will-change-transform rounded-xl hover:border-blue-300 ${index === currentImageIndex ? 'border-2 border-blue-500' : 'border-2 border-gray-500'}  cursor-pointer`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
      </div>
    </div>
  );
};

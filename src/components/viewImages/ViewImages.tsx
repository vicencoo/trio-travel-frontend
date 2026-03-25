import { ChevronLeft, ChevronRight } from '@/icons';
import { Image } from '../image';
import { useState } from 'react';
import type { PackageImage, PropertyImage } from '@/types/types';

interface ViewImagesProps {
  images: (string | File | PropertyImage | PackageImage)[];
  initialIndex?: number;
  onImageClick?: (index: number) => void;
}

export const ViewImages = ({
  images,
  initialIndex = 0,
  onImageClick,
}: ViewImagesProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  const prev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getImageSrc = (
    src: string | File | PackageImage | PropertyImage,
  ): string | File => {
    if (typeof src === 'string' || src instanceof File) return src;
    if ('image' in src) return src.image;
    if ('property_image' in src) return src.property_image;
    return '';
  };

  return (
    <div className='flex flex-col w-full justify-center items-center gap-2'>
      {/* Main Image */}
      <div className='relative md:w-5/6 w-full md:h-[75vh] h-[55vh] bg-slate-900 overflow-hidden group rounded-lg border border-gray-500'>
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentImageIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
          >
            <Image
              src={getImageSrc(src)}
              alt={`Imazhi ${currentImageIndex}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              priority={index === 0 ? 'high' : 'auto'}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        ))}

        {/* Gradients */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10' />

        {/* Navigation Buttons */}
        <button
          className='bg-white rounded-full absolute left-2 top-1/2 -translate-y-1/2 p-1 hover:scale-110 transition-all duration-300 will-change-transform'
          aria-label='Imazhi i mëparshëm'
          onClick={prev}
        >
          <ChevronLeft fontSize='large' />
        </button>
        <button
          className='bg-white rounded-full absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:scale-110 transition-all duration-300 will-change-transform'
          aria-label='Imazhi tjetër'
          onClick={next}
        >
          <ChevronRight fontSize='large' />
        </button>

        {/* Image Counter */}
        <span className='absolute right-2 top-2 bg-black/40 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md'>
          {currentImageIndex + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnails */}
      <div className='flex md:grid md:grid-cols-7 gap-3 overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory'>
        {images.map((src, index) => (
          <Image
            key={index}
            alt={`Imazhi ${index}`}
            src={getImageSrc(src)}
            loading='lazy'
            priority='auto'
            className={`object-cover w-32 h-20 flex-shrink-0 transition-all duration-500 will-change-transform rounded-xl cursor-pointer
              ${index === currentImageIndex ? 'border-2 border-blue-500' : 'border-2 border-gray-500'}
              hover:border-blue-300`}
            onClick={() => {
              setCurrentImageIndex(index);
              onImageClick?.(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

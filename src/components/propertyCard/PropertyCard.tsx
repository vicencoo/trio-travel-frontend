import { useNavigate } from 'react-router-dom';
import { Image } from '../image';
import { Text } from '../text';
import { Button } from '../button';
import type { PropertyCardProps } from './types';
import { formattedPrice } from '@/utils/formattedPrice';
import {
  BathtubOutlinedIcon,
  HotelOutlinedIcon,
  LocationOnOutlined,
  SquareFootOutlinedIcon,
} from '@/icons';
import { createSlug } from '@/utils/createSlug';

export const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const navigate = useNavigate();

  const firstImage = property?.property_images?.[0];
  const image =
    typeof firstImage === 'object' && 'property_image' in firstImage
      ? firstImage.property_image
      : '';

  const slug = createSlug(property.title, property.id);

  const handleNavigate = () => navigate(`/pronat/${slug}`);

  return (
    <div
      className={`group flex w-full ${property.availability !== 'available' ? 'cursor-not-allowed' : 'cursor-pointer'}  flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl will-change-transform`}
      onClick={() => property.availability === 'available' && handleNavigate()}
    >
      {property.availability !== 'available' && (
        <>
          <div className='absolute inset-0 bg-black/40 z-[9998]' />

          <div className='absolute inset-0 z-[9999] pointer-events-none'>
            <div className='absolute top-8 -right-10 -rotate-[-35deg] bg-red-600 text-white text-[10px] font-bold w-[180px] py-1 shadow-md uppercase tracking-wider text-center'>
              {property.availability === 'sold'
                ? 'E SHITUR'
                : 'E DHËNË ME QIRA'}
            </div>
          </div>
        </>
      )}

      <div className='relative w-full aspect-[4/3] overflow-hidden'>
        <Image
          src={image}
          alt={property.title}
          loading={index < 3 ? 'eager' : 'lazy'}
          priority={index < 3 ? 'high' : 'auto'}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 will-change-transform'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent' />

        {property.availability === 'available' && (
          <span className='absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-sm'>
            {property.listing_type === 'rent' ? 'Me Qira' : 'Në Shitje'}
          </span>
        )}
      </div>

      <div className='flex flex-1 flex-col justify-between px-5 py-5'>
        <div className='space-y-4'>
          <Text
            text={property?.title}
            size='text-lg md:text-xl'
            font='font-bold'
            className='line-clamp-2 capitalize text-gray-900'
          />

          <div className='flex items-center gap-2 text-gray-500'>
            <LocationOnOutlined fontSize='inherit' className='text-gray-400' />
            <Text
              text={`${property?.city}, Shqipëri`}
              size='text-sm'
              font='font-medium'
              className='capitalize text-gray-500'
            />
          </div>

          <div className='flex items-center gap-4 border-t border-gray-100 pt-4 text-gray-600'>
            {property.bedrooms && (
              <span className='flex items-center gap-1.5'>
                <HotelOutlinedIcon
                  fontSize='inherit'
                  className='text-gray-400'
                />
                <Text
                  text={`${property.bedrooms} dhoma`}
                  size='text-sm'
                  font='font-medium'
                  className='text-gray-500'
                />
              </span>
            )}

            {property.toilets && (
              <span className='flex items-center gap-1.5'>
                <BathtubOutlinedIcon
                  fontSize='inherit'
                  className='text-gray-400'
                />
                <Text
                  text={`${property.toilets} banjo`}
                  size='text-sm'
                  font='font-medium'
                  className='text-gray-500'
                />
              </span>
            )}

            {property.space && (
              <span className='flex items-center gap-1.5'>
                <SquareFootOutlinedIcon
                  fontSize='inherit'
                  className='text-gray-400'
                />
                <Text
                  size='text-sm'
                  font='font-medium'
                  className='text-gray-500'
                >
                  {property.space} m<sup>2</sup>
                </Text>
              </span>
            )}
          </div>
        </div>

        <div className='mt-5 flex items-center justify-between border-t border-gray-100 pt-4'>
          <div className='flex flex-col'>
            <Text
              text={property.listing_type === 'rent' ? 'Çmimi / muaj' : 'Çmimi'}
              size='text-sm'
              font='font-medium'
              className='text-gray-500'
            />
            <Text
              text={`${formattedPrice(Number(property.price))}€`}
              size='text-2xl'
              font='font-semibold font-serif'
              className='text-blue-700'
            />
          </div>

          <Button
            name='Shiko Pronën'
            color='#1d4ed8'
            border='#1d4ed8'
            bgColor='white'
            bgHover='#1d4ed8'
            hoverColor='white'
            padding='8px 24px'
            onClick={(e?: React.MouseEvent) => {
              if (property.availability === 'available') {
                e?.stopPropagation();
                handleNavigate();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

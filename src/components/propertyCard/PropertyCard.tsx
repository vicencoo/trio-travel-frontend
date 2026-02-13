import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import { useNavigate } from 'react-router-dom';
import { Image } from '../image';
import { Text } from '../text';
import { Button } from '../button';
import type { PropertyCardProps } from './types';
import { formattedPrice } from '../../utils/formattedPrice';

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();
  const firstImage = property?.property_images?.[0];
  const image =
    typeof firstImage === 'object' && 'property_image' in firstImage
      ? firstImage.property_image
      : '';
  return (
    <div
      className='flex flex-col w-full bg-white border border-gray-200 h-[440px] rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-md transition-all duration-300 will-change-transform cursor-pointer group select-none'
      onClick={() => navigate(`/properties/view-property/${property.id}`)}
    >
      <div className='relative h-[230px] w-full'>
        <Image
          src={image}
          className='h-full w-full object-cover group-hover:scale-105 transition-all duration-300 will-change-transform'
        />
        <span className='absolute top-2 left-2 px-3 py-1 bg-blue-600 text-white rounded-2xl text-xs'>
          {property.listing_type === 'rent' ? 'Me Qira' : 'Në Shitje'}
        </span>
      </div>
      <div className='flex flex-col px-3 py-3 h-[210px] justify-between'>
        <Text text={property?.title} font='font-bold' className='capitalize' />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 border-b-2 pb-4'>
            <div className='flex items-center'>
              <LocationOnOutlinedIcon
                fontSize='inherit'
                className='text-gray-500'
              />
              <Text
                text={`${property?.city}, albania`}
                size='text-sm'
                font='font-semibold font-serif'
                className='text-gray-500 capitalize'
              />
            </div>
            <div className='flex items-center gap-5'>
              {property.bedrooms && (
                <span className='flex items-center gap-1'>
                  <HotelOutlinedIcon
                    fontSize='inherit'
                    className='text-gray-500'
                  />
                  <Text
                    text={property.bedrooms}
                    size='text-sm'
                    font='font-medium'
                    className='text-gray-500'
                  />
                </span>
              )}
              {property.toilets && (
                <span className='flex items-center gap-1'>
                  <BathtubOutlinedIcon
                    fontSize='inherit'
                    className='text-gray-500'
                  />
                  <Text
                    text={property.toilets}
                    size='text-sm'
                    font='font-medium'
                    className='text-gray-500'
                  />
                </span>
              )}
              {property.space && (
                <span className='flex items-center gap-1'>
                  <SquareFootOutlinedIcon
                    fontSize='inherit'
                    className='text-gray-500'
                  />
                  <Text
                    size='text-sm'
                    font='font-medium'
                    className='text-gray-500'
                  >
                    {property.space}
                    <sup>2</sup>
                  </Text>
                </span>
              )}
            </div>
          </div>
          <div className='flex items-center w-full justify-between'>
            <Text
              text={`${formattedPrice(Number(property.price))}€`}
              size='text-2xl'
              font='font-semibold font-serif'
              className='text-blue-600'
            />
            <Button
              name='shiko detajet'
              padding='8px 30px'
              border='transparent'
              borderHover='#1e3a8a'
              color='white'
              bgColor='#3b82f6'
              bgHover='#2563eb'
              onClick={() =>
                navigate(`/properties/view-property/${property.id}`)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

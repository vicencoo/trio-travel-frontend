import { LocationOn } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import Wifi from '@mui/icons-material/Wifi';
import LocalDining from '@mui/icons-material/LocalDining';
import LocalParking from '@mui/icons-material/LocalParking';
import Spa from '@mui/icons-material/Spa';
import Pool from '@mui/icons-material/Pool';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import RoomService from '@mui/icons-material/RoomService';
import AcUnit from '@mui/icons-material/AcUnit';
import { useNavigate } from 'react-router-dom';
import { Image } from '../image';
import { Text } from '../text';
import { Button } from '../button';
import type { HotelCardProps } from './types';
import { formattedPrice } from '@/utils/formattedPrice';

const FACILITY_ICON = {
  wifi: Wifi,
  dining: LocalDining,
  parking: LocalParking,
  spa: Spa,
  pool: Pool,
  fitness: FitnessCenter,
  'room-service': RoomService,
  ac: AcUnit,
};

type FacilityKey = keyof typeof FACILITY_ICON;

export const HotelCard = ({ data }: HotelCardProps) => {
  const navigate = useNavigate();
  const firstImage = data?.hotel_images?.[0];
  const image =
    typeof firstImage === 'object' &&
    'hotel_image' in firstImage &&
    firstImage.hotel_image;

  return (
    <div
      className='flex flex-col bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 will-change-transform h-full cursor-pointer select-none'
      onClick={() => navigate(`/hotels/view-hotel/${data.id}`)}
    >
      <div className='flex h-[220px] relative w-full'>
        <Image src={image || ''} className='h-full w-full object-cover' />
        {data.rating && data.reviews && (
          <span className='absolute bottom-2 left-2 bg-white flex px-3 py-1 rounded-3xl items-center gap-1'>
            <StarIcon fontSize='small' className='text-yellow-400' />
            <span className='flex items-baseline gap-1'>
              <Text text={data.rating} font='font-bold' />
              <Text
                text={`(${data.reviews})`}
                size='text-xs'
                font='font-medium'
                className='text-gray-500'
              />
            </span>
          </span>
        )}
      </div>
      <div className='flex flex-col px-4 py-5 h-full justify-between'>
        <div className='flex flex-col gap-3'>
          <Text
            text={data.hotel_name}
            size='text-xl'
            font='font-medium'
            className='capitalize'
          />
          <span className='flex items-center gap-1'>
            <LocationOn fontSize='small' className='text-gray-500' />
            <Text
              text={data.location}
              font='font-medium'
              className='text-gray-500 capitalize'
            />
          </span>
          <div className='flex items-center flex-wrap gap-3'>
            {data.facilities?.map((facility, index) => {
              const key =
                typeof facility === 'string' ? facility : facility.facility;
              const Icon = FACILITY_ICON[key as FacilityKey];
              if (!Icon) return null;
              return (
                <span
                  key={index}
                  className='flex w-9 h-9 items-center justify-center bg-blue-50 text-blue-500 rounded-md'
                >
                  <Icon fontSize='small' />
                </span>
              );
            })}
          </div>
        </div>
        <div className='flex border-t-2 pt-5 mt-5 items-center w-full justify-between'>
          <Text size='text-xl' font='font-bold'>
            {`$${formattedPrice(Number(data.price))}`}{' '}
            <span className='text-sm text-gray-500 font-medium'> / night</span>
          </Text>

          <Button
            name='view details'
            bgColor='#2563eb'
            bgHover='#1d4ed8 '
            border='#2563eb'
            color='white'
            borderHover='trasparent'
            padding='8px 30px'
            onClick={() => navigate(`/hotels/view-hotel/${data.id}`)}
          />
        </div>
      </div>
    </div>
  );
};

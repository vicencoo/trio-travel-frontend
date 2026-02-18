import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarIcon from '@mui/icons-material/Star';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Wifi from '@mui/icons-material/Wifi';
import LocalDining from '@mui/icons-material/LocalDining';
import LocalParking from '@mui/icons-material/LocalParking';
import Spa from '@mui/icons-material/Spa';
import Pool from '@mui/icons-material/Pool';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import RoomService from '@mui/icons-material/RoomService';
import AcUnit from '@mui/icons-material/AcUnit';
import { HotelImages } from './HotelImages';
import { useViewHotel } from './useViewHotel';
import { useLocation, useNavigate } from 'react-router-dom';
import { Text } from '@/components/text';
import { Card } from '@/components/card';
import { Button } from '@/components/button';

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

export const ViewHotel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { hotel, currentImageIndex, next, prev, setCurrentImageIndex } =
    useViewHotel();

  const currentUrl = window.location.origin + location.pathname;

  const contactMessage = encodeURIComponent(
    `Përshëndetje! 
Jam i interesuar për rezervimin e këtij hoteli përmes agjencisë suaj.
Ju lutem më kontaktoni për më shumë detaje.
${currentUrl}`,
  );

  return (
    <div className='container flex flex-col pt-3 gap-10 pb-20'>
      <div className='flex flex-col gap-3'>
        <span
          className='flex items-center cursor-pointer w-max text-gray-500 hover:underline hover:scale-110 hover:text-black transition-all duration-300 will-change-transform'
          onClick={() => navigate('/hotels')}
        >
          <ArrowBackIcon fontSize='small' />
          <Text text={'Kthehu Tek Pronat'} font='font-medium' />
        </span>
        <HotelImages
          hotel={hotel}
          currentImageIndex={currentImageIndex}
          next={next}
          prev={prev}
          setCurrentIndex={setCurrentImageIndex}
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-7 gap-3'>
        <div className='md:col-span-5 flex flex-col gap-3'>
          <Card gap='gap-3'>
            <div className='flex items-center w-full justify-between gap-5'>
              <div className='flex flex-col gap-2'>
                <Text
                  text={hotel?.hotel_name}
                  size='text-2xl'
                  font='font-semibold font-serif'
                />
                <span className='flex items-center'>
                  <LocationOnOutlinedIcon
                    fontSize='small'
                    className='text-gray-500'
                  />
                  <Text
                    text={hotel?.location}
                    font='font-medium'
                    className='capitalize text-gray-500'
                  />
                </span>
                <div className='flex items-center gap-2'>
                  {hotel?.rating && (
                    <span className='flex items-center px-2 py-1 rounded-md bg-blue-500'>
                      <StarIcon className='text-white' fontSize='small' />
                      <Text
                        text={hotel.rating}
                        size='text-sm'
                        font='font-medium'
                        className='text-white'
                      />
                    </span>
                  )}
                  {hotel?.reviews && (
                    <span className='flex items-center '>
                      <ReviewsIcon fontSize='small' className='text-gray-500' />
                      <Text
                        text={`${hotel.reviews} reviews`}
                        size='text-sm'
                        font='font-medium'
                        className='text-gray-500'
                      />
                    </span>
                  )}
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <Text
                  text={'Duke filluar nga'}
                  size='text-sm'
                  font='font-medium'
                  className='text-gray-500 text-nowrap'
                />
                <Text
                  size='text-3xl'
                  font='font-semibold font-serif'
                  className='text-blue-500 text-nowrap'
                >
                  {hotel?.price}€{' '}
                  <span className='text-sm text-gray-500'>/nata</span>
                </Text>
              </div>
            </div>
          </Card>

          <Card>
            <Text
              text={'Përshkrimi i hotelit'}
              size='text-lg'
              font='font-semibold font-serif'
            />
            <Text
              text={hotel?.description}
              font='font-medium'
              className='text-gray-600 whitespace-pre-line'
            />
          </Card>
        </div>

        <div className='md:col-span-2 flex flex-col gap-3 w-full'>
          <Card>
            <Text
              text={'Shërbimet'}
              size='text-lg'
              font='font-semibold font-serif'
            />
            <div className='grid grid-cols-2 gap-3 select-none'>
              {/* {hotel?.facilities?.map((facility, index) => {
                const Icon = FACILITY_ICON[facility.facility];
                if (!Icon) return null; */}
              {hotel?.facilities?.map((facility, index) => {
                if (
                  !facility ||
                  typeof facility !== 'object' ||
                  !('facility' in facility)
                )
                  return null;
                const key = (facility as { facility: string }).facility;
                const Icon = FACILITY_ICON[key as keyof typeof FACILITY_ICON];
                if (!Icon) return null;
                return (
                  <span
                    key={index}
                    className='flex flex-col gap-3 items-center bg-blue-600 text-white py-3 md:py-2 rounded-lg'
                  >
                    <Icon fontSize='small' />
                    <Text
                      text={facility.facility}
                      size='text-lg'
                      font='font-semibold'
                      className='capitalize text-nowrap'
                    />
                  </span>
                );
              })}
            </div>
          </Card>

          <Card bgColor='bg-blue-50' className='text-center'>
            <div className='flex flex-col gap-3'>
              <Text
                text={'Gati për të rezervuar?'}
                size='text-xl'
                font='font-semibold font-serif'
              />
              <Text
                text={
                  'Kontaktoni agjencinë për disponueshmëri dhe cmime speciale'
                }
                font='font-medium'
                className='text-gray-500'
              />
            </div>
            <Button
              name='rezervoni tani'
              border='transparent'
              borderHover='transparent'
              color='white'
              bgColor='#2563eb'
              bgHover='#1d4ed8'
              onClick={() =>
                window.open(`https://wa.me/355696900916?text=${contactMessage}`)
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

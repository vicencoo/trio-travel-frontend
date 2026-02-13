import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Text } from '../../../components/text';
import { useViewProperty } from './useViewProperty';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/card';
import { PropertyStats } from './PropertyStats';
import { PropertyImages } from './PropertyImages';
import { formattedPrice } from '../../../utils/formattedPrice';
import { ContactAgency } from './ContactAgency';

export const ViewProperty = () => {
  const { property, index, next, prev, setIndex } = useViewProperty();
  const navigate = useNavigate();

  return (
    <div className='container flex flex-col pt-3 gap-10 pb-20'>
      <div className='flex flex-col gap-3'>
        <span
          className='flex items-center cursor-pointer w-max text-gray-500 hover:underline hover:scale-110 hover:text-black transition-all duration-300 will-change-transform'
          onClick={() => navigate('/properties')}
        >
          <ArrowBackIcon fontSize='small' />
          <Text text={'Kthehu Tek Pronat'} font='font-medium' />
        </span>

        <PropertyImages
          currentIndexImage={index}
          next={next}
          prev={prev}
          setCurrentIndex={setIndex}
          property={property}
        />
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
        <div className='flex flex-col gap-5 md:col-span-2'>
          <Card>
            <div className='flex flex-col gap-3 pb-5 border-b-2'>
              <div className='flex items-center w-full justify-between gap-3'>
                <Text
                  text={property.title}
                  size='text-xl md:text-2xl'
                  font='font-medium'
                  className='capitalize'
                />
                <Text
                  text={`${formattedPrice(Number(property.price))}€`}
                  size='text-2xl'
                  font='font-bold font-serif'
                  className='capitalize text-blue-500'
                />
              </div>
              <div className='flex md:flex-row flex-col m:items-center items-start w-full md:justify-between gap-1'>
                <span className='flex items-center'>
                  <LocationOnOutlinedIcon
                    fontSize='small'
                    className='text-gray-500'
                  />
                  <Text
                    text={`${property.city}, ${property.street}, ${property.area}`}
                    font='font-medium'
                    className='capitalize text-gray-500'
                  />
                </span>
                <Text
                  size='text-sm'
                  font='font-medium'
                  className='text-gray-500'
                >
                  Tipi i prones:{' '}
                  <span className='text-base capitalize'>
                    {property.property_type}
                  </span>
                </Text>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-2 gap-4'>
              {property?.bedrooms && (
                <PropertyStats
                  icon={<HotelOutlinedIcon fontSize='small' />}
                  value={property?.bedrooms}
                  label='dhomat e gjumit'
                />
              )}

              {property?.toilets && (
                <PropertyStats
                  icon={<BathtubOutlinedIcon fontSize='small' />}
                  value={property?.toilets}
                  label='tualetet'
                />
              )}

              {property?.space && (
                <PropertyStats
                  icon={<SquareFootOutlinedIcon fontSize='small' />}
                  value={property?.space}
                  label='meter katror'
                />
              )}
              {property?.build_year && (
                <PropertyStats
                  icon={<CalendarTodayOutlinedIcon fontSize='small' />}
                  value={property?.build_year}
                  label='viti ndertimit'
                />
              )}
            </div>
          </Card>

          <Card>
            <Text
              text={'Pershkrimi I Prones'}
              size='text-lg'
              font='font-medium'
            />

            <Text
              text={property.description}
              font='font-medium'
              className='text-gray-500 whitespace-pre-line'
            />
          </Card>
        </div>
        <div className='md:col-span-1'>
          <ContactAgency />
        </div>
      </div>
    </div>
  );
};

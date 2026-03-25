import { useNavigate } from 'react-router-dom';
import { useViewProperty } from './useViewProperty';
import { PropertyStats } from './PropertyStats';
import { ContactAgency } from './ContactAgency';
import { Text } from '@/components/text';
import { Card } from '@/components/card';
import { formattedPrice } from '@/utils/formattedPrice';
import { Spinner } from '@/components/spinner';
import {
  ArrowBack,
  BathtubOutlinedIcon,
  CalendarMonthOutlined,
  HotelOutlinedIcon,
  LocationOnOutlined,
  Share2,
  SquareFootOutlinedIcon,
} from '@/icons';
import { ViewImages } from '@/components/viewImages/ViewImages';
import { useDisclosure } from '@/hooks/useDisclosure';
import { ShareModal } from '@/components/shareModal/ShareModal';

export const ViewProperty = () => {
  const { property, isLoading } = useViewProperty();
  const { close, isOpen, open } = useDisclosure();
  const navigate = useNavigate();

  const shareUrl = window.location.href;

  if (isLoading)
    return (
      <div className='flex w-full min-h-screen items-center justify-center'>
        <Spinner />
      </div>
    );

  return (
    <div className='container flex flex-col pt-3 gap-10 pb-20'>
      <div className='flex flex-col gap-3'>
        <div className='flex w-full items-center justify-between'>
          <span
            className='flex items-center cursor-pointer w-max text-gray-500 hover:underline hover:scale-110 hover:text-black transition-all duration-300 will-change-transform'
            onClick={() => navigate('/pronat')}
          >
            <ArrowBack fontSize='small' />
            <Text text={'Kthehu Tek Pronat'} font='font-medium' />
          </span>

          <div
            className='flex items-center gap-1 hover:underline cursor-pointer hover:scale-105 transition-all duration-150 will-change-transform'
            onClick={open}
          >
            <Share2 size={18} />
            <Text
              text={'Shpërndaj'}
              font='font-medium'
              className='hidden md:flex'
            />
          </div>
        </div>

        {property && <ViewImages images={property.property_images} />}
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
        <div className='flex flex-col gap-5 md:col-span-2'>
          <Card>
            <div className='flex flex-col gap-3 pb-5 border-b-2'>
              <div className='flex items-center w-full justify-between gap-3'>
                <Text
                  text={property?.title}
                  size='text-xl md:text-2xl'
                  font='font-medium'
                  className='capitalize'
                />
                <div className='flex items-center gap-2'>
                  <Text
                    text={`${formattedPrice(Number(property?.price))}€`}
                    size='text-2xl'
                    font='font-bold font-serif'
                    className='capitalize text-blue-500'
                  />
                  <Share2 size={20} className='cursor-pointer' onClick={open} />
                </div>
              </div>

              <div className='flex md:flex-row flex-col m:items-center items-start w-full md:justify-between gap-1'>
                <span className='flex items-center'>
                  <LocationOnOutlined
                    fontSize='small'
                    className='text-gray-500'
                  />
                  <Text
                    text={`${property?.city}, ${property?.street}, ${property?.area}`}
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
                    {property?.property_type}
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
                  icon={<CalendarMonthOutlined fontSize='small' />}
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
              text={property?.description}
              font='font-medium'
              className='text-gray-500 whitespace-pre-line'
            />
          </Card>
        </div>
        <div className='md:col-span-1'>
          <ContactAgency />
        </div>

        <ShareModal isOpen={isOpen} close={close} path={shareUrl} />
      </div>
    </div>
  );
};

import { useViewPackage } from './useViewPackage';
import { useNavigate } from 'react-router-dom';
import { InfoItem } from './InfoItem';
import { Spinner } from '@/components/spinner';
import { Text } from '@/components/text';
import { Card } from '@/components/card';
import { formattedPrice } from '@/utils/formattedPrice';
import { Button } from '@/components/button';

import {
  AirlineSeatIndividualSuiteOutlined,
  ArrowBack,
  CalendarMonthOutlined,
  LocationOnOutlined,
  RestaurantMenuOutlined,
  Share2,
} from '@/icons';
import { ViewImages } from '@/components/viewImages/ViewImages';
import { useDisclosure } from '@/hooks/useDisclosure';
import { ShareModal } from '@/components/shareModal/ShareModal';

export const ViewPackage = () => {
  const navigate = useNavigate();
  const { packageData, isLoading } = useViewPackage();
  const { close, isOpen, open } = useDisclosure();

  if (isLoading)
    return (
      <div className='flex w-full min-h-screen items-center justify-center'>
        <Spinner />
      </div>
    );

  const currentUrl = window.location.href;

  const reserveMessage = encodeURIComponent(`
Përshëndetje! 

Jam i interesuar të rezervoj paketën turistike: "${packageData?.title}".
Ju lutem më dërgoni detajet për rezervimin dhe disponueshmërinë.

${currentUrl}

Faleminderit! 
`);

  const contactMessage = encodeURIComponent(`
Përshëndetje! 

Jam i interesuar për paketën turistike: "${packageData?.title}".
Ju lutem më dërgoni më shumë detaje për këtë ofertë.

${currentUrl}

Faleminderit! 
`);

  const formatMealPlan = (meal: string) => {
    const mealPlans: Record<string, string> = {
      allInclusive: 'All Inclusive',
      breakfastDinner: 'Mengjesi dhe Darka',
      breakfastOnly: 'Breakfast Only',
    };
    return mealPlans[meal] || meal;
  };

  const formatAccomodationPlan = (accomodation: string) => {
    const accomodationPlans: Record<string, string> = {
      threeStarHotel: 'Hotel Me 3 Yje',
      fourStarHotel: 'Hotel Me 4 Yje',
      fiveStarHotel: 'Hotel Me 5 Yje',
      resort: 'Resort',
    };
    return accomodationPlans[accomodation] || accomodation;
  };

  return (
    <div className='flex flex-col gap-10 container pt-3 pb-20'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center w-full justify-between'>
          <span
            className='flex items-center cursor-pointer w-max text-gray-500 hover:underline hover:scale-110 hover:text-black transition-all duration-300 will-change-transform'
            onClick={() => navigate('/paketa-turistike')}
          >
            <ArrowBack fontSize='small' />
            <Text text={'Kthehu Tek Paketat Turistike'} font='font-medium' />
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

        <div className='flex w-full justify-center'>
          {packageData && <ViewImages images={packageData.package_images} />}
        </div>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
        <div className='flex flex-col gap-6 md:col-span-2'>
          <Card>
            <Text
              text={packageData?.title}
              size='text-2xl md:text-4xl'
              font='font-serif font-bold'
              className='capitalize'
            />
            <span className='flex items-center gap-1'>
              <LocationOnOutlined fontSize='small' className='text-blue-600' />
              <Text
                text={packageData?.destination}
                size='text-lg'
                font='font-medium font-serif'
                className='tracking-wide capitalize'
              />
            </span>
          </Card>
          <Card>
            <Text
              text={'Përshkrimi'}
              size='text-2xl'
              font='font-serif font-semibold'
            />

            <Text
              text={packageData?.description}
              font='font-serif'
              className='text-slate-700 leading-relaxed whitespace-pre-line'
            />
          </Card>
        </div>

        <div className='md:col-span-1 flex flex-col gap-5'>
          <Card bgColor='bg-gradient-to-b from-slate-900 to-slate-800'>
            <div className='flex flex-col text-center gap-4 pb-6 border-b border-slate-500'>
              <div className='flex justify-between items-center'>
                <Text
                  text={'DUKE FILLUAR NGA'}
                  size='text-sm'
                  font='font-medium'
                  className='text-gray-300'
                />
                <Share2 onClick={open} className='cursor-pointer text-white' />
              </div>
              <div className='flex items-baseline gap-1'>
                <span className='text-4xl font-bold font-serif text-gray-100'>
                  €{formattedPrice(Number(packageData?.price))}
                </span>
                <span className='text-lg font-medium text-gray-300'>
                  /personi
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              {/* Kohezgjatja */}
              <InfoItem
                icon={
                  <CalendarMonthOutlined
                    className='text-blue-500'
                    fontSize='small'
                  />
                }
                label='Kohëzgjatja'
                value={`${packageData?.duration && packageData?.duration + 1} ditë / ${packageData?.duration} netë`}
              />

              {/* Akomodimi */}
              <InfoItem
                icon={
                  <AirlineSeatIndividualSuiteOutlined
                    className='text-blue-500'
                    fontSize='small'
                  />
                }
                label='Akomodimi'
                value={formatAccomodationPlan(packageData?.accomodation || '')}
              />

              {/* Included */}
              <InfoItem
                icon={
                  <RestaurantMenuOutlined
                    className='text-blue-500'
                    fontSize='small'
                  />
                }
                label='Vaktet e Përfshira'
                value={formatMealPlan(packageData?.meal_included || '')}
              />
            </div>
            <Button
              name='rezervo tani'
              bgHover='#2563eb'
              borderHover='#1d4ed8'
              onClick={() =>
                window.open(`https://wa.me/355696900916?text=${reserveMessage}`)
              }
            />
          </Card>

          {/* Kontact */}
          <Card bgColor='bg-blue-100' borderColor='border-blue-200'>
            <Text text={'Keni nevojë për ndihmë?'} font='font-medium' />
            <Text
              text={
                'Ne jemi këtu gjithmonë për tju ndihmuar. Mos nguroni të na kontaktoni.'
              }
              size='text-sm'
              font='font-medium'
              className='text-gray-600 '
            />
            <Button
              name='na kontaktoni'
              border='transparent'
              bgColor='#2563eb'
              bgHover='#1d4ed8'
              color='white'
              borderHover='#1d4ed8 '
              onClick={() =>
                window.open(`https://wa.me/355696900916?text=${contactMessage}`)
              }
            />
          </Card>
        </div>
      </div>
      <ShareModal isOpen={isOpen} close={close} path={currentUrl} />
    </div>
  );
};

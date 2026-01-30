import { Spinner } from '../../../components/spinner';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useViewPackage } from './useViewPackage';
import { PackageImages } from './PackageImages';
import { Text } from '../../../components/text';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/card';
import { Button } from '../../../components/button';
import { InfoItem } from './InfoItem';

export const ViewPackage = () => {
  const navigate = useNavigate();
  const {
    packageData,
    isLoading,
    currentImageIndex,
    next,
    prev,
    setCurrentImageIndex,
  } = useViewPackage();

  if (isLoading)
    return (
      <div className='flex w-full min-h-screen items-center justify-center'>
        <Spinner />
      </div>
    );

  const formatMealPlan = (meal: string) => {
    const mealPlans: Record<string, string> = {
      allInclusive: 'All Inclusive',
      breakfastDinner: 'Mengjesi dhe Darka',
      breakfastOnly: 'Breakfast Only',
      // fullBoard: 'Full Board',
    };
    return mealPlans[meal] || meal;
  };

  return (
    <div className='flex flex-col gap-10 container pt-3 pb-20'>
      <div className='flex flex-col gap-3'>
        <span
          className='flex items-center cursor-pointer w-max text-gray-500 hover:underline hover:scale-110 hover:text-black transition-all duration-300 will-change-transform'
          onClick={() => navigate('/packages')}
        >
          <ArrowBackIcon fontSize='small' />
          <Text text={'Kthehu Tek Paketat Turistike'} font='font-medium' />
        </span>
        <div className='flex w-full justify-center'>
          <PackageImages
            packageData={packageData}
            next={next}
            prev={prev}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
        <div className='flex flex-col gap-6 md:col-span-2'>
          <Card>
            <Text
              text={packageData.title}
              size='text-4xl md:text-5xl'
              font='font-serif font-bold'
              className='capitalize'
            />
            <span className='flex items-center gap-1'>
              <LocationOnOutlinedIcon
                fontSize='small'
                className='text-blue-600'
              />
              <Text
                text={packageData.destination}
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
              text={packageData.description}
              font='font-serif'
              className='text-slate-700 leading-relaxed whitespace-pre-line'
            />
          </Card>
        </div>

        <div className='md:col-span-1 flex flex-col gap-5'>
          <Card bgColor='bg-gradient-to-b from-slate-900 to-slate-800'>
            <div className='flex flex-col text-center gap-4 pb-6 border-b border-slate-500'>
              <Text
                text={'DUKE FILLUAR NGA'}
                size='text-sm'
                font='font-medium'
                className='text-gray-300'
              />
              <div className='flex items-baseline justify-center gap-1'>
                <span className='text-4xl font-bold text-gray-100'>
                  €{packageData.price}
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
                  <CalendarMonthOutlinedIcon
                    className='text-blue-500'
                    fontSize='small'
                  />
                }
                label='Kohëzgjatja'
                value={`${packageData?.duration || 0 + 1} ditë / ${packageData?.duration} netë`}
              />

              {/* Akomodimi */}
              <InfoItem
                icon={
                  <AirlineSeatIndividualSuiteOutlinedIcon
                    className='text-blue-500'
                    fontSize='small'
                  />
                }
                label='Akomodimi'
                value={packageData.accomodation}
              />

              {/* Included */}
              <InfoItem
                icon={
                  <RestaurantMenuOutlinedIcon
                    className='text-blue-500'
                    fontSize='small'
                  />
                }
                label='Vaktet e Përfshira'
                value={formatMealPlan(packageData.mealIncluded || '')}
              />
            </div>
            <Button
              name='rezervo tani'
              bgHover='#2563eb'
              borderHover='#1d4ed8'
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
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

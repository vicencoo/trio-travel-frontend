import { useNavigate } from 'react-router-dom';
import { Image } from '../image';
import { Text } from '../text';
import type { PackageCardProps } from './types';
import { formattedPrice } from '@/utils/formattedPrice';
import { createSlug } from '@/utils/createSlug';

export const PackageCard = ({ data, index }: PackageCardProps) => {
  const navigate = useNavigate();
  const firstImage = data?.package_images?.[0];
  const image =
    typeof firstImage === 'object' && 'image' in firstImage
      ? firstImage.image
      : '';

  const formatAccomodationPlan = (accomodation: string) => {
    const accomodationPlans: Record<string, string> = {
      threeStarHotel: 'Hotel Me 3 Yje',
      fourStarHotel: 'Hotel Me 4 Yje',
      fiveStarHotel: 'Hotel Me 5 Yje',
      resort: 'Resort',
    };
    return accomodationPlans[accomodation] || accomodation;
  };

  const slug = createSlug(data.title, data.id);

  const handleNavigate = () => navigate(`/paketa-turistike/${slug}`);
  return (
    <div
      className='flex flex-col border h-[440px] rounded-3xl overflow-hidden bg-white relative shadow-sm cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 will-change-transform group select-none'
      onClick={handleNavigate}
    >
      <Image
        src={image}
        alt={data.title}
        loading={index < 3 ? 'eager' : 'lazy'}
        priority={index < 3 ? 'high' : 'auto'}
        className='h-[260px] object-cover group-hover:scale-105 transition-all duration-300'
      />
      <div className='absolute bottom-0 w-full bg-white rounded-t-3xl px-5 py-4 flex flex-col justify-between overflow-hidden h-[210px]'>
        <Text
          text={data.title}
          size='text-lg'
          font='font-bold font-serig'
          className='capitalize'
        />
        <div className='flex flex-col gap-3'>
          <div className='flex w-full items-center justify-between'>
            <Text
              text={data.destination}
              size='text-sm'
              font='font-medium'
              className='text-gray-500 capitalize'
            />

            <Text
              text={formatAccomodationPlan(data.accomodation || '')}
              size='text-xs'
              font='font-bold'
              className='text-blue-800 px-3 py-1 bg-blue-100 w-max uppercase rounded-2xl'
            />
          </div>
          <Text
            text={`${data?.duration} netë`}
            size='text-sm'
            font='font-medium'
            className='text-gray-500'
          />

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
              <Text
                text={'Fillon Nga'}
                size='text-sm'
                font='font-medium font-serif'
                className='text-gray-500'
              />
              <Text
                text={`${formattedPrice(Number(data.price))}€`}
                size='text-lg'
                font='font-semibold font-serif'
                className='text-blue-600'
              />
              <Text
                text={'/ per person'}
                size='text-xs'
                font='font-serif'
                className='text-gray-500'
              />
            </div>
            <Text
              text={'Shiko Paketën'}
              className='px-3 py-2 bg-gray-200 rounded-full border border-transparent hover:border hover:border-black'
              size='text-xs'
              font='font-semibold'
              onClick={handleNavigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

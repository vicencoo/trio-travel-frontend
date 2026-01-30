import { useNavigate } from 'react-router-dom';
import { Image } from '../image';
import { Text } from '../text';
import type { PackageCardProps } from './types';

export const PackageCard = ({ data }: PackageCardProps) => {
  const navigate = useNavigate();
  const firstImage = data?.packageImages?.[0];
  const image =
    typeof firstImage === 'object' && 'image' in firstImage
      ? firstImage.image
      : '';
  return (
    <div
      className='flex flex-col border h-[430px] rounded-3xl overflow-hidden bg-white relative shadow-sm cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 will-change-transform group'
      onClick={() => navigate(`/packages/view-package/${data._id}`)}
    >
      <Image
        src={image}
        className='h-[270px] object-cover group-hover:scale-105 transition-all duration-300'
      />
      <div className='absolute bottom-0 w-full bg-white rounded-t-3xl px-7 py-4 flex flex-col justify-between overflow-hidden h-[200px]'>
        <Text
          text={data.title}
          size='text-xl'
          font='font-semibold'
          className='capitalize'
        />
        <div className='flex items-center justify-between'>
          <Text
            text={data.destination}
            size='text-sm'
            font='font-medium'
            className='text-gray-500 capitalize'
          />
          <Text
            text={`${data?.duration} nights`}
            size='text-sm'
            font='font-medium'
            className='text-gray-500'
          />
        </div>
        <Text
          text={data.accomodation}
          size='text-xs'
          font='font-bold'
          className='text-blue-600 px-3 py-1 bg-blue-100 w-max uppercase rounded-2xl'
        />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <Text
              text={'From'}
              size='text-sm'
              font='font-serif'
              className='text-gray-500'
            />
            <Text
              text={`${data?.price}€`}
              size='text-lg'
              font='font-medium'
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
            text={'View Package'}
            className='px-5 py-2 bg-gray-200 rounded-full border border-transparent hover:border hover:border-black'
            size='text-xs'
            font='font-medium'
            onClick={() => navigate(`/packages/view-package/${data._id}`)}
          />
        </div>
      </div>
    </div>
  );
};

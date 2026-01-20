import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';

type DestCardProps = {
  image: string;
  city: string;
  country: string;
  tagline?: string;
};

export const DestCard = ({ image, city, country, tagline }: DestCardProps) => {
  return (
    <div
      className='flex flex-col bg-white overflow-hidden rounded-2xl shadow-sm 
    h-[320px] relative hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform cursor-pointer'
    >
      <Image img={image} className=' h-[220px] object-cover' />
      <div className='absolute bottom-0 h-[130px] bg-white rounded-t-2xl flex w-full px-6 py-4 flex-col justify-between'>
        <Text
          text={`${city}, ${country}`}
          size='text-lg'
          font='font-semibold'
        />
        <Text
          text={tagline}
          size='text-sm'
          font='font-semibold'
          className='text-gray-400'
        />
        <span className='flex items-center border-b border-emerald-500 w-fit gap-1 cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'>
          <Text
            text={'View Details'}
            font='font-medium'
            className='text-emerald-500'
          />
          <ArrowRightAltIcon className='text-emerald-500' />
        </span>
      </div>
    </div>
  );
};

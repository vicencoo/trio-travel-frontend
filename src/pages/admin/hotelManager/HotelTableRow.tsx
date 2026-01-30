import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import type { HotelTableRowProps } from './types';

export const HotelTableRow = ({
  data,
  handleEditHotel,
  handleDeleteHotel,
}: HotelTableRowProps) => {
  const firstImage = data.hotelImages?.[0];
  const image =
    typeof firstImage === 'object' && 'hotelImage' in firstImage
      ? firstImage.hotelImage
      : 'null';

  return (
    <div className='grid grid-cols-8 md:grid-cols-7 items-center px-4 py-1 border-b border-gray-300 last:border-b-0'>
      <Image
        src={image}
        className='col-span-1 max-w-14 min-w-14 h-14 object-cover rounded-lg'
      />
      <Text
        text={data.hotelName}
        size='text-sm'
        font='font-medium'
        className='md:col-span-3 col-span-4 capitalize px-5'
      />
      <Text
        text={data.location}
        size='text-sm'
        font='font-medium'
        className='hidden md:flex col-span-1 capitalize'
      />
      <Text
        text={`${data.price}€`}
        font='font-bold font-serif'
        className='md:col-span-1 col-span-2 text-violet-600'
      />
      <div className='col-span-1 flex w-full justify-end md:gap-5 gap-3 '>
        <EditOutlinedIcon
          className='text-blue-400 hover:text-blue-600 cursor-pointer'
          onClick={() => handleEditHotel(data)}
        />
        <DeleteOutlinedIcon
          className='text-red-400 hover:text-red-500 cursor-pointer'
          onClick={handleDeleteHotel}
        />
      </div>
    </div>
  );
};

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import type { DestinationTableRowProps } from './types';

export const DestinationTableRow = ({
  data,
  handleDeleteHotel,
  handleEditDestination,
}: DestinationTableRowProps) => {
  const firstImage = data.destination_images?.[0];
  const image =
    typeof firstImage === 'object' && 'destination_image' in firstImage
      ? firstImage.destination_image
      : 'null';

  return (
    <div className='grid grid-cols-5 items-center px-4 py-1 border-b border-gray-300 last:border-b-0'>
      <Image
        src={image}
        className='col-span-2 max-w-14 min-w-14 h-14 object-cover rounded-lg'
      />
      <Text
        text={data.city}
        size='text-sm'
        font='font-medium'
        className='col-span-1 capitalize'
      />
      <Text
        text={data.country}
        size='text-sm'
        font='font-medium'
        className='col-span-1 capitalize'
      />

      <div className='col-span-1 flex w-full justify-end md:gap-5 gap-3 '>
        <EditOutlinedIcon
          className='text-blue-400 hover:text-blue-600 cursor-pointer'
          onClick={() => handleEditDestination(data)}
        />
        <DeleteOutlinedIcon
          className='text-red-400 hover:text-red-500 cursor-pointer'
          onClick={handleDeleteHotel}
        />
      </div>
    </div>
  );
};

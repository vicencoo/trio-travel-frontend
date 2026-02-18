import { Image } from '@/components/image';
import type { HotelTableRowProps } from './types';
import { Text } from '@/components/text';
import { formattedPrice } from '@/utils/formattedPrice';
import { ActionMenu } from '@/components/actionMenu';

export const HotelTableRow = ({
  data,
  handleEditHotel,
  handleDeleteHotel,
}: HotelTableRowProps) => {
  const firstImage = data.hotel_images?.[0];
  const image =
    typeof firstImage === 'object' && 'hotel_image' in firstImage
      ? firstImage.hotel_image
      : 'null';

  return (
    <div className='grid grid-cols-8 md:grid-cols-7 items-center px-4 py-1 border-b border-gray-300 last:border-b-0'>
      <Image
        src={image}
        className='col-span-1 max-w-14 min-w-14 h-14 object-cover rounded-lg'
      />
      <Text
        text={data.hotel_name}
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
        text={`${formattedPrice(Number(data.price))}€`}
        font='font-bold font-serif'
        className='md:col-span-1 col-span-2 text-violet-600'
      />

      <ActionMenu
        enableDelete
        enableEdit
        onDelete={handleDeleteHotel}
        onEdit={() => handleEditHotel(data)}
      />
    </div>
  );
};

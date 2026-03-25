import { Image } from '@/components/image';
import type { DestinationTableRowProps } from './types';
import { Text } from '@/components/text';
import { ActionMenu } from '@/components/actionMenu';

export const DestinationTableRow = ({
  data,
  handleDeleteDestination,
  handleEditDestination,
}: DestinationTableRowProps) => {
  const firstImage = data.destination_images?.[0];
  const image =
    typeof firstImage === 'object' && 'destination_image' in firstImage
      ? firstImage.destination_image
      : 'null';

  return (
    <div className='grid md:grid-cols-5 grid-cols-6 items-center px-4 py-1 border-b border-gray-300 dark:border-slate-700 last:border-b-0'>
      <Image
        src={image}
        alt={`${data.country} ${data.city}`}
        className='md:col-span-2 col-span-1 max-w-14 min-w-14 h-14 object-cover rounded-lg'
      />
      <Text
        text={data.city}
        size='text-sm'
        font='font-medium'
        className='md:col-span-1 col-span-2 md:pl-0 pl-3 capitalize text-slate-900 dark:text-slate-300'
      />
      <Text
        text={data.country}
        size='text-sm'
        font='font-medium'
        className='md:col-span-1 col-span-2 capitalize text-slate-900 dark:text-slate-300'
      />

      <ActionMenu
        enableEdit
        enableDelete
        onDelete={handleDeleteDestination}
        onEdit={() => handleEditDestination(data)}
      />
    </div>
  );
};

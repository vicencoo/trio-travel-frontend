import { ActionMenu } from '@/components/actionMenu';
import { Image } from '@/components/image';
import { Text } from '@/components/text';
import { formattedPrice } from '@/utils/formattedPrice';
import { useNavigate } from 'react-router-dom';
import type { PropertyItemProps } from './types';

export const PropertyTableRow = ({
  property,
  handleDelete,
  renewProperty,
  publishOrDraft,
}: PropertyItemProps) => {
  const navigate = useNavigate();

  const firstImage = property.property_images?.[0];
  const image =
    typeof firstImage === 'object' && 'property_image' in firstImage
      ? firstImage.property_image
      : '';
  return (
    <div className='grid grid-cols-8 items-center px-4 py-1 border-b border-gray-300 last:border-b-0 gap-1 '>
      <div className='md:col-span-3 col-span-4 flex items-center gap-2 overflow-hidden'>
        <Image
          src={image}
          className='max-w-14 min-w-14 max-h-14 min-h-14 rounded-lg object-cover'
        />
        <Text
          text={property.title}
          size='md:text-sm text-xs'
          font='font-semibold font-serif'
          className='capitalize truncate w-2/3'
        />
      </div>
      <Text
        text={property.property_type}
        size='text-sm'
        font='font-medium font-serif'
        className='capitalize col-span-1 hidden md:flex'
      />
      <Text
        text={`${formattedPrice(Number(property.price))}€`}
        size='md:text-base text-sm'
        font='font-semibold font-serif'
        className='capitalize md:col-span-1 col-span-2 text-stone-700'
      />
      <Text
        text={`${property.city}, albania`}
        size='text-sm'
        font='font-medium'
        className='capitalize col-span-1 hidden md:flex'
      />

      <span
        className={`flex w-max px-2 py-1 text-white shadow-sm ${property.status === 'active' ? 'bg-green-500 shadow-green-400' : 'bg-red-500 shadow-red-400'} rounded-xl`}
      >
        <Text
          text={property.status}
          size='text-sm'
          font='font-medium'
          className={`capitalize col-span-1 flex`}
        />
      </span>
      <ActionMenu
        enableEdit
        enableDelete
        onDelete={() => property.id && handleDelete(property.id)}
        onEdit={() => navigate(`/admin/editProperty/${property.id}`)}
        enableRenew
        onRenew={() => property.id && renewProperty(property.id)}
        enableStatus
        statusText={property.status === 'active' ? 'Draft' : 'Publiko'}
        handleStatus={() => property.id && publishOrDraft(property.id)}
      />
    </div>
  );
};

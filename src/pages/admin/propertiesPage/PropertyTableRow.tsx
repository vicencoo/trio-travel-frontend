import { ActionMenu } from '@/components/actionMenu';
import { Image } from '@/components/image';
import { Text } from '@/components/text';
import { formattedPrice } from '@/utils/formattedPrice';
import { useNavigate } from 'react-router-dom';
import type { PropertyItemProps } from './types';

const availabilityConfig = {
  available: {
    label: 'E LIRË',
    wrapper:
      'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  sold: {
    label: 'E SHITUR',
    wrapper:
      'bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/20',
    dot: 'bg-red-500',
  },
  rented: {
    label: 'E DHËNË ME QIRA',
    wrapper:
      'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20',
    dot: 'bg-blue-500',
  },
};

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

  const config =
    property.availability && availabilityConfig[property.availability];
  return (
    <div className='grid md:grid-cols-9 grid-cols-8 items-center px-4 py-1 border-b border-gray-300 dark:border-slate-700 last:border-b-0 gap-1 '>
      <div className='md:col-span-3 col-span-4 flex items-center gap-2 overflow-hidden'>
        <Image
          src={image}
          alt={property.title}
          className='max-w-14 min-w-14 max-h-14 min-h-14 rounded-lg object-cover'
        />
        <Text
          text={property.title}
          size='md:text-sm text-xs'
          font='font-semibold font-serif'
          className='capitalize truncate w-2/3 text-slate-900 dark:text-slate-300'
        />
      </div>
      <Text
        text={property.property_type}
        size='text-sm'
        font='font-medium font-serif'
        className='capitalize col-span-1 hidden md:flex text-gray-900 dark:text-slate-300'
      />
      <Text
        text={`${formattedPrice(Number(property.price))}€`}
        size='md:text-base text-sm'
        font='font-semibold font-serif'
        className='capitalize md:col-span-1 col-span-2 text-stone-700 dark:text-slate-400'
      />
      <Text
        text={`${property.city}, albania`}
        size='text-sm'
        font='font-medium'
        className='capitalize col-span-1 hidden md:flex text-slate-800 dark:text-slate-500'
      />

      <span
        className={`col-span-1 flex w-max px-2 py-1 text-white shadow-sm ${property.status === 'active' ? 'bg-green-500 shadow-green-400' : 'bg-red-500 shadow-red-400'} rounded-xl`}
      >
        <Text
          text={property.status}
          size='text-sm'
          font='font-medium'
          className={`capitalize`}
        />
      </span>

      <span
        className={`hidden col-span-1 md:inline-flex w-max items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase whitespace-nowrap ${config?.wrapper}`}
      >
        <span className={`h-2 w-2 rounded-full ${config?.dot}`} />
        {config?.label}
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
        disableRenew={property.status === 'draft'}
      />
    </div>
  );
};

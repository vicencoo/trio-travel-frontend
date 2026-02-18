import { Image } from '@/components/image';
import type { PackageItemProps } from './types';
import { Text } from '@/components/text';
import { formattedPrice } from '@/utils/formattedPrice';
import { ActionMenu } from '@/components/actionMenu';

export const PackageTableRow = ({
  packageItem,
  handleDeletePackage,
  handleEditPackage,
  handleRenew,
}: PackageItemProps) => {
  const firstImage = packageItem.package_images?.[0];
  const image =
    typeof firstImage === 'object' && 'image' in firstImage
      ? firstImage.image
      : '';
  return (
    <div className='grid md:grid-cols-8 grid-cols-7 items-center px-4 py-1 border-b border-gray-300 last:border-b-0'>
      <Image
        src={image}
        className='col-span-1 max-w-14 min-w-14 h-14 object-cover rounded-lg'
      />
      <Text
        text={packageItem.title}
        size='md:text-sm text-xs'
        font='font-medium font-serif'
        className='col-span-3 capitalize px-5'
      />
      <Text
        text={packageItem.destination}
        size='text-sm'
        font='font-medium'
        className='hidden md:flex col-span-2 capitalize'
      />
      <Text
        text={`${formattedPrice(Number(packageItem.price))}€`}
        font='font-bold font-serif'
        className='md:col-span-1 col-span-2 text-violet-600'
      />
      <ActionMenu
        enableDelete
        enableEdit
        onEdit={() => handleEditPackage(packageItem)}
        onDelete={() => packageItem.id && handleDeletePackage(packageItem.id)}
        enableRenew
        onRenew={() => packageItem.id && handleRenew(packageItem.id)}
      />
    </div>
  );
};

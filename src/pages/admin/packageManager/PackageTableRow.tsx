import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import { formattedPrice } from '../../../utils/formattedPrice';
import type { PackageItemProps } from './types';

export const PackageTableRow = ({
  packageItem,
  handleDeletePackage,
  handleEditPackage,
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
      <div className='flex items-center gap-5 col-span-1 w-full justify-end'>
        <EditOutlinedIcon
          onClick={() => handleEditPackage(packageItem)}
          className='text-blue-400 hover:text-blue-600 cursor-pointer'
        />
        <DeleteOutlinedIcon
          onClick={() => packageItem.id && handleDeletePackage(packageItem.id)}
          className='text-red-400 hover:text-red-500 cursor-pointer'
        />
      </div>
    </div>
  );
};

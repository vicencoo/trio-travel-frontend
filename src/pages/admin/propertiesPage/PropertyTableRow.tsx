import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import type { Property } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { formattedPrice } from '../../../utils/formattedPrice';

type PropertyItemProps = {
  property: Property;
  handleDelete: (id: string) => void;
};

export const PropertyTableRow = ({
  property,
  handleDelete,
}: PropertyItemProps) => {
  const navigate = useNavigate();
  const firstImage = property.property_images?.[0];
  const image =
    typeof firstImage === 'object' && 'property_image' in firstImage
      ? firstImage.property_image
      : '';
  return (
    <div className='grid grid-cols-7 items-center px-4 py-1 border-b border-gray-300 last:border-b-0 gap-1'>
      <div className='md:col-span-3 col-span-4 flex items-center gap-2 overflow-hidden'>
        <Image
          src={image}
          className='max-w-14 min-w-14 max-h-14 min-h-14 rounded-lg object-cover'
        />
        <Text
          text={property.title}
          size='md:text-sm text-xs'
          font='font-semibold font-serif'
          className='capitalize'
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
      <div className='col-span-1 flex items-center justify-end gap-5'>
        <ModeEditOutlineOutlinedIcon
          className='text-blue-400 hover:text-blue-600 cursor-pointer'
          onClick={() => navigate(`/admin/editProperty/${property.id}`)}
        />
        <DeleteOutlinedIcon
          className='text-red-400 hover:text-red-600 cursor-pointer'
          onClick={() => property.id && handleDelete(property.id)}
        />
      </div>
    </div>
  );
};

import { Image } from '../image';
import { Text } from '../text';

type NoPropertyFoundProps = {
  label?: string;
};

export const NoPropertyFound = ({ label }: NoPropertyFoundProps) => {
  return (
    <div className='flex flex-col items-center justify-center py-10 md:py-20'>
      <Image img='/images/no-property.png' />
      <Text
        text={label}
        size='text-xl'
        font='font-medium'
        className='capitalize text-gray-600'
      />
    </div>
  );
};

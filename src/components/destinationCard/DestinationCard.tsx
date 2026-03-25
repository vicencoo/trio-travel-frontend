import { ArrowRightAlt } from '@/icons';
import { Image } from '../image';
import { Text } from '../text';
import type { DestCardProps } from './types';

export const DestinationCard = ({ destination, index }: DestCardProps) => {
  const firstImage = destination.destination_images?.[0];
  const img =
    typeof firstImage === 'object' && 'destination_image' in firstImage
      ? firstImage.destination_image
      : '';

  const city = destination.city
    ? destination.city.charAt(0).toUpperCase() +
      destination.city.slice(1).toLowerCase()
    : '';
  const country = destination.country
    ? destination.country.charAt(0).toUpperCase() +
      destination.country.slice(1).toLowerCase()
    : '';
  const message = encodeURIComponent(
    `Përshëndetje,
Jam i interesuar për një udhëtim në ${city}, ${country}.
Ju lutem, a mund të më dërgoni informacion të detajuar mbi ofertat, çmimet dhe datat e disponueshme?
Faleminderit.`,
  );
  return (
    <div
      className='flex flex-col bg-white overflow-hidden rounded-2xl shadow-sm 
    md:h-[320px] h-[355px] relative hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform'
    >
      <Image
        src={img}
        alt={destination.country}
        loading={index < 4 ? 'eager' : 'lazy'}
        priority={index < 4 ? 'high' : 'auto'}
        className='h-[220px] object-cover'
      />
      <div className='absolute bottom-0 h-[135px] md:h-[140px] bg-white rounded-t-2xl flex w-full p-3 flex-col justify-between'>
        <div className='flex flex-col gap-2'>
          <Text
            text={destination.slogan}
            size='text-sm'
            font='font-semibold'
            className='text-gray-600'
          />
          <Text
            text={`${destination.city}, ${destination.country}`}
            size='text-base'
            font='font-semibold font-serif'
            className='capitalize'
          />
        </div>
        {/* {destination.destination_types && (
          <div className='flex items-center gap-2 flex-wrap'>
            {destination.destination_types.map((type, index) => (
              <span
                className='text-xs font-medium capitalize px-2 py-1 bg-slate-100 text-slate-700 rounded-md'
                key={index}
              >
                {type.type}
              </span>
            ))}
          </div>
        )} */}

        <span
          className='flex items-center border-b border-emerald-500 w-fit gap-1 cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'
          onClick={() =>
            window.open(`https://wa.me/355696900916?text=${message}`)
          }
        >
          <Text
            text={'Kontakto Agjencinë'}
            font='font-medium'
            className='text-emerald-500'
          />
          <ArrowRightAlt className='text-emerald-500' />
        </span>
      </div>
    </div>
  );
};

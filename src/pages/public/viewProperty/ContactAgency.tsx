import RealEstateAgentOutlinedIcon from '@mui/icons-material/RealEstateAgentOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useLocation } from 'react-router-dom';
import { Card } from '@/components/card';
import { IconBox } from '@/components/iconBox';
import { Text } from '@/components/text';
import { Button } from '@/components/button';

export const ContactAgency = () => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const contactMessage = encodeURIComponent(
    `Përshendetje, interesohem për këtë pronën e publikuar në Trio Travel Agency:
${currentUrl}
    `,
  );
  return (
    <Card bgColor='bg-blue-50'>
      <div className='flex items-center gap-3'>
        <IconBox
          bgColor='bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600'
          size='min-w-14 max-w-14 h-14'
          icon={<RealEstateAgentOutlinedIcon className='text-white' />}
        />

        <div className='flex flex-col gap-1'>
          <Text
            text={'Të interesuar për këtë pronë?'}
            size='md:text-base text-lg'
            font='font-semibold font-serif'
            className='text-gray-800'
          />
          <Text
            text={'Kontaktoni agjencinë tonë për më shumë informacion'}
            size='text-sm'
            font='font-medium'
            className='text-gray-500'
          />
        </div>
      </div>
      <div
        className='flex items-center cursor-pointer gap-5 w-full border border-blue-200 bg-white/80 px-4 py-3 rounded-lg hover:scale-105 hover:border-blue-400 transition-all duration-300 will-change-transform'
        onClick={() => (window.location.href = 'tel:+355696900916')}
      >
        <IconBox
          bgColor='bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600'
          size='w-12 h-12'
          icon={<LocalPhoneOutlinedIcon className='text-white' />}
        />
        <div className='flex flex-col gap-1'>
          <Text
            text={'TELEFONO TANI'}
            size='text-sm'
            className='text-gray-500'
          />
          <Text text={'+355 69 690 0916'} font='font-medium' />
        </div>
      </div>
      <div
        className='flex items-center gap-5 cursor-pointer w-full border border-blue-200 bg-white/80 px-4 py-3 rounded-lg hover:scale-105 hover:border-blue-400 transition-all duration-300 will-change-transform'
        onClick={() => window.open('https://instagram.com/trio_travel_immo_/')}
      >
        <IconBox
          bgColor='bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600'
          size='w-12 h-12'
          icon={<InstagramIcon className='text-white' />}
        />
        <div className='flex flex-col gap-1'>
          <Text
            text={'SHIKO INSTAGRAMIN'}
            size='text-sm'
            className='text-gray-500'
          />
          <Text text={'trio_travel_immo_'} font='font-medium' />
        </div>
      </div>
      <Button
        name='kontakto agjencinë'
        padding='17px'
        endIcon={<ArrowRightAltIcon />}
        border='transparent'
        borderHover='transparent'
        color='white'
        bgColor='#6366f1'
        bgHover='#4f46e5'
        onClick={() =>
          window.open(`https://wa.me/355696900916?text=${contactMessage}`)
        }
      />

      <span className='flex w-full justify-center items-center gap-2 border-t pt-4 border-gray-300'>
        <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse' />
        <Text
          text={'Në dispozicion cdo ditë , 9:00 - 21:00'}
          size='text-sm'
          font='font-medium'
          className='text-gray-500'
        />
      </span>
    </Card>
  );
};

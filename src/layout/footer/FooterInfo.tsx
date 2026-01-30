import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Icon } from '../../components/icon';
import { Text } from '../../components/text';
import { Image } from '../../components/image';
import { useNavigate } from 'react-router-dom';

const FOOTER_INFO = [
  {
    id: 1,
    icon: <LocationOnIcon fontSize='small' />,
    text: 'Kryqezimi Rinia ,Vlore, Albania',
  },
  {
    id: 2,
    icon: <AccessTimeIcon fontSize='small' />,
    text: 'Hours: 8:00-13:00 15:00-20:00 Monday-Saturday',
  },
  {
    id: 3,
    icon: <EmailIcon fontSize='small' />,
    text: 'triotravelagency@gmail.com',
  },
  {
    id: 4,
    icon: <LocalPhoneIcon fontSize='small' />,
    text: '+355 69 690 0916',
  },
];

const CONTACT = [
  {
    id: 1,
    icon: <InstagramIcon fontSize='small' />,
    url: 'https://instagram.com/trio_travel_immo_/',
    color: 'text-purple-700',
  },
  {
    id: 2,
    icon: <FacebookIcon fontSize='small' />,
    url: 'https://facebook.com/Agjensi Trio',
    color: 'text-blue-500',
  },
  { id: 3, icon: <TwitterIcon fontSize='small' />, color: 'text-blue-700' },
  {
    id: 4,
    icon: <WhatsAppIcon fontSize='small' />,
    url: 'https://wa.me/355696900916',
    color: 'text-green-600',
  },
];

export const FooterInfo = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-4'>
      <Image
        img='/images/TrioTravel.png'
        className='w-[200px] cursor-pointer hover:scale-110 transition-all duration-300 will-change-transform'
        onClick={() => navigate('/')}
      />
      <div className='flex flex-col gap-2'>
        {FOOTER_INFO.map((item) => (
          <span key={item.id} className='flex items-center gap-1'>
            <Icon icon={item.icon} className='text-black/70' />
            <Text
              text={item.text}
              className='text-gray-500'
              size='text-sm'
              font='font-medium'
            />
          </span>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        <Text text={'Follow us'} font='font-bold' />
        <div className='flex gap-2'>
          {CONTACT.map((contact) => (
            <div
              className={`w-10 h-10 border border-gray-300 bg-gray-100 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-all duration-300 will-change-transform ${contact.color}`}
              key={contact.id}
              onClick={() => window.open(contact.url)}
            >
              <Icon icon={contact.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

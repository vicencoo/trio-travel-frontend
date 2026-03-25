import {
  Bird,
  EmailIcon,
  FacebookIcon,
  LinkedIn,
  MessageCircleMore,
  SmsOutlined,
  Telegram,
  WhatsAppIcon,
} from '@/icons';

export const socials = [
  {
    label: 'WhatsApp',
    icon: WhatsAppIcon,
    style: 'bg-green-500 text-white',
    path: (text: string, url: string) =>
      `https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`,
  },
  {
    label: 'Messenger',
    icon: FacebookIcon,
    style: 'bg-[#0084FF] text-white',
    path: (_: string, url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    label: 'Telegram',
    icon: Telegram,
    style: 'bg-[#229ED9] text-white',
    path: (text: string, url: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  {
    label: 'LinkedIn',
    icon: LinkedIn,
    style: 'bg-[#0A66C2] text-white',
    path: (_: string, url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    label: 'SMS',
    icon: SmsOutlined,
    style: 'bg-green-600 text-white',
    path: (text: string, url: string) => {
      const message = `${text} ${url}`;
      return `sms:?&body=${encodeURIComponent(message)}`;
    },
  },
  {
    label: 'Email',
    icon: EmailIcon,
    style: 'bg-gray-500 text-white',
    path: (text: string, url: string) =>
      `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`,
  },
  {
    label: 'X',
    icon: Bird,
    style: 'bg-black text-white',
    path: (text: string, url: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
  },

  {
    label: 'Viber',
    icon: MessageCircleMore,
    style: 'bg-purple-600 text-white',
    path: (text: string, url: string) =>
      `https://invite.viber.com/?g2A=${encodeURIComponent(`${text} ${url}`)}`,
  },
];

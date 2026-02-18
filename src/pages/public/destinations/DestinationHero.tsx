import { Button } from '@/components/button';
import { Text } from '@/components/text';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const message = encodeURIComponent(`
Përshëndetje
Jam i interesuar për një udhëtim të personalizuar.

Do të doja një ofertë sipas këtyre preferencave:
📍 Destinacioni:
📅 Data e nisjes:
⏳ Kohëzgjatja:
💰 Buxheti:
🧭 Stili i udhëtimit:

Faleminderit!
`);

export const DestinationHero = () => {
  return (
    <div
      className='relative flex flex-col items-center justify-center overflow-hidden  py-24'
      style={{ background: '#0f172a' }}
    >
      {/* large emerald glow — top right */}
      <div
        className='pointer-events-none absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full opacity-20'
        style={{
          background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
        }}
      />
      {/* small emerald glow — bottom left */}
      <div
        className='pointer-events-none absolute -bottom-16 -left-16 h-[280px] w-[280px] rounded-full opacity-15'
        style={{
          background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
        }}
      />

      {/* content */}
      <div className='relative z-10 flex flex-col items-center text-center gap-6 container px-6'>
        {/* slim eyebrow label */}
        <span
          className='text-xs md:text-sm font-semibold tracking-[0.2em] uppercase'
          style={{ color: '#10b981' }}
        >
          ✦ Agjencia Juaj e Udhëtimeve ✦
        </span>

        {/* main heading */}
        <h1
          className='font-serif leading-[1.1] text-white'
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          Zbulo Botën{' '}
          <span className='relative inline-block' style={{ color: '#10b981' }}>
            Ashtu Si Ti Dëshiron
          </span>
        </h1>

        <Text
          text={`Destinacione të përzgjedhura me kujdes për udhëtime të paharrueshme
          dhe përvoja që kanë kuptim.`}
          size='md:text-lg'
          font='font-medium'
          className='text-gray-400 '
        />

        <Button
          name='Na Kontakto'
          bgHover='#059669'
          bgColor='#10b981'
          color='white'
          onClick={() =>
            window.open(`https://wa.me/355696900916?text=${message}`)
          }
          endIcon={<ArrowRightAltIcon />}
        />
      </div>

      {/* bottom: thin emerald glow line + smooth wave */}
      <div className='absolute bottom-0 left-0 right-0'>
        <div
          className='w-full h-px opacity-30'
          style={{
            background:
              'linear-gradient(90deg, transparent, #10b981 30%, #10b981 70%, transparent)',
          }}
        />
        <svg
          viewBox='0 0 1440 56'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          className='w-full h-14'
        >
          <path
            d='M0,28 C480,56 960,0 1440,28 L1440,56 L0,56 Z'
            fill='#f8fafc'
          />
        </svg>
      </div>
    </div>
  );
};

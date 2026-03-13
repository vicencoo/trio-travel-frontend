import { Card } from '@/shared/components/card';
import { Text } from '@/shared/components/text';
import type { InsuranceCardProps } from './types';

type StatusType = 'expired' | 'expiring_soon' | 'active';

interface StatusInfo {
  status: StatusType;
  days: number;
}

const getStatus = (expirationDate: Date): StatusInfo => {
  const today = new Date();
  const expDate = new Date(expirationDate);
  const diffDays = Math.ceil(
    (expDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffDays < 0) return { status: 'expired', days: Math.abs(diffDays) };
  if (diffDays <= 14) return { status: 'expiring_soon', days: diffDays };
  return { status: 'active', days: diffDays };
};

const STATUS_CONFIG: Record<
  StatusType,
  {
    label: string;
    daysLabel: (days: number) => string;
    badge: string;
  }
> = {
  active: {
    label: 'Aktiv',
    daysLabel: (d) => `${d} ditë të mbetura`,
    badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  },
  expiring_soon: {
    label: 'Skadon së shpejti',
    daysLabel: (d) => `${d} ditë të mbetura`,
    badge: 'bg-amber-50 text-amber-700 border border-amber-200',
  },
  expired: {
    label: 'Skaduar',
    daysLabel: (d) => `${d} ditë më parë`,
    badge: 'bg-red-50 text-red-700 border border-red-200',
  },
};

export const InsuranceCard = ({ insurance, openPanel }: InsuranceCardProps) => {
  const name = insurance.client_name.split(' ');
  const initials = name
    .map((n) => n.slice(0, 1))
    .join('')
    .slice(0, 2);

  const { status, days } = getStatus(new Date(insurance?.expiration_date));
  const config = STATUS_CONFIG[status];

  return (
    <Card
      padding='0px'
      width='w-full'
      className='relative cursor-pointer hover:scale-[1.03] '
      onClick={() => openPanel(insurance)}
    >
      {/* Top accent bar */}
      <div className={`flex w-full h-1 absolute top-0 left-0 bg-orange-500`} />

      <div className='flex w-full py-4 px-5 items-center justify-between gap-3'>
        {/* Left: Avatar + Name */}
        <div className='flex items-center gap-3 min-w-0'>
          <span className=' flex w-11 h-11 rounded-full border-2 border-orange-600 bg-orange-50 text-orange-600 items-center justify-center text-xs font-bold uppercase select-none tracking-wider'>
            {initials}
          </span>
          <div className='flex flex-col min-w-0'>
            <Text
              text={insurance.client_name}
              size='text-sm'
              font='font-semibold'
              className='text-slate-800 dark:text-slate-200 truncate'
            />
          </div>
        </div>

        {/* Center: Plate */}
        <div className='flex-shrink-0 hidden sm:flex'>
          <span className='py-1.5 px-3 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold tracking-widest uppercase'>
            {insurance.car_plate}
          </span>
        </div>

        {/* Right: Status badge + days */}
        <div className='flex-shrink-0 flex flex-col items-end gap-1'>
          <span
            className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium ${config.badge}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${config.label === 'Aktiv' ? 'bg-green-600' : config.label === 'Skaduar' ? 'bg-red-600' : 'bg-orange-600'} animate-pulse`}
            />
            {config.label}
          </span>
          <span className='text-xs text-slate-400 dark:text-slate-500 pr-0.5'>
            {config.daysLabel(days)}
          </span>
        </div>
      </div>
    </Card>
  );
};

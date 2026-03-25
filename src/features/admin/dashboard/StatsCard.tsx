import { Text } from '@/components/text';
import type { StatsCardProps } from './types';
import { Icon } from '@/components/icon';
import {
  House,
  Map,
  Package,
  TicketsPlane,
  TrendingDown,
  TrendingUp,
} from '@/icons';

const cardDetails: Record<string, { icon: React.ElementType; color: string }> =
  {
    pronat: { icon: House, color: '#34d399' },
    biletat: { icon: TicketsPlane, color: '#6366f1' },
    paketat: { icon: Package, color: '#7c3aed' },
    destinacionet: { icon: Map, color: '#eab308' },
  };

export const StatsCard = ({ data }: StatsCardProps) => {
  const card = cardDetails[data.key];
  return (
    <div
      className={`relative flex flex-col gap-1 border shadow-sm rounded-2xl overflow-hidden p-4 hover:scale-105 transition-all duration-500 will-change-transform`}
      style={{
        borderColor: card.color,
        boxShadow: `0 0 12px 4px ${card.color}33`,
      }}
    >
      <div
        className='absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none'
        style={{
          background: `${card.color}25`,
          filter: 'blur(20px)',
        }}
      />
      <div className='flex w-full items-center justify-between'>
        <span
          className='flex w-14 h-14 items-center justify-center border rounded-xl'
          style={{
            borderColor: card.color,
            backgroundColor: `${card.color}20`,
          }}
        >
          <Icon
            icon={card.icon}
            className='text-slate-900 dark:text-slate-300'
          />
        </span>
        <span
          className={`flex items-center gap-1 p-1 rounded-3xl border ${data.positive === true ? 'border-green-500 bg-green-50 text-green-500' : 'border-red-500 bg-red-50 text-red-500'}`}
        >
          {data.positive ? (
            <TrendingUp size={12} />
          ) : (
            <TrendingDown size={12} />
          )}
          <Text
            text={`${data.positive === true ? '+' : ''}${data.change}%`}
            size='text-sm'
            font='font-semibold'
          />
        </span>
      </div>
      <Text
        text={data.count}
        size='text-3xl'
        font='font-bold font-serif'
        className='tracking-[0.2rem] text-slate-900 dark:text-slate-200'
      />
      <Text
        text={data.key}
        size='text-sm'
        font='font-medium font-serif'
        className='tracking-widest capitalize text-gray-500 dark:text-slate-400'
      />
    </div>
  );
};

import { Text } from '@/components/text';
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import type { AnalyticsResponse } from './types';

const COLORS: Record<string, string> = {
  completed: '#1e6ed6',
  pending: '#f58c14',
};

const axisProps = {
  tick: { fontSize: 11, fill: '#94a3b8' },
  axisLine: false,
  tickLine: false,
};

const tooltipStyle = {
  borderRadius: '10px',
  border: '1px solid #e2e8f0',
  fontSize: '12px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
};

type BookingAnalyticsProps = {
  analytics?: AnalyticsResponse;
};

export const BookingAnalytics = ({ analytics }: BookingAnalyticsProps) => {
  return (
    <div className='flex flex-col gap-8'>
      {/* Row 1 — Revenue + Pie */}
      <div className='grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8'>
        {/* Monthly Revenue */}
        <div className='flex flex-col gap-2 h-[35vh] md:h-[40vh]'>
          <Text
            text={'Të Ardhurat Mujore'}
            size='text-sm'
            font='font-semibold'
            className='text-slate-600 dark:text-slate-500'
          />
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              data={analytics?.monthlyRevenue}
              margin={{ top: 8, right: 8, left: -12, bottom: 0 }}
            >
              <defs>
                <linearGradient id='revenueGrad' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.15} />
                  <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray='3 3'
                stroke='rgba(148,163,184,0.1)'
              />
              <XAxis dataKey='month' {...axisProps} />
              <YAxis {...axisProps} tickFormatter={(v) => `${v}€`} />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v) => [`${v}€`, 'Të ardhura']}
              />
              <Area
                type='monotone'
                dataKey='revenue'
                stroke='#3b82f6'
                strokeWidth={2}
                fill='url(#revenueGrad)'
                dot={{ r: 3, fill: '#3b82f6', strokeWidth: 0 }}
                activeDot={{ r: 5, fill: '#3b82f6', strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Ticket Status */}
        <div className='flex flex-col gap-2 h-[35vh] md:h-[40vh]'>
          <Text
            text={'Statusi i Biletave'}
            size='text-sm'
            font='font-semibold'
            className='text-slate-600 dark:text-slate-500'
          />
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                data={analytics?.ticketStatus}
                cx='50%'
                cy='42%'
                innerRadius='45%'
                outerRadius='65%'
                paddingAngle={4}
                dataKey='value'
                startAngle={90}
                endAngle={-270}
              >
                {analytics?.ticketStatus.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[entry.name.toLowerCase()] ?? '#cbd5e1'}
                    stroke='none'
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => {
                  const label =
                    typeof name === 'string' && name
                      ? name[0].toUpperCase() + name.slice(1).toLowerCase()
                      : '';
                  return [`${value} bileta`, label];
                }}
                contentStyle={tooltipStyle}
              />
              <Legend
                iconType='circle'
                iconSize={8}
                formatter={(value) => (
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 2 — Daily + Monthly tickets */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Daily Tickets */}
        <div className='flex flex-col gap-2 h-[35vh] md:h-[40vh]'>
          <Text
            text={'Shitjet Ditore'}
            size='text-sm'
            font='font-semibold'
            className='text-slate-600 dark:text-slate-500'
          />
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              data={analytics?.dailyTickets}
              margin={{ top: 8, right: 8, left: -12, bottom: 0 }}
            >
              <defs>
                <linearGradient id='dailyGrad' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.15} />
                  <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray='3 3'
                stroke='rgba(148,163,184,0.1)'
              />
              <XAxis dataKey='day' {...axisProps} />
              <YAxis {...axisProps} allowDecimals={false} />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v) => [`${v} Bileta`]}
              />
              <Area
                type='monotone'
                dataKey='tickets'
                stroke='#3b82f6'
                strokeWidth={2}
                fill='url(#dailyGrad)'
                dot={{ r: 3, fill: '#3b82f6', strokeWidth: 0 }}
                activeDot={{ r: 5, fill: '#3b82f6', strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Tickets */}
        <div className='flex flex-col gap-2 h-[35vh] md:h-[40vh]'>
          <Text
            text={'Shitjet Mujore'}
            size='text-sm'
            font='font-semibold'
            className='text-slate-600 dark:text-slate-500'
          />
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              data={analytics?.monthlyTickets}
              margin={{ top: 8, right: 8, left: -12, bottom: 0 }}
            >
              <defs>
                <linearGradient id='barGrad' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#3b82f6' stopOpacity={0.9} />
                  <stop offset='100%' stopColor='#3b82f6' stopOpacity={0.45} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray='3 3'
                stroke='rgba(148,163,184,0.1)'
                vertical={false}
              />
              <XAxis dataKey='month' {...axisProps} />
              <YAxis {...axisProps} allowDecimals={false} />
              <Tooltip
                contentStyle={tooltipStyle}
                cursor={{ fill: 'rgba(148,163,184,0.06)' }}
                formatter={(v) => {
                  const label = v === 1 ? 'Biletë' : 'Bileta';
                  return [`${v} ${label}`];
                }}
              />
              <Bar
                dataKey='tickets'
                fill='url(#barGrad)'
                radius={[6, 6, 0, 0]}
                maxBarSize={36}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

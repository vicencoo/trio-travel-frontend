import { Text } from '@/shared/components/text';
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
                  return [`${value} tickets`, label];
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

// import { Text } from '@/shared/components/text';
// import {
//   Area,
//   AreaChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
// } from 'recharts';

// const COLORS: Record<string, string> = {
//   completed: '#39d18d',
//   pending: '#e1f55b',
// };

// const monthlyRevenue = [
//   { month: 'Jan', revenue: 4200 },
//   { month: 'Feb', revenue: 3800 },
//   { month: 'Mar', revenue: 5100 },
//   { month: 'Apr', revenue: 4700 },
//   { month: 'May', revenue: 6300 },
//   { month: 'Jun', revenue: 5900 },
//   { month: 'Jul', revenue: 7200 },
//   { month: 'Aug', revenue: 6800 },
//   { month: 'Sep', revenue: 7900 },
//   { month: 'Oct', revenue: 8400 },
//   { month: 'Nov', revenue: 9100 },
//   { month: 'Dec', revenue: 9800 },
// ];

// const dailyTickets = [
//   { day: 'Mar 2', tickets: 5 },
//   { day: 'Mar 6', tickets: 7 },
//   { day: 'Mar 10', tickets: 10 },
//   { day: 'Mar 14', tickets: 8 },
//   { day: 'Mar 18', tickets: 9 },
//   { day: 'Mar 22', tickets: 22 },
//   { day: 'Mar 26', tickets: 14 },
//   { day: 'Mar 30', tickets: 2 },
// ];

// const monthlyTickets = [
//   { month: 'Jan', tickets: 56 },
//   { month: 'Feb', tickets: 89 },
//   { month: 'Mar', tickets: 104 },
//   { month: 'Apr', tickets: 23 },
//   { month: 'May', tickets: 55 },
//   { month: 'Jun', tickets: 47 },
//   { month: 'Jul', tickets: 98 },
//   { month: 'Aug', tickets: 125 },
//   { month: 'Sep', tickets: 256 },
//   { month: 'Oct', tickets: 39 },
//   { month: 'Nov', tickets: 124 },
//   { month: 'Dec', tickets: 15 },
// ];

// const ticketStatusData = [
//   { name: 'Completed', value: 672 },
//   { name: 'Pending', value: 162 },
// ];

// const axisProps = {
//   tick: { fontSize: 11, fill: '#94a3b8' },
//   axisLine: false,
//   tickLine: false,
// };

// const tooltipStyle = {
//   borderRadius: '10px',
//   border: '1px solid #e2e8f0',
//   fontSize: '12px',
//   boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
// };

// export const BookingAnalytics = () => {
//   return (
//     <div className='flex flex-col gap-10'>
//       <div className='flex md:flex-row flex-col items-center w-full gap-10 md:h-[40vh]'>
//         {/* Monthly Revenue — full year */}
//         <div className='flex flex-col gap-2 flex-[7] h-full'>
//           <Text
//             text={'Të Ardhurat Mujore'}
//             size='text-sm'
//             font='font-semibold'
//             className='text-slate-600 dark:text-slate-500'
//           />

//           <ResponsiveContainer width='100%' height='100%'>
//             <AreaChart
//               data={monthlyRevenue}
//               margin={{ top: 8, right: 8, left: -12, bottom: 0 }}
//             >
//               <defs>
//                 <linearGradient id='revenueGrad' x1='0' y1='0' x2='0' y2='1'>
//                   <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.15} />
//                   <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid
//                 strokeDasharray='3 3'
//                 stroke='rgba(148,163,184,0.1)'
//               />
//               <XAxis dataKey='month' {...axisProps} />
//               <YAxis
//                 {...axisProps}
//                 tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
//               />
//               <Tooltip
//                 contentStyle={tooltipStyle}
//                 formatter={(v) => [
//                   `$${((v as number) / 1000).toFixed(1)}k`,
//                   'Revenue',
//                 ]}
//               />
//               <Area
//                 type='monotone'
//                 dataKey='revenue'
//                 stroke='#3b82f6'
//                 strokeWidth={2}
//                 fill='url(#revenueGrad)'
//                 dot={{ r: 3, fill: '#3b82f6', strokeWidth: 0 }}
//                 activeDot={{ r: 5, fill: '#3b82f6', strokeWidth: 0 }}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Ticket Status — completed vs pending */}
//         <div className='flex flex-col gap-2 flex-[3] h-full'>
//           <Text
//             text={'Statusi i Biletave'}
//             size='text-sm'
//             font='font-semibold'
//             className='text-slate-600 dark:text-slate-500'
//           />
//           <ResponsiveContainer width='100%' height='100%'>
//             <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
//               <Pie
//                 data={ticketStatusData}
//                 cx='50%'
//                 cy='42%'
//                 innerRadius='45%'
//                 outerRadius='65%'
//                 paddingAngle={4}
//                 dataKey='value'
//                 startAngle={90}
//                 endAngle={-270}
//               >
//                 {ticketStatusData.map((entry) => (
//                   <Cell
//                     key={entry.name}
//                     fill={COLORS[entry.name.toLowerCase()] ?? '#cbd5e1'}
//                     stroke='none'
//                   />
//                 ))}
//               </Pie>
//               <Tooltip
//                 formatter={(value) => [`${value} tickets`, '']}
//                 contentStyle={tooltipStyle}
//               />
//               <Legend
//                 iconType='circle'
//                 iconSize={8}
//                 formatter={(value) => (
//                   <span style={{ fontSize: '12px', color: '#94a3b8' }}>
//                     {value}
//                   </span>
//                 )}
//               />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className='flex items-center w-full h-[40vh] gap-10'>
//         {/* Daily Tickets — current month */}
//         <div className='flex flex-col gap-2 flex-1 h-full'>
//           <Text
//             text={'Shitjet Ditore'}
//             size='text-sm'
//             font='font-semibold'
//             className='text-slate-600 dark:text-slate-500'
//           />
//           <ResponsiveContainer width='100%' height='100%'>
//             <AreaChart
//               data={dailyTickets}
//               margin={{ top: 8, right: 8, left: -12, bottom: 0 }}
//             >
//               <defs>
//                 <linearGradient id='dailyGrad' x1='0' y1='0' x2='0' y2='1'>
//                   <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.15} />
//                   <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid
//                 strokeDasharray='3 3'
//                 stroke='rgba(148,163,184,0.1)'
//               />
//               <XAxis dataKey='day' {...axisProps} />
//               <YAxis {...axisProps} allowDecimals={false} />
//               <Tooltip
//                 contentStyle={tooltipStyle}
//                 formatter={(v?: number) => [v, 'Tickets']}
//               />
//               <Area
//                 type='monotone'
//                 dataKey='tickets'
//                 stroke='#3b82f6'
//                 strokeWidth={2}
//                 fill='url(#dailyGrad)'
//                 dot={{ r: 3, fill: '#3b82f6', strokeWidth: 0 }}
//                 activeDot={{ r: 5, fill: '#3b82f6', strokeWidth: 0 }}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Monthly Tickets — full year */}
//         <div className='flex flex-col gap-2 flex-1 h-full'>
//           <Text
//             text={'Shitjet Mujore'}
//             size='text-sm'
//             font='font-semibold'
//             className='text-slate-600 dark:text-slate-500'
//           />
//           <ResponsiveContainer width='100%' height='100%'>
//             <BarChart
//               data={monthlyTickets}
//               margin={{ top: 8, right: 8, left: -12, bottom: 0 }}
//             >
//               <defs>
//                 <linearGradient id='barGrad' x1='0' y1='0' x2='0' y2='1'>
//                   <stop offset='0%' stopColor='#3b82f6' stopOpacity={0.9} />
//                   <stop offset='100%' stopColor='#3b82f6' stopOpacity={0.45} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid
//                 strokeDasharray='3 3'
//                 stroke='rgba(148,163,184,0.1)'
//                 vertical={false}
//               />
//               <XAxis dataKey='month' {...axisProps} />
//               <YAxis {...axisProps} allowDecimals={false} />
//               <Tooltip
//                 contentStyle={tooltipStyle}
//                 cursor={{ fill: 'rgba(148,163,184,0.06)' }}
//                 formatter={(v: number) => [v, 'Tickets']}
//               />
//               <Bar
//                 dataKey='tickets'
//                 fill='url(#barGrad)'
//                 radius={[6, 6, 0, 0]}
//                 maxBarSize={36}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

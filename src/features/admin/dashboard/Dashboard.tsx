import { useDashboard } from './useDashboard';
import { BookingAnalytics } from './BookingAnalytics';
import { DashboardSectionHeader } from './DashboardSectionHeader';
import { DashboardHeader } from './DashboardHeader';
import { Text } from '@/components/text';
import { StatsCard } from './StatsCard';
import { BookingAnalyticsSkeleton } from '@/components/skeletons';
import { ChartBarIncreasing, Database } from '@/icons';

const Dashboard = () => {
  const { dataCounts, formattedDate, analytics, isLoading } = useDashboard();

  return (
    <div className='flex flex-col container pt-5 pb-14 gap-10'>
      <DashboardHeader formattedDate={formattedDate} />

      {isLoading ? (
        <BookingAnalyticsSkeleton />
      ) : (
        <>
          <div className='flex flex-col gap-5'>
            <DashboardSectionHeader
              label='Analitikë dhe Shitje'
              icon={<ChartBarIncreasing size={12} />}
              text='Analitika'
            />
            {analytics && <BookingAnalytics analytics={analytics} />}
          </div>

          <div className='flex flex-col gap-8'>
            <DashboardSectionHeader
              label='Gjendja e Sistemit'
              icon={<Database size={12} />}
              text='Totale'
            />
            <div className='flex w-full py-3 px-10 border border-gray-200 rounded-xl  bg-gray-50 dark:bg-slate-800/80  dark:border-slate-500'>
              <Text
                text='Totalet e regjistruara në sistem — përqindjet pasqyrojnë ndryshimin nga muaji i kaluar.'
                size='text-sm'
                font='font-medium'
                className='text-gray-500 dark:text-slate-500'
              />
            </div>
            <div className='grid sm:grid-cols-4 grid-cols-2 gap-5'>
              {dataCounts?.dataCounts &&
                dataCounts.dataCounts.length > 0 &&
                dataCounts.dataCounts.map((item) => (
                  <StatsCard data={item} key={item.key} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;

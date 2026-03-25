import { Button } from '@/components/button';
import { IconBox } from '@/components/iconBox';
import { Text } from '@/components/text';
import { useCheckinService } from './useCheckinService';
import { CheckinDateFilter } from './CheckinDateFilter';
import { NoDataFound } from '@/components/noDataFound';
import { CheckinTicketCard } from './CheckinTicketCard';
import { CheckinTicketModal } from './CheckinTicketModal';
import { Spinner } from '@/components/spinner';
import { PlaneTakeoff, RefreshIcon } from '@/icons';

const CheckinService = () => {
  const {
    dateFilter,
    handleNextDay,
    handlePreviousDay,
    handleSetCurrentDay,
    formattedDate,
    handleDateChange,
    data,
    toggleStatus,
    closeModal,
    openModal,
    refreshPage,
    loadingId,
    activeTicket,
  } = useCheckinService();

  const isCurrentDay = dateFilter.toDateString() === new Date().toDateString();

  if (loadingId === 'loading') {
    return (
      <div className='flex w-full h-full justify-center items-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-10 pb-10'>
      <div className='flex items-center w-full bg-white dark:bg-slate-700 container py-3 justify-between border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center gap-3'>
          <IconBox
            size='w-8 h-8'
            icon={<PlaneTakeoff size={16} className='text-white' />}
            bgColor='bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-500'
          />
          <Text
            text={'Check-In Fluturimi'}
            size='text-sm'
            font='font-bold font-serif'
            className='text-slate-900 dark:text-slate-300'
          />
        </div>
        <Button
          name='Rifresko'
          padding='5px 18px'
          icon={<RefreshIcon />}
          border='rgb(100 116 139 / 1)'
          bgColor='rgb(203 213 225 / 0.6)'
          bgHover='rgb(203 213 225 / 0.6)'
          hoverColor='#334155'
          borderHover='rgb(100 116 139 / 1)'
          color='#334155'
          disabled={loadingId === 'refresh'}
          onClick={refreshPage}
        />
      </div>
      <div className='flex flex-col container gap-10'>
        <CheckinDateFilter
          handleDateChange={handleDateChange}
          isCurrentDay={isCurrentDay}
          dateFilter={dateFilter}
          formattedDate={formattedDate}
          handleNextDay={handleNextDay}
          handlePreviousDay={handlePreviousDay}
          handleSetCurrentDay={handleSetCurrentDay}
          stats={data?.stats}
        />

        {data.tickets && data.tickets.length > 0 ? (
          <div className='flex flex-col gap-3'>
            {data.tickets.map((ticket) => (
              <CheckinTicketCard
                ticket={ticket}
                openModal={openModal}
                toggleStatus={toggleStatus}
                loadingId={loadingId}
                key={ticket.id}
              />
            ))}
          </div>
        ) : (
          <NoDataFound text="Asnjë Check-In Për T'u Bërë Sot" />
        )}

        <CheckinTicketModal
          closeModal={closeModal}
          isModalOpen={activeTicket !== null}
          activeTicket={activeTicket}
        />
      </div>
    </div>
  );
};

export default CheckinService;

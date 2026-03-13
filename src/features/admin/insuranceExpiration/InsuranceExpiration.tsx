import { Button } from '@/shared/components/button';
import { Input } from '@/shared/components/input';
import { Text } from '@/shared/components/text';
import { Search } from 'lucide-react';
import { InsuranceCard } from './InsuranceCard';
import { useInsuranceExpiration } from './useInsuranceExpriation';
import { InsuranceDetailPanel } from './InsuranceDetailPanel ';
import { RenewInsuranceModal } from './RenewInsuranceModal';
import { Pagination } from '@/shared/components/pagination';
import { NoDataFound } from '@/shared/components/noDataFound';

const intervals = [
  { label: 'Të gjitha', value: 'all' },
  { label: '3 ditë', value: 3 },
  { label: '7 ditë', value: 7 },
  { label: '14 ditë', value: 14 },
];

const InsuranceExpiration = () => {
  const {
    closePanel,
    isPanelOpen,
    openPanel,
    insurance,
    closeModal,
    isModalOpen,
    openModal,
    handleChangeInterval,
    selectedInterval,
    data,
    handleChangeExpDate,
    handleRenewInsurance,
    newExpirationDate,
    handlePageChange,
    page,
    filter,
    handleChangeFilter,
  } = useInsuranceExpiration();

  return (
    <div className={`relative flex flex-col gap-10 pt-5 pb-10 container`}>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-2'>
          <span className='w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.8)]' />
          <Text
            text={'portali i sigurimeve'}
            size='text-xs'
            font='font-medium'
            className='uppercase tracking-widest text-gray-500 dark:text-slate-500'
          />
        </div>
        <Text
          text={'Sigurime në Skadim'}
          size='text-4xl'
          font='font-medium font-serif'
          className='tracking-wider text-slate-900 dark:text-slate-300'
        />
        <Text
          text={`${data.totalCount} regjistrime · renditur sipas datës së skadimit`}
          size='text-xs'
          font='font-medium'
          className='tracking-wider text-gray-500 dark:text-slate-500'
        />
      </div>

      <div className='flex flex-col w-full gap-3 py-3 px-4 bg-white dark:bg-slate-700 rounded-2xl'>
        <Input
          placeholder='Kërko sipas emrit ose targës'
          className='flex-1'
          icon={<Search size={14} />}
          value={filter.value}
          onChange={(e) => handleChangeFilter(e.target.value)}
        />

        <div className='flex items-center gap-1'>
          <Text
            text={'skadon brenda:'}
            size='text-xs'
            font='font-medium'
            className='uppercase tracking-wider text-gray-500 dark:text-slate-400'
          />

          {intervals.map((interval, index) => (
            <Button
              name={interval.label}
              padding='3px 20px'
              border={
                selectedInterval === interval.value ? 'transparent' : 'black'
              }
              color={selectedInterval === interval.value ? 'white' : 'black'}
              bgColor={
                selectedInterval === interval.value
                  ? '#2563eb '
                  : 'rgba(255, 255, 255, 0.4)'
              }
              bgHover='#2563eb'
              borderHover='transparent'
              key={index}
              onClick={() => handleChangeInterval(interval.value)}
            />
          ))}
        </div>
      </div>

      {data.insurances.length > 0 ? (
        <div className='flex flex-col gap-6 w-full'>
          {data.insurances.map((insurance) => (
            <InsuranceCard
              insurance={insurance}
              openPanel={openPanel}
              key={insurance.id}
            />
          ))}
          {data.totalPages > 1 && (
            <div className='flex w-full justify-center'>
              <Pagination
                onChange={handlePageChange}
                page={page}
                pages={data.totalPages}
              />
            </div>
          )}
        </div>
      ) : (
        <NoDataFound text='asnjë siguracion nuk u gjend' />
      )}

      {isPanelOpen && (
        <InsuranceDetailPanel
          closePanel={closePanel}
          insurance={insurance}
          isPanelOpen={isPanelOpen}
          openModal={openModal}
        />
      )}

      <RenewInsuranceModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        insurance={insurance}
        newExpirationDate={newExpirationDate}
        handleChangeExpDate={handleChangeExpDate}
        handleRenewInsurance={handleRenewInsurance}
      />
    </div>
  );
};

export default InsuranceExpiration;

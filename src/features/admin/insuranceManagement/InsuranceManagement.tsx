import { AdminPageHeader } from '@/components/adminPageHeader';
import { InsuranceModal } from './InsuranceModal';
import { useInsuranceManagement } from './useInsuranceManagement';
import { DataTable } from '@/components/dataTable';
import { InsuranceRow } from './InsuranceRow';
import { NoDataFound } from '@/components/noDataFound';
import { Pagination } from '@/components/pagination';
import { Input } from '@/components/input';
import { Spinner } from '@/components/spinner';
import { Search, Shield } from '@/icons';
import { INSURANCE_COLUMNS } from './columns';

const InsuranceManagement = () => {
  const {
    closeModal,
    isModalOpen,
    openModal,
    formData,
    handleChangeData,
    handleSave,
    data,
    errors,
    handleEdit,
    handleDelete,
    handlePageChange,
    page,
    filter,
    handleChangeFilter,
    isLoading,
    isAddingInsurance,
  } = useInsuranceManagement();

  if (isLoading) {
    return (
      <div className='flex w-full h-full items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-10 py-10 container'>
      <AdminPageHeader
        label='Menaxhimi i Sigurimeve'
        text='Administrimi i të gjitha polisave të sigurimeve'
        count={data.totalCount}
        icon={<Shield className='text-white' />}
        iconBgColor='bg-gradient-to-br from-indigo-500 to-violet-600'
        buttonName='shto sigurim'
        onClick={openModal}
      />

      <div className='flex w-full'>
        <Input
          placeholder='Kërkoni me emër ose me targë...'
          icon={<Search size={16} />}
          iconPosition='end'
          className='flex-1'
          value={filter.value}
          onChange={(e) => handleChangeFilter(e.target.value)}
        />
      </div>

      <InsuranceModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        data={formData}
        handleChangeData={handleChangeData}
        handleSave={handleSave}
        errors={errors}
        isAddingInsurance={isAddingInsurance}
      />

      {data && data.insurances.length > 0 ? (
        <div className='flex flex-col gap-10 items-center'>
          <DataTable
            columns={INSURANCE_COLUMNS}
            layout='insurances'
            headerBg='bg-slate-300 dark:bg-slate-700'
            headerText='text-slate-700 dark:text-slate-300'
          >
            {data.insurances?.map((insurance) => (
              <InsuranceRow
                insurance={insurance}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                key={insurance.id}
              />
            ))}
          </DataTable>

          {data.totalPages > 1 && (
            <Pagination
              onChange={handlePageChange}
              page={page}
              pages={data.totalPages}
            />
          )}
        </div>
      ) : (
        <NoDataFound text='Asnjë siguracion nuk u gjend' />
      )}
    </div>
  );
};

export default InsuranceManagement;

import { usePackageManager } from './usePackageManager';
import { PackageForm } from './PackageForm';
import { DataTable } from '@/components/dataTable';
import { PackageTableRow } from './PackageTableRow';
import { Pagination } from '@/components/pagination';
import { NoDataFound } from '@/components/noDataFound';
import { Spinner } from '@/components/spinner';
import { StatusFilter } from '@/components/statusFilter';
import { AdminPageHeader } from '@/components/adminPageHeader';
import { TourOutlined } from '@/icons';
import { PACKAGE_COLUMNS } from './columns';

export const PackageManager = () => {
  const {
    handleChangePackageData,
    handlePackageDetailsChange,
    touristPackage,
    handleImagesChange,
    handleSave,
    handleOpenForm,
    isPackageFormOpen,
    packages,
    handleEditPackage,
    handleDeletePackage,
    handleChangePage,
    pageNumber,
    setDeletedImages,
    errors,
    handleRenew,
    isLoading,
    publishOrDraftPackage,
    handleStatusChange,
    status,
    isAddingPackage,
  } = usePackageManager();

  return (
    <div className='flex flex-col py-10 gap-10 min-h-screen container'>
      <AdminPageHeader
        icon={<TourOutlined className='text-white' />}
        iconBgColor='bg-blue-600'
        label='Menaxhimi i Paketave Turistike'
        text='Shiko, modifiko dhe menaxho te gjitha paketave turistike'
        buttonName={'shto pakete te re'}
        buttonBg='#3b82f6'
        buttonBgHover='#2563eb'
        buttonBorderHover='#1d4ed8'
        onClick={handleOpenForm}
        display={!isPackageFormOpen}
      />

      <StatusFilter
        handleStatusChange={(newStatus) => handleStatusChange(newStatus)}
        status={status}
      />

      {isPackageFormOpen && (
        <PackageForm
          onClose={handleOpenForm}
          touristPackage={touristPackage}
          handleChangePackageData={handleChangePackageData}
          handlePackageDetailsChange={handlePackageDetailsChange}
          handleImagesChange={handleImagesChange}
          handleSave={handleSave}
          setDeletedImages={setDeletedImages}
          isAddingPackage={isAddingPackage}
          errors={errors}
        />
      )}

      {isLoading ? (
        <div className='flex w-full min-h-[61vh] items-center justify-center'>
          <Spinner />
        </div>
      ) : packages?.packages && packages.packages.length > 0 ? (
        <div className='flex flex-col gap-10 w-full items-center min-h-[61vh] justify-between'>
          <DataTable
            headerText='text-white'
            headerBg='bg-blue-600'
            columns={PACKAGE_COLUMNS}
            layout='package'
          >
            {packages.packages.map((packageItem) => (
              <PackageTableRow
                packageItem={packageItem}
                key={packageItem.id}
                handleDeletePackage={handleDeletePackage}
                handleEditPackage={handleEditPackage}
                handleRenew={handleRenew}
                publishOrDraftPackage={publishOrDraftPackage}
              />
            ))}
          </DataTable>
          <Pagination
            onChange={handleChangePage}
            page={pageNumber}
            pages={packages.pagination.totalPages}
          />
        </div>
      ) : (
        <div className='md:py-0 py-20'>
          <NoDataFound text='no packages found' />
        </div>
      )}
    </div>
  );
};

import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import { usePackageManager } from './usePackageManager';
import { AdminPageHeader } from '@/components/adminPageHeader/AdminPageHeader';
import { PackageForm } from './PackageForm';
import { DataTable } from '@/components/dataTable';
import { PackageManager_COLUMNS } from '@/utils/columns';
import { PackageTableRow } from './PackageTableRow';
import { Pagination } from '@/components/pagination';
import { NoDataFound } from '@/components/noDataFound';
import { StatusFilter } from '@/components/statusFilter';
import { Spinner } from '@/components/spinner';

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
  } = usePackageManager();

  return (
    <div className='flex flex-col py-10 gap-10 min-h-screen container'>
      <AdminPageHeader
        icon={<TourOutlinedIcon className='text-white' />}
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

      {/* <StatusFilter /> */}

      {isPackageFormOpen && (
        <PackageForm
          onClose={handleOpenForm}
          touristPackage={touristPackage}
          handleChangePackageData={handleChangePackageData}
          handlePackageDetailsChange={handlePackageDetailsChange}
          handleImagesChange={handleImagesChange}
          handleSave={handleSave}
          setDeletedImages={setDeletedImages}
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
            columns={PackageManager_COLUMNS}
            layout='package'
          >
            {packages.packages.map((packageItem) => (
              <PackageTableRow
                packageItem={packageItem}
                key={packageItem.id}
                handleDeletePackage={handleDeletePackage}
                handleEditPackage={handleEditPackage}
                handleRenew={handleRenew}
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

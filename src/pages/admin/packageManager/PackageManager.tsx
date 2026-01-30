import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import { AdminPageHeader } from '../../../components/adminPageHeader/AdminPageHeader';
import { DataTable } from '../../../components/dataTable';
import { PackageForm } from './PackageForm';
import { usePackageManager } from './usePackageManager';
import { PackageTableRow } from './PackageTableRow';
import { NoDataFound } from '../../../components/noDataFound';
import { PackageManager_COLUMNS } from '../../../columns';
import { Pagination } from '../../../components/pagination';

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

      {isPackageFormOpen && (
        <PackageForm
          onClose={handleOpenForm}
          touristPackage={touristPackage}
          handleChangePackageData={handleChangePackageData}
          handlePackageDetailsChange={handlePackageDetailsChange}
          handleImagesChange={handleImagesChange}
          handleSave={handleSave}
        />
      )}

      {packages?.packages && packages.packages.length > 0 ? (
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
                key={packageItem._id}
                handleDeletePackage={handleDeletePackage}
                handleEditPackage={handleEditPackage}
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

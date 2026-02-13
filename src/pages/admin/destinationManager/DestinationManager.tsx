import { AdminPageHeader } from '../../../components/adminPageHeader/AdminPageHeader';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import { useDestinationManager } from './useDestinationManager';
import { DestinationModal } from './DestinationModal';
import { DataTable } from '../../../components/dataTable';
import { Pagination } from '../../../components/pagination';
import { NoDataFound } from '../../../components/noDataFound';
import { DESTINATION_COLUMNS } from '../../../columns';
import { DestinationTableRow } from './DestinationTableRow';

export const DestinationManager = () => {
  const {
    handleOpenModal,
    isModalOpen,
    handleAddTypes,
    inputValue,
    setInputValue,
    data,
    removeType,
    handleChangeData,
    handleImagesChange,
    handleSave,
    errors,
    destinations,
    handleDeleteDestination,
    handlePageChange,
    page,
    handleEditDestination,
  } = useDestinationManager();

  return (
    <div className='flex flex-col py-10 gap-10 min-h-screen container'>
      <AdminPageHeader
        icon={<AddLocationAltOutlinedIcon className='text-white' />}
        iconBgColor='bg-blue-600'
        label='Menaxhimi i Destinacioneve'
        text='Shiko, modifiko dhe menaxho të gjithë destinacionet'
        buttonName={'shto destinacion'}
        buttonBg='#3b82f6'
        buttonBgHover='#2563eb'
        buttonBorderHover='#1d4ed8'
        onClick={handleOpenModal}
        display={!isModalOpen}
      />

      {isModalOpen && (
        <div className='flex w-full justify-center'>
          <DestinationModal
            handleOpenModal={handleOpenModal}
            handleAddTypes={handleAddTypes}
            inputValue={inputValue}
            setInputValue={setInputValue}
            data={data}
            removeType={removeType}
            handleChangeData={handleChangeData}
            handleImagesChange={handleImagesChange}
            handleSave={handleSave}
            errors={errors}
            isDestinationFormOpen={isModalOpen}
          />
        </div>
      )}

      {destinations?.destinations && destinations?.destinations.length > 0 ? (
        <div className='flex flex-col gap-10 items-center min-h-[61vh] justify-between'>
          <DataTable
            columns={DESTINATION_COLUMNS}
            headerBg='bg-blue-600'
            headerText='text-white'
            layout='destination'
          >
            {destinations.destinations.map((destination) => (
              <DestinationTableRow
                data={destination}
                key={destination.id}
                handleEditDestination={handleEditDestination}
                handleDeleteHotel={() =>
                  destination.id && handleDeleteDestination(destination.id)
                }
              />
            ))}
          </DataTable>
          <Pagination
            onChange={handlePageChange}
            page={page}
            pages={destinations.pagination.allPages}
          />
        </div>
      ) : (
        <div className='py-20'>
          <NoDataFound text='No Destinations Found' />
        </div>
      )}
    </div>
  );
};

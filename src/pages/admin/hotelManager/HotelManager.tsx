import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import { useHotelManager } from './useHotelManager';
import { HotelForm } from './HotelForm';
import { HotelTableRow } from './HotelTableRow';
import { AdminPageHeader } from '@/components/adminPageHeader/AdminPageHeader';
import { DataTable } from '@/components/dataTable';
import { HOTEL_COLUMNS } from '@/utils/columns';
import { Pagination } from '@/components/pagination';
import { NoDataFound } from '@/components/noDataFound';

export const HotelManager = () => {
  const {
    handleOpenForm,
    isHotelFormOpen,
    handleChangeData,
    hotelData,
    handleImagesChange,
    handleSetFacilities,
    saveHotel,
    allHotels,
    handleEditHotel,
    handlePageChange,
    pageNumber,
    handleDeleteHotel,
    setDeletedImages,
    errors,
  } = useHotelManager();

  return (
    <div className='flex flex-col py-10 gap-10 min-h-screen container'>
      <AdminPageHeader
        icon={<HotelOutlinedIcon className='text-white' />}
        iconBgColor='bg-blue-600'
        label='Menaxhimi i Hoteleve'
        text='Shiko, modifiko dhe menaxho të gjithë hotelet'
        buttonName={'shto hotel te ri'}
        buttonBg='#3b82f6'
        buttonBgHover='#2563eb'
        buttonBorderHover='#1d4ed8'
        onClick={handleOpenForm}
        display={!isHotelFormOpen}
      />
      {isHotelFormOpen && (
        <div className='flex w-full justify-center'>
          <HotelForm
            handleOpenForm={handleOpenForm}
            handleChangeData={handleChangeData}
            hotelData={hotelData}
            handleImagesChange={handleImagesChange}
            handleSetFacilities={handleSetFacilities}
            saveHotel={saveHotel}
            setDeletedImages={setDeletedImages}
            errors={errors}
          />
        </div>
      )}

      {allHotels?.hotels && allHotels.hotels.length > 0 ? (
        <div className='flex flex-col gap-10 items-center min-h-[61vh] justify-between'>
          <DataTable
            columns={HOTEL_COLUMNS}
            headerBg='bg-blue-600'
            headerText='text-white'
            layout='hotel'
          >
            {allHotels.hotels.map((hotel) => (
              <HotelTableRow
                data={hotel}
                handleEditHotel={handleEditHotel}
                key={hotel.id}
                handleDeleteHotel={() =>
                  hotel.id && handleDeleteHotel(hotel.id)
                }
              />
            ))}
          </DataTable>
          <Pagination
            onChange={handlePageChange}
            page={pageNumber}
            pages={allHotels.pagination.allPages}
          />
        </div>
      ) : (
        <div className='py-20'>
          <NoDataFound text='No Hotels Found' />
        </div>
      )}
    </div>
  );
};

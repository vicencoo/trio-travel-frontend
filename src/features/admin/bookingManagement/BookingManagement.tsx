import { AdminPageHeader } from '@/components/adminPageHeader';
import { DataTable } from '@/components/dataTable';
import { NoDataFound } from '@/components/noDataFound';
import { useWorkManagement } from './useBookingManagement';
import { BookingFormModal } from './BookingFormModal';
import { BookingRow } from './BookingRow';
import { Spinner } from '@/components/spinner';
import { Input } from '@/components/input';
import { Search, Shop } from '@/icons';
import { BOOKINGS_COLUMNS } from './columns';

const BookingManagement = () => {
  const {
    closeModal,
    isModalOpen,
    openModal,
    formData,
    handleChange,
    handleSave,
    bookings,
    handleEdit,
    handleDelete,
    errors,
    isLoading,
    isAddingTicket,
  } = useWorkManagement();

  if (isLoading)
    return (
      <div className='flex w-full h-full items-center justify-center'>
        <Spinner />
      </div>
    );

  return (
    <div className='flex flex-col gap-10 py-10 container'>
      <AdminPageHeader
        icon={<Shop className='text-white' />}
        iconBgColor=' bg-gradient-to-br from-indigo-600 to-violet-600'
        buttonName='shto rezervim'
        label='Menaxhimi i Punës'
        text='Panel Administrativ i Shitjeve'
        onClick={openModal}
      />

      <div className='flex w-full gap-5 p-3 bg-white dark:bg-slate-700 shadow-md rounded-lg'>
        <Input
          icon={
            <Search size={18} className='text-gray-400 dark:text-slate-500' />
          }
          placeholder='Kërko me kodin e biletës ose me emrin e klientit'
          className='flex-1 border-gray-200 dark:border-slate-500'
        />
      </div>

      <BookingFormModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
        errors={errors}
        isAddingTicket={isAddingTicket}
      />

      {bookings && bookings.length > 0 ? (
        <DataTable
          columns={BOOKINGS_COLUMNS}
          layout='bookings'
          headerBg='bg-slate-300 dark:bg-slate-700'
          headerText='text-slate-700 dark:text-slate-300'
        >
          {bookings &&
            bookings.map((booking) => (
              <BookingRow
                booking={booking}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                key={booking.id}
              />
            ))}
        </DataTable>
      ) : (
        <NoDataFound text='No Bookings Found!' />
      )}
    </div>
  );
};

export default BookingManagement;

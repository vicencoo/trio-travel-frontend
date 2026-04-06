import { TicketModal } from './TicketModal';
import { usePlaneTicketsPage } from './usePlaneTicketsPage';
import { TicketTableRow } from './TicketTableRow';
import { DataTable } from '@/components/dataTable';
import { Pagination } from '@/components/pagination';
import { NoDataFound } from '@/components/noDataFound';
import { AdminPageHeader } from '@/components/adminPageHeader';
import { Spinner } from '@/components/spinner';
import { PlaneTakeoff } from '@/icons';
import { TICKET_COLUMNS } from './columns';

export const PlaneTicketsPage = () => {
  const {
    handleOpenModal,
    openModal,
    hadleTicketChange,
    handleImageChange,
    handleSubmit,
    planeTicket,
    handleDeleteTicket,
    data,
    handleEditTicket,
    handlePageChange,
    pageNumber,
    errors,
    isLoading,
    isAddingticket,
  } = usePlaneTicketsPage();

  if (isLoading) {
    return (
      <div className='flex w-full h-full items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-10 py-10 min-h-screen container'>
      <AdminPageHeader
        icon={<PlaneTakeoff className='text-white' />}
        iconBgColor='bg-indigo-600'
        label='Menaxhimi i Biletave'
        text='Shiko, modifiko dhe menaxho te gjitha biletave'
        buttonName='shto bilete'
        onClick={handleOpenModal}
      />

      {openModal && (
        <TicketModal
          handleOpenModal={handleOpenModal}
          openModal={openModal}
          planeTicket={planeTicket}
          hadleTicketChange={hadleTicketChange}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          isAddingticket={isAddingticket}
          errors={errors}
        />
      )}

      {data.tickets && data.tickets.length > 0 ? (
        <div className='flex flex-col gap-10 min-h-screen'>
          <div className='flex flex-col w-full gap-10 items-center min-h-[61vh] justify-between'>
            <DataTable
              headerBg='bg-indigo-500'
              headerText='text-white dark:text-slate-300'
              columns={TICKET_COLUMNS}
              layout='tickets'
            >
              {data.tickets.map((ticket, index) => (
                <TicketTableRow
                  ticket={ticket}
                  handleDelete={handleDeleteTicket}
                  key={index}
                  handleEdit={handleEditTicket}
                />
              ))}
            </DataTable>
            <Pagination
              onChange={handlePageChange}
              page={pageNumber}
              pages={data.totalPages || 1}
            />
          </div>
        </div>
      ) : (
        <div className='flex w-full justify-center py-14'>
          <NoDataFound text='no plane tickets found' />
        </div>
      )}
    </div>
  );
};

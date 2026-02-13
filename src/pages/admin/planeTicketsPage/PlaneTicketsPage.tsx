import FlightIcon from '@mui/icons-material/Flight';
import EuroIcon from '@mui/icons-material/Euro';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import { TicketModal } from './TicketModal';
import { DataTable } from '../../../components/dataTable';
import { usePlaneTicketsPage } from './usePlaneTicketsPage';
import { TicketTableRow } from './TicketTableRow';
import { NoDataFound } from '../../../components/noDataFound';
import { AdminPageHeader } from '../../../components/adminPageHeader/AdminPageHeader';
import { TICKET_COLUMNS } from '../../../columns';
import { Pagination } from '../../../components/pagination';
import { MetricCard } from './MetricCard';

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
  } = usePlaneTicketsPage();

  return (
    <div className='flex flex-col gap-10 py-10 min-h-screen container'>
      <AdminPageHeader
        icon={<FlightIcon className='text-white' />}
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
          errors={errors}
        />
      )}

      {data.tickets && data.tickets.length > 0 ? (
        <div className='flex flex-col gap-10 min-h-screen'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <MetricCard
              icon={<FlightIcon className='text-indigo-600' />}
              iconBg='bg-indigo-100'
              label='Totali i Biletave'
              value={data.totalTickets || 0}
            />
            <MetricCard
              icon={<EuroIcon className='text-green-600' />}
              iconBg='bg-green-100'
              label='Cmimi Mesatar'
              value={`${data.averagePrice || 0}€`}
            />
            <MetricCard
              icon={<ModeStandbyIcon className='text-red-600' />}
              iconBg='bg-red-50'
              label='Cmimi me i Ulet'
              value={`${data.minPrice || 0}€`}
            />
          </div>

          <div className='flex flex-col w-full gap-10 items-center min-h-[61vh] justify-between'>
            <DataTable
              headerBg='bg-indigo-500'
              headerText='text-white'
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

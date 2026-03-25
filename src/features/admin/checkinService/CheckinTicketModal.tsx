import { Modal } from '@/components/modal';
import type { CheckinTicketModalProps, TicketInfoProps } from './types';
import { Text } from '@/components/text';
import { Button } from '@/components/button';

const TicketInfo = ({ label, value, onClick, className }: TicketInfoProps) => {
  return (
    <div className='flex flex-col w-full p-3 sm:p-4 bg-slate-200 dark:bg-slate-600 rounded-xl'>
      <Text
        text={label}
        size='text-xs'
        font='font-semibold font-serif'
        className='capitalize text-slate-500'
      />
      <Text
        text={value}
        font='font-bold font-serif'
        className={`capitalize text-sm sm:text-base truncate ${className}`}
        onClick={onClick}
      />
    </div>
  );
};

export const CheckinTicketModal = ({
  closeModal,
  isModalOpen,
  activeTicket,
}: CheckinTicketModalProps) => {
  const initials = activeTicket?.client_name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');

  const time = activeTicket?.ticket_date
    ? new Date(activeTicket.ticket_date).toLocaleTimeString('sq-AL', {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null;

  const createdAt = activeTicket?.createdAt
    ? new Date(activeTicket.createdAt).toLocaleDateString('sq-AL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : '';

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      bgColor='bg-indigo-600'
      height='max-h-[90vh]'
      width='w-[92vw] sm:w-3/4 md:w-2/5 lg:w-1/3'
      padding='p-0'
    >
      <div className='flex flex-col w-full max-h-[90vh]'>
        <div className='flex flex-col gap-3 sm:gap-5 flex-shrink-0'>
          <div className='flex  px-4 sm:px-6 pt-4'>
            <Text
              text={'Detajet e Rezervimit'}
              size='text-xs'
              font='font-medium'
              className='uppercase text-slate-300 tracking-widest'
            />
          </div>

          <div className='flex items-center gap-3 sm:gap-4 px-4 sm:px-6 pb-5 sm:pb-6'>
            <span className='flex w-12 min-w-12 h-12 sm:w-14 sm:min-w-14 sm:h-14 items-center justify-center bg-indigo-400/90 rounded-lg text-base sm:text-lg font-bold text-white uppercase flex-shrink-0'>
              {initials}
            </span>
            <div className='flex flex-col gap-1 min-w-0'>
              <Text
                text={activeTicket?.client_name}
                size='text-base sm:text-lg'
                font='font-semibold font-serif'
                className='capitalize text-white truncate'
              />
              <Text
                text={activeTicket?.ticket_code}
                size='text-sm'
                font='font-semibold font-serif'
                className='text-white truncate'
              />
            </div>
          </div>
        </div>

        {/* ── Body (white card) ── */}
        <div className='flex flex-col gap-4 sm:gap-6 w-full overflow-y-auto hide-scrollbar bg-white dark:bg-slate-700 rounded-t-2xl p-4 sm:p-6 flex-1'>
          <div className='grid grid-cols-2 gap-3 sm:gap-4'>
            <TicketInfo label='Ora e Fluturimit' value={time ?? ''} />
            <TicketInfo
              label='Cmimi i Biletës'
              value={activeTicket?.ticket_price}
            />
            <TicketInfo label='Rezervuar Me' value={createdAt} />
            {/* <TicketInfo
              label='Kodi i Fluturimit'
              value={activeTicket?.ticket_code}
              className='cursor-pointer'
              onClick={() =>
                activeTicket?.ticket_code &&
                navigator.clipboard.writeText(activeTicket?.ticket_code)
              }
            /> */}
            <TicketInfo
              label='Kodi i Fluturimit'
              value={activeTicket?.ticket_code}
              className='cursor-pointer'
              onClick={() =>
                activeTicket?.ticket_code &&
                navigator.clipboard.writeText(activeTicket.ticket_code)
              }
            />
          </div>

          <Button
            name='u krye'
            variant='text'
            color='white'
            bgColor='#6366f1'
            bgHover='#4f46e5'
            onClick={closeModal}
          />
        </div>
      </div>
    </Modal>
  );
};

import { Card } from '@/components/card';
import type { CheckinTicketCardProps } from './types';
import { Text } from '@/components/text';
import { Button } from '@/components/button';
import { Check, Clock, CreditCard } from '@/icons';

export const CheckinTicketCard = ({
  ticket,
  toggleStatus,
  openModal,
  loadingId,
}: CheckinTicketCardProps) => {
  const initials = ticket.client_name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');

  const time = new Date(ticket.ticket_date).toLocaleTimeString('sq-AL', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <Card
      padding='p-5'
      bgColor='bg-white dark:bg-slate-700'
      borderColor='dark:border-slate-600'
      gap='gap-5'
      className='cursor-pointer'
      onClick={() => openModal(ticket)}
    >
      <div className='flex w-full items-center justify-between pb-5 border-b border-slate-200/50'>
        <div className='flex items-center gap-3'>
          <span className='flex w-10 h-10 rounded-full border border-green-700 bg-green-50 text-green-700 items-center justify-center text-sm font-semibold'>
            {initials}
          </span>
          <div className='flex flex-col'>
            <Text
              text={ticket.client_name}
              size='text-sm'
              font='font-semibold font-serif'
              className='text-slate-800 dark:text-slate-300 capitalize'
            />
            <Text
              text={ticket.ticket_code}
              size='text-xs'
              font='font-semibold'
              className='text-slate-500 truncate'
            />
          </div>
        </div>
        <div
          className={`flex items-center gap-2 border ${ticket.status === 'completed' ? 'bg-green-50 border-green-700 text-green-700' : 'bg-red-50 border-red-600 text-red-600'} px-5 py-2 rounded-3xl`}
        >
          <span
            className={`w-2 h-2 rounded-full ${ticket.status === 'completed' ? 'bg-green-700' : 'bg-red-600'}`}
          />
          <Text
            text={ticket.status === 'completed' ? 'I Regjistruar' : 'Ne Pritje'}
            size='text-sm'
            font='font-medium'
          />
        </div>
      </div>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center md:gap-5 gap-3'>
          <div className='flex items-center md:gap-2 gap-1 text-slate-500'>
            <Clock size={16} />
            <Text text={time} size='text-sm' font='font-medium font-serif' />
          </div>
          <div className='flex items-center md:gap-2 gap-1 text-slate-500'>
            <CreditCard size={16} className='text-blue-500' />
            <Text
              text={`${ticket.ticket_price}€`}
              size='text-sm'
              font='font-medium font-serif'
            />
          </div>
        </div>
        <Button
          name={ticket.status === 'completed' ? 'Zhbej' : 'Regjistro'}
          icon={ticket.status === 'pending' && <Check size={16} />}
          padding='7px 18px'
          variant='text'
          bgColor={ticket.status === 'completed' ? '#ef4444' : '#3b82f6'}
          bgHover={ticket.status === 'completed' ? '#ef4444' : '#3b82f6'}
          color='white'
          disabled={loadingId === ticket.id}
          onClick={(e) => {
            e.stopPropagation();
            if (ticket.id !== undefined) {
              toggleStatus(ticket.id);
            }
          }}
        />
      </div>
    </Card>
  );
};

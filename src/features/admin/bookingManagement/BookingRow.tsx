import { ActionMenu } from '@/components/actionMenu';
import { Text } from '@/components/text';
import { formattedPrice } from '@/utils/formattedPrice';
import type { BookingRowProps } from './types';
import { format } from 'date-fns';

export const BookingRow = ({
  booking,
  handleEdit,
  handleDelete,
}: BookingRowProps) => {
  const date = format(new Date(booking.ticket_date), 'dd-MM-yyyy');
  const hour = format(new Date(booking.ticket_date), 'HH:mm');
  return (
    <div className='grid grid-cols-6 items-center px-4 py-3 border-b border-gray-300 dark:border-slate-700 last:border-b-0 md:gap-0 gap-1 bg-white/60 dark:bg-slate-800'>
      <div className='col-span-2 flex items-center gap-2'>
        <Text
          text={booking.ticket_code}
          size='md:text-sm text-xs'
          font='md:font-medium font-semibold'
          className='text-slate-700 dark:text-slate-400 pr-2 truncate'
        />
      </div>
      <Text
        text={booking.client_name}
        size='md:text-sm text-xs'
        font='font-medium'
        className='capitalize col-span-2 md:col-span-1 text-slate-900 dark:text-slate-300'
      />
      <Text
        text={`${formattedPrice(Number(booking.ticket_price))}€`}
        size='text-sm'
        font='font-semibold font-serif'
        className='hidden md:flex col-span-1 text-slate-900 dark:text-slate-300'
      />
      <div className='flex md:flex-row flex-col gap-0 md:gap-2 truncate'>
        <Text
          text={date}
          size='md:text-sm text-xs'
          font='font-medium'
          className='col-span-1 text-slate-700 dark:text-slate-500'
        />
        <Text
          text={hour}
          size='md:text-sm text-xs'
          font='font-medium'
          className='col-span-1 text-slate-700 dark:text-slate-500'
        />
      </div>

      <ActionMenu
        enableEdit
        onEdit={() => handleEdit(booking)}
        enableDelete
        onDelete={() => booking.id && handleDelete(booking.id)}
      />
    </div>
  );
};

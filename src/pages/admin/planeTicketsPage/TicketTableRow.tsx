import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Image } from '../../../components/image';
import { Text } from '../../../components/text';
import type { PlaneTicket } from '../../../types';

type TicketItemProps = {
  ticket: PlaneTicket;
  handleDelete: (ticketId: string) => void;
  handleEdit: (ticket: PlaneTicket) => void;
};

export const TicketTableRow = ({
  ticket,
  handleDelete,
  handleEdit,
}: TicketItemProps) => {
  const firstImage = ticket.ticketImages?.[0];
  const image =
    typeof firstImage === 'object' && 'image' in firstImage
      ? firstImage.image
      : '';
  return (
    <div className='grid md:grid-cols-10 grid-cols-11 items-center px-4 py-1 border-b border-gray-300 last:border-b-0 md:gap-0 gap-1'>
      <div className='col-span-2 flex items-center gap-2'>
        <Image src={image} className='w-14 h-14 rounded-lg object-cover' />
      </div>
      <Text
        text={ticket.from}
        size='text-sm'
        font='font-semibold'
        className='capitalize md:col-span-1 col-span-2'
      />
      <Text
        text={ticket.to}
        size='text-sm'
        font='font-semibold'
        className='capitalize md:col-span-1 col-span-3'
      />
      <Text
        text={ticket.departureAirport}
        size='text-xs'
        font='font-medium'
        className='hidden md:flex uppercase px-4 py-2 w-max bg-blue-100 text-blue-600 rounded-2xl col-span-2'
      />
      <Text
        text={ticket.arrivalAirport}
        size='text-xs'
        font='font-medium'
        className='hidden md:flex uppercase px-4 py-2 w-max bg-blue-100 text-blue-600 rounded-2xl col-span-2'
      />
      <Text
        text={`${ticket.price}€`}
        font='font-bold'
        size='text-lg'
        className='capitalize text-green-600 md:col-span-1 col-span-3'
      />
      <div className='col-span-1 flex items-center justify-end md:gap-5 gap-3'>
        <ModeEditOutlineOutlinedIcon
          className='text-blue-400 hover:text-blue-600 cursor-pointer'
          onClick={() => handleEdit(ticket)}
        />
        <DeleteOutlinedIcon
          className='text-red-400 hover:text-red-600 cursor-pointer'
          onClick={() => ticket._id && handleDelete(ticket._id)}
        />
      </div>
    </div>
  );
};

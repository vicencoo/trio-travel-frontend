import CloseIcon from '@mui/icons-material/Close';
import { Modal } from '../../../components/modal';
import { Input } from '../../../components/input';
import { Text } from '../../../components/text';
import { Button } from '../../../components/button';
import { ImageUploader } from '../../../components/imageUploader';
import type { PlaneTicket, TicketImage } from '../../../types';

type TicketModalProps = {
  openModal: boolean;
  handleOpenModal: () => void;
  hadleTicketChange: (key: string, value: string) => void;
  handleImageChange: (images: (File | string | TicketImage)[]) => void;
  handleSubmit: () => void;
  planeTicket: PlaneTicket;
};

export const TicketModal = ({
  openModal,
  handleOpenModal,
  hadleTicketChange,
  handleSubmit,
  handleImageChange,
  planeTicket,
}: TicketModalProps) => {
  return (
    <Modal
      isOpen={openModal}
      width={'w-4/5 md:w-1/2'}
      padding='0'
      height='h-[70vh]'
      onClose={handleOpenModal}
    >
      <div className='flex w-full bg-indigo-500 px-6 py-4 items-center justify-between text-white'>
        <Text
          text={planeTicket._id ? 'Edito Bileten' : 'Shto Bilete Te Re'}
          size='text-lg'
          font='font-bold'
          className='select-none'
        />
        <CloseIcon
          className='cursor-pointer hover:text-red-500'
          onClick={handleOpenModal}
        />
      </div>
      <div className='flex flex-col gap-4 px-6 py-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <Input
            label='Nga (from)'
            placeholder='tirana'
            value={planeTicket.from}
            onChange={(e) => hadleTicketChange('from', e.target.value)}
          />
          <Input
            label='Ne (to)'
            placeholder='rome'
            value={planeTicket.to}
            onChange={(e) => hadleTicketChange('to', e.target.value)}
          />
          <Input
            label='Aeroporti Nisjes (departure airport)'
            placeholder='tia'
            value={planeTicket.departureAirport}
            onChange={(e) =>
              hadleTicketChange('departureAirport', e.target.value)
            }
          />
          <Input
            label='Aeroporti Mberritjes (arrival airport)'
            placeholder='fco'
            value={planeTicket.arrivalAirport}
            onChange={(e) =>
              hadleTicketChange('arrivalAirport', e.target.value)
            }
          />
          <Input
            label='Cmimi Fillestar (initial price)'
            placeholder='0'
            type='number'
            value={planeTicket.price || ''}
            onChange={(e) => hadleTicketChange('price', e.target.value)}
          />
        </div>

        <ImageUploader
          value={planeTicket?.ticketImages || []}
          maxImages={1}
          onChange={handleImageChange}
          imageKey='image'
        />

        <div className='flex gap-3 '>
          <Button
            name='anulo'
            fullWidth
            color='black'
            bgHover='red'
            onClick={handleOpenModal}
          />
          <Button
            name='konfirmo bileten'
            fullWidth
            color='white'
            border='transparent'
            borderHover='#3730a3'
            bgColor='#6366f1'
            bgHover='#4f46e5'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </Modal>
  );
};

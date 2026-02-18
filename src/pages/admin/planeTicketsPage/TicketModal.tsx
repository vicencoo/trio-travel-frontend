import CloseIcon from '@mui/icons-material/Close';
import type { TicketModalProps } from './types';
import { Modal } from '@/components/modal';
import { Text } from '@/components/text';
import { Input } from '@/components/input';
import { ImageUploader } from '@/components/imageUploader';
import { Button } from '@/components/button';

export const TicketModal = ({
  openModal,
  handleOpenModal,
  hadleTicketChange,
  handleSubmit,
  handleImageChange,
  planeTicket,
  errors,
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
          text={planeTicket.id ? 'Edito Bileten' : 'Shto Bilete Te Re'}
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
          <div className='flex flex-col gap-1'>
            <Input
              label='Nga (from) *'
              placeholder='tirana'
              value={planeTicket.from}
              onChange={(e) => hadleTicketChange('from', e.target.value)}
              errorMessage={errors?.from}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <Input
              label='Ne (to) *'
              placeholder='rome'
              value={planeTicket.to}
              onChange={(e) => hadleTicketChange('to', e.target.value)}
              errorMessage={errors?.to}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <Input
              label='Aeroporti Nisjes (departure airport) *'
              placeholder='tia'
              value={planeTicket.departure_airport}
              onChange={(e) =>
                hadleTicketChange('departure_airport', e.target.value)
              }
              errorMessage={errors?.departure_airport}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <Input
              label='Aeroporti Mberritjes (arrival airport) *'
              placeholder='fco'
              value={planeTicket.arrival_airport}
              onChange={(e) =>
                hadleTicketChange('arrival_airport', e.target.value)
              }
              errorMessage={errors?.arrival_airport}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <Input
              label='Cmimi Fillestar (initial price) *'
              placeholder='0'
              type='number'
              value={planeTicket.price || ''}
              onChange={(e) => hadleTicketChange('price', e.target.value)}
              errorMessage={errors?.price}
            />
          </div>
        </div>

        <ImageUploader
          value={planeTicket?.ticket_images || []}
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

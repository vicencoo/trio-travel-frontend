import { Modal } from '@/components/modal';
import type { InsuranceModalProps } from './types';
import { Button } from '@/components/button';
import { Text } from '@/components/text';
import { Input } from '@/components/input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LayersPlus } from '@/icons';

export const InsuranceModal = ({
  isModalOpen,
  closeModal,
  handleChangeData,
  data,
  handleSave,
  errors,
  isAddingInsurance,
}: InsuranceModalProps) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} width='w-4/5 md:w-2/5'>
      <div className='flex w-full border-b border-b-slate-300 dark:border-slate-700 p-5 items-center gap-3 text-slate-900 dark:text-slate-300'>
        <LayersPlus />
        <Text
          text={'Shto Siguracion'}
          size='text-xl'
          font='font-medium font-serif'
        />
      </div>

      <div className='flex flex-col w-full p-4 gap-4 max-h-[75vh] overflow-y-auto'>
        <Input
          label='Emër / Mbiemër'
          placeholder='Emër mbiemër i klientit'
          value={data?.client_name}
          onChange={(e) => handleChangeData('client_name', e.target.value)}
          errorMessage={errors.client_name}
        />
        <Input
          label='Nr. Telefoni'
          type='tel'
          placeholder='+355 69 548 9654'
          value={data?.contact_number}
          onChange={(e) => handleChangeData('contact_number', e.target.value)}
          errorMessage={errors.contact_number}
        />
        <Input
          label='Targa e Mjetit'
          placeholder='AA555AB'
          value={data?.car_plate}
          onChange={(e) => handleChangeData('car_plate', e.target.value)}
          errorMessage={errors.car_plate}
        />

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>
            Data e Skadencës *
          </label>
          <DatePicker
            selected={
              data?.expiration_date ? new Date(data.expiration_date) : null
            }
            onChange={(date: Date | null) =>
              handleChangeData(
                'expiration_date',
                date ? date.toISOString() : '',
              )
            }
            withPortal
            dateFormat='yyyy-MM-dd'
            placeholderText='Selektoni datën e skadencës'
            showYearDropdown
            showMonthDropdown
            dropdownMode='select'
            className='w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-600 px-3 py-2 text-base focus:outline-none ring-2 ring-blue-50 focus:ring-blue-500 cursor-pointer'
          />

          {/* {errors?.ticket_date && (
            <span className='text-xs text-red-500'>{errors.ticket_date}</span>
          )} */}
        </div>

        {/* Actions */}
        <div className='flex justify-end gap-3 pt-2'>
          <Button
            name='anulo'
            padding='8px 16px'
            border='#cbd5e1'
            color='#64748b'
            bgHover='#f1f5f9'
            hoverColor='#334155'
            bgColor='rgba(255, 255, 255, 0.4'
            onClick={closeModal}
          />
          <Button
            name='Ruaj'
            padding='8px 20px'
            border='transparent'
            borderHover='transparent'
            bgColor='#2563eb'
            bgHover='#1d4ed8'
            color='white'
            onClick={handleSave}
            disabled={isAddingInsurance}
          />
        </div>
      </div>
    </Modal>
  );
};

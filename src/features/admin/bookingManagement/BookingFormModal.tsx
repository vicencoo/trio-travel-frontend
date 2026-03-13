import { Modal } from '@/shared/components/modal';
import { LayersPlus } from 'lucide-react';
import { Text } from '@/shared/components/text';
import { Input } from '@/shared/components/input';
import { Button } from '@/shared/components/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type { WorkFormModalProps } from './types';

export const BookingFormModal = ({
  isModalOpen,
  closeModal,
  formData,
  handleChange,
  handleSave,
  errors,
}: WorkFormModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      padding='p-0'
      width='w-4/5 md:w-2/5'
    >
      <div className='flex w-full border-b border-b-slate-300 dark:border-slate-700 p-5 items-center gap-3 text-slate-900 dark:text-slate-300'>
        <LayersPlus />
        <Text
          text={formData.id ? 'Edito Rezervim' : 'Shto Rezervim të Ri'}
          size='text-xl'
          font='font-medium font-serif'
        />
      </div>

      <div className='flex flex-col w-full p-4 gap-4 max-h-[75vh] overflow-y-auto'>
        <Input
          label='Emri i Klientit *'
          placeholder='Arta Kelmendi'
          value={formData.client_name}
          onChange={(e) => handleChange('client_name', e.target.value)}
          errorMessage={errors?.client_name}
        />

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>
            Data e Check-In *
          </label>

          <DatePicker
            selected={
              formData.ticket_date ? new Date(formData.ticket_date) : null
            }
            onChange={(date: Date | null) =>
              handleChange('ticket_date', date ? date.toISOString() : '')
            }
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={10}
            dateFormat='yyyy-MM-dd HH:mm'
            showMonthDropdown
            showYearDropdown
            dropdownMode='select'
            placeholderText='Selektoni datën dhe orën'
            className='w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-600 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
          />

          {errors?.ticket_date && (
            <span className='text-xs text-red-500'>{errors.ticket_date}</span>
          )}
        </div>
        <Input
          label='Kodi i biletës *'
          value={formData.ticket_code}
          onChange={(e) => handleChange('ticket_code', e.target.value)}
          errorMessage={errors?.ticket_code}
        />
        <Input
          label='Shuma Totale (€) *'
          type='number'
          placeholder='0.00'
          value={formData.ticket_price}
          onChange={(e) => handleChange('ticket_price', e.target.value)}
          errorMessage={errors?.ticket_price}
        />

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
          />
        </div>
      </div>
    </Modal>
  );
};

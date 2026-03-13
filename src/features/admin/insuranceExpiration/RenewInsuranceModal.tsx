import { Modal } from '@/shared/components/modal';
import { Text } from '@/shared/components/text';
import type { RenewInsuranceModalProps } from './types';
import { Close } from '@mui/icons-material';
import { Button } from '@/shared/components/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const RenewInsuranceModal = ({
  closeModal,
  isModalOpen,
  insurance,
  handleChangeExpDate,
  handleRenewInsurance,
  newExpirationDate,
}: RenewInsuranceModalProps) => {
  const INFO = [
    { label: 'targa e makinës', value: insurance?.car_plate },
    { label: 'skadimi i mëparshëm', value: insurance?.expiration_date },
  ];
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      width='w-4/5 md:w-2/6'
      padding='px-5 py-4'
    >
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-1 w-full relative border-b pb-3 border-slate-400/50 dark:border-slate-600/80'>
          <Text
            text={'Rinovo Siguracionin'}
            size='text-xs'
            font='font-medium font-serif'
            className='uppercase tracking-wider text-orange-500'
          />
          <Text
            text={insurance?.client_name}
            size='text-lg'
            font='font-medium'
            className='capitalize text-slate-900 dark:text-slate-200'
          />
          <span className='absolute flex top-0 right-0 cursor-pointer w-8 h-8 items-center justify-center bg-gray-200 text-gray-500 dark:bg-slate-500 dark:text-slate-300 rounded-full'>
            <Close onClick={closeModal} fontSize='inherit' />
          </span>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          {INFO.map((insur, index) => (
            <div
              className='flex flex-col gap-2 py-2 px-4 bg-gray-200 dark:bg-slate-600 rounded-lg'
              key={index}
            >
              <Text
                text={insur.label}
                size='text-[10px]'
                className='uppercase tracking-wider text-gray-400 dark:text-slate-300'
              />
              <Text
                text={insur.value}
                size='text-sm'
                font='font-semibold'
                className='uppercase tracking-wider text-slate-900 dark:text-slate-200'
              />
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-xs font-medium text-slate-700 dark:text-slate-300 uppercase'>
            Data e Re e Skadencës *
          </label>
          <DatePicker
            selected={newExpirationDate ? new Date(newExpirationDate) : null}
            onChange={(date: Date | null) =>
              handleChangeExpDate(date ? date.toISOString() : '')
            }
            withPortal
            dateFormat='yyyy-MM-dd'
            placeholderText='Selektoni datën e skadencës'
            showYearDropdown
            showMonthDropdown
            dropdownMode='select'
            className='w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-500 px-3 py-2 text-base focus:outline-none ring-2 ring-blue-50 focus:ring-blue-500 cursor-pointer'
          />
        </div>

        <div className='flex w-full gap-3'>
          <Button
            name='anullo'
            fullWidth
            bgHover='#ef4444'
            borderHover='transparent'
            onClick={closeModal}
          />
          <Button
            name='konfirmo rinovimin'
            fullWidth
            border='transparent'
            color='white'
            bgColor='#f97316 '
            bgHover='#ea580c '
            borderHover='transparent'
            onClick={() => insurance?.id && handleRenewInsurance(insurance?.id)}
          />
        </div>
      </div>
    </Modal>
  );
};

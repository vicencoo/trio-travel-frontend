import { Text } from '@/shared/components/text';
import type { InsuranceRowProps } from './types';
import { ActionMenu } from '@/shared/components/actionMenu';

export const InsuranceRow = ({
  insurance,
  handleEdit,
  handleDelete,
}: InsuranceRowProps) => {
  return (
    <div className='grid grid-cols-9 items-center px-4 py-3 border-b border-gray-300 dark:border-slate-700 last:border-b-0 md:gap-0 gap-1 bg-white/60 dark:bg-slate-800'>
      <Text
        text={insurance.client_name}
        size='md:text-sm text-xs'
        font='md:font-medium font-semibold'
        className='md:col-span-2 col-span-3 capitalize text-slate-700 dark:text-slate-300 truncate'
      />
      <Text
        text={insurance.contact_number}
        size='md:text-sm text-xs'
        font='font-medium'
        className='capitalize md:col-span-2 col-span-3  text-slate-900 dark:text-slate-300'
      />
      <div className='col-span-2 flex w-max py-2 px-4 rounded-lg bg-slate-200 dark:bg-slate-700'>
        <Text
          text={insurance.car_plate}
          size='md:text-sm text-xs'
          font='font-medium'
          className='uppercase text-slate-900 dark:text-slate-300'
        />
      </div>
      <Text
        text={insurance.expiration_date}
        size='md:text-sm text-xs'
        font='font-medium'
        className='hidden md:flex col-span-2  text-slate-900 dark:text-slate-300'
      />

      <ActionMenu
        enableEdit
        onEdit={() => handleEdit(insurance)}
        enableDelete
        onDelete={() => insurance.id && handleDelete(insurance.id)}
      />
    </div>
  );
};

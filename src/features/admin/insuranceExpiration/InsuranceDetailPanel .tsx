import { Close, Refresh } from '@mui/icons-material';
import type { InsuranceDetailPanelProps } from './types';
import './styles.css';
import { Text } from '@/shared/components/text';
import { Button } from '@/shared/components/button';

export const InsuranceDetailPanel = ({
  closePanel,
  insurance,
  isPanelOpen,
  openModal,
}: InsuranceDetailPanelProps) => {
  if (!isPanelOpen) return null;

  const name = insurance?.client_name.split(' ');
  const initials = name?.map((n) => n.slice(0, 1)).join('');

  const INFO = [
    { label: 'targa e mjetit', value: insurance?.car_plate },
    { label: 'numër kontakti', value: insurance?.contact_number },
    { label: 'data e skadencës', value: insurance?.expiration_date },
    { label: 'emri i klientit', value: insurance?.client_name },
  ];

  return (
    <div
      className='overlay-fade fixed inset-0 flex justify-end w-full h-full z-50 bg-black/30'
      onClick={closePanel}
    >
      <div
        className='panel-slide flex flex-col md:w-2/6 sm:w-2/4 w-3/4 bg-white dark:bg-slate-700 shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-col gap-4 w-full bg-slate-900  justify-between py-5 md:px-7 px-5 relative'>
          {/* <div className='flex flex-col gap-3'> */}
          <Text
            text={'detajet e siguracionit'}
            size='text-xs'
            font='font-medium'
            className='text-orange-400 tracking-widest uppercase'
          />
          <div className='flex items-center gap-3'>
            <span className='flex w-14 h-14 items-center justify-center rounded-full border-2 border-yellow-600 bg-yellow-50 text-yellow-600 uppercase font-bold '>
              {initials}
            </span>
            <div className='flex flex-col'>
              <Text
                text={insurance?.client_name}
                font='font-semibold font-serif'
                className='text-white capitalize'
              />
              <Text
                text={insurance?.contact_number}
                size='text-sm'
                font='font-medium'
                className='tracking-wider text-gray-400'
              />
            </div>
            {/* </div> */}
          </div>
          <span className='absolute top-3 right-3 flex w-7 min-w-7 h-7 rounded-full bg-slate-700  text-white items-center justify-center hover:scale-105 transition-all duration-200 will-change-transform'>
            <Close
              onClick={closePanel}
              className='cursor-pointer'
              fontSize='inherit'
            />
          </span>
        </div>
        <div className='flex-1 flex flex-col w-full py-5 px-5 md:px-7 justify-between'>
          <div className='flex flex-col gap-7'>
            {INFO.map((item, index) => (
              <div
                className='flex items-center w-full justify-between pb-5 border-b last:border-b-0 border-slate-400/50 dark:border-slate-500/50'
                key={index}
              >
                <Text
                  text={item.label}
                  size='text-xs'
                  font='font-medium'
                  className='uppercase tracking-wider text-gray-500 dark:text-slate-400'
                />
                <Text
                  text={item.value}
                  size='text-sm'
                  font='font-medium'
                  className='uppercase tracking-wider text-slate-800 dark:text-slate-300'
                />
              </div>
            ))}
          </div>
          <div className='flex w-full border-t pt-4 border-slate-400/50 dark:border-slate-500/50'>
            <Button
              name='rinovo siguracionin'
              fullWidth
              icon={<Refresh />}
              color='white'
              border='transparent'
              bgColor='#f97316'
              bgHover='#ea580c'
              borderHover='transparent'
              onClick={() => insurance && openModal(insurance)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

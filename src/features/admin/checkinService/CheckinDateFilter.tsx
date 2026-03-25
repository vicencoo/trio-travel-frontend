import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Text } from '@/components/text';
import DatePicker from 'react-datepicker';
import type { CheckinDateFilterProps } from './types';
import { ChevronLeft, ChevronRight } from '@/icons';
import 'react-datepicker/dist/react-datepicker.css';

export const CheckinDateFilter = ({
  isCurrentDay,
  formattedDate,
  handlePreviousDay,
  handleNextDay,
  handleSetCurrentDay,
  dateFilter,
  handleDateChange,
  stats,
}: CheckinDateFilterProps) => {
  return (
    <Card
      padding='p-5'
      bgColor='bg-white dark:bg-slate-700'
      borderColor='dark:border-slate-600'
      className='overflow-visible z-[9998]'
    >
      <div className='flex md:flex-row flex-col w-full md:items-center items-start md:justify-between md:gap-0 gap-5 select-none'>
        <div className='flex flex-col gap-1 truncate'>
          <Text
            text={isCurrentDay ? 'Fluturimet e Sotme' : 'Fluturimet për'}
            size='text-lg'
            font='font-semibold font-serif'
            className='text-slate-900 dark:text-slate-300'
          />
          <Text
            text={formattedDate}
            size='text-sm'
            className='text-slate-500 dark:text-slate-400 capitalize'
          />
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <span
              className='flex w-10 h-10 border rounded-lg items-center justify-center cursor-pointer hover:text-slate-900 text-slate-500 dark:text-slate-400 dark:hover:text-slate-300 border-slate-300 dark:border-slate-500 transition-colors duration-200'
              onClick={handlePreviousDay}
            >
              <ChevronLeft />
            </span>
            <DatePicker
              selected={dateFilter}
              onChange={handleDateChange}
              withPortal
              dateFormat='yyyy-MM-dd'
              placeholderText='Select date and time'
              showMonthDropdown
              showYearDropdown
              dropdownMode='select'
              className='w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-300 px-3 py-2 text-base focus:outline-none ring-2 ring-transparent  focus:ring-blue-500 cursor-pointer'
            />
            <span
              className='flex w-10 h-10 border rounded-lg items-center justify-center cursor-pointer hover:text-slate-900 text-slate-500 dark:text-slate-400 dark:hover:text-slate-300 border-slate-300 dark:border-slate-500 transition-colors duration-200'
              onClick={handleNextDay}
            >
              <ChevronRight />
            </span>
          </div>
          {!isCurrentDay && (
            <Button
              name='sot'
              variant='text'
              padding='8px'
              bgColor='#dbeafe'
              bgHover='#3b82f6'
              color='#3b82f6'
              hoverColor='#dbeafe'
              onClick={handleSetCurrentDay}
            />
          )}
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex w-full items-center justify-between'>
          <Text
            text={'Progresi i Check-in'}
            size='text-xs'
            font='font-bold font-serif'
            className='text-slate-600 dark:text-slate-400'
          />
          <Text
            text={`${stats?.completedTickets}/${stats?.totalTickets} Pasagjerë`}
            size='text-xs'
            font='font-bold font-serif'
            className='text-violet-500'
          />
        </div>

        <div className='relative flex w-full h-1.5 overflow-hidden bg-slate-300 dark:bg-slate-600 rounded-2xl'>
          <div
            className='absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-r-2xl transition-all duration-500'
            style={{ width: `${stats?.progress}%` }}
          />
        </div>
        <Text
          text={`${stats?.progress}% e përfunduar`}
          size='text-[10px]'
          className='text-slate-400 dark:text-slate-500'
        />
      </div>
    </Card>
  );
};

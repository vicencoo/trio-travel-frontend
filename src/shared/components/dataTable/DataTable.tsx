import { Text } from '../text';
import type { DataTableProps } from './types';

export const DataTable = ({
  headerBg = 'bg-gray-100',
  headerText = 'text-gray-500',
  columns,
  layout = 'tickets',
  children,
}: DataTableProps) => {
  const gridClasses = {
    tickets: 'md:grid-cols-10 grid-cols-11',
    property: 'grid-cols-8',
    package: 'md:grid-cols-8 grid-cols-7',
    destination: 'md:grid-cols-5 grid-cols-6',
    bookings: 'grid-cols-6',
    insurances: 'grid-cols-9',
  };

  const gridClass = gridClasses[layout];
  return (
    <div className='flex flex-col rounded-lg shadow-md border border-gray-200 dark:border-slate-700 w-full'>
      <div
        className={`grid ${gridClass} items-center px-4 py-3 ${headerBg} ${headerText} border-b border-gray-200 dark:border-slate-700 rounded-t-lg`}
      >
        {columns &&
          columns.map((column) => (
            <Text
              key={column.header}
              text={column.header}
              size='text-xs'
              font='font-medium'
              className={`uppercase ${column.className} tracking-widest`}
            />
          ))}
        <Text
          text={'veprimet'}
          size='text-xs'
          font='font-medium'
          className={`uppercase tracking-widest col-span-1 hidden md:flex w-full justify-end `}
        />
      </div>
      {children}
    </div>
  );
};

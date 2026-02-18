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
    hotel: 'md:grid-cols-7 grid-cols-8',
    destination: 'md:grid-cols-5 grid-cols-6',
  };

  const gridClass = gridClasses[layout];
  return (
    <div className='flex flex-col rounded-lg shadow-md border border-gray-200 w-full'>
      <div
        className={`grid ${gridClass} px-4 py-3 ${headerBg} ${headerText} border-b rounded-t-lg`}
      >
        {columns &&
          columns.map((column) => (
            <Text
              key={column.header}
              text={column.header}
              size='text-sm'
              font='font-medium'
              className={`uppercase ${column.className}`}
            />
          ))}
        <Text
          text={'veprimet'}
          size='text-sm'
          font='font-medium'
          className={`uppercase col-span-1 hidden md:flex w-full justify-end `}
        />
      </div>
      {children}
    </div>
  );
};

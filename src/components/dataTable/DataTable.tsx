import { Text } from '../text';
import type { ReactNode } from 'react';

type Columns = {
  key?: string;
  header?: string;
  className?: string;
};

type DataTableProps = {
  headerBg?: string;
  headerText?: string;
  columns: Columns[];
  layout?: 'tickets' | 'property' | 'package' | 'hotel';
  children: ReactNode;
};

export const DataTable = ({
  headerBg = 'bg-gray-100',
  headerText = 'text-gray-500',
  columns,
  layout = 'tickets',
  children,
}: DataTableProps) => {
  const gridClasses = {
    tickets: 'md:grid-cols-10 grid-cols-11',
    property: 'grid-cols-7',
    package: 'md:grid-cols-8 grid-cols-7',
    hotel: 'md:grid-cols-7 grid-cols-8',
  };

  const gridClass = gridClasses[layout];
  return (
    <div className='flex flex-col rounded-lg overflow-hidden shadow-md border border-gray-200 w-full'>
      <div
        className={`grid ${gridClass} px-4 py-3 ${headerBg} ${headerText} border-b`}
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
          className={`uppercase col-span-1 flex w-full justify-end`}
        />
      </div>
      {children}
    </div>
  );
};

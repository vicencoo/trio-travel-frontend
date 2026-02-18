import type { ReactNode } from 'react';

type Columns = {
  key?: string;
  header?: string;
  className?: string;
};

export type DataTableProps = {
  headerBg?: string;
  headerText?: string;
  columns: Columns[];
  layout?: 'tickets' | 'property' | 'package' | 'hotel' | 'destination';
  children: ReactNode;
};

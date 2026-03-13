import type { ChangeEvent } from 'react';

export type PaginationProps = {
  pages: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
};

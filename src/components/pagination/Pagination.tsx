import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import type { PaginationProps } from './types';

export const Pagination = ({ pages, page, onChange }: PaginationProps) => {
  return (
    <Stack spacing={2}>
      <MuiPagination
        count={pages}
        page={page}
        siblingCount={0}
        onChange={onChange}
      />
    </Stack>
  );
};

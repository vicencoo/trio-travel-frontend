import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import type { PaginationProps } from './types';

export const Pagination = ({ pages, page, onChange }: PaginationProps) => {
  return (
    <Stack spacing={2}>
      <MuiPagination
        // className='bg-slate-700'
        count={pages}
        page={page}
        siblingCount={0}
        onChange={onChange}
        sx={{
          /* Light mode */
          '& .MuiPaginationItem-root': {
            color: '#0f172a !important', // slate-900
          },

          '& .Mui-selected': {
            backgroundColor: '#334155 !important',
            color: '#ffffff !important',
            '&:hover': {
              backgroundColor: '#334155 !important', // keep same on hover
            },
          },

          /* Dark mode (Tailwind .dark class on html/body) */
          '.dark & .MuiPaginationItem-root': {
            color: '#cbd5e1 !important', // slate-300
          },

          '.dark & .Mui-selected': {
            backgroundColor: '#cbd5e1 !important',
            color: '#0f172a !important',
          },
        }}
      />
    </Stack>
  );
};

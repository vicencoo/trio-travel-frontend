import { Box, Skeleton } from '@mui/material';

export const PlaneTicketSkeleton = () => {
  return (
    <Box className='flex w-full h-[250px] relative overflow-hidden border border-gray-300 rounded-3xl'>
      <Skeleton
        variant='rectangular'
        animation={'wave'}
        className='flex w-1/2 h-full'
        height='100%'
      />
      <Box className='absolute right-0 h-full bg-white w-3/5 rounded-l-3xl overflow-hidden px-7 py-5 flex flex-col justify-between'>
        <Box className='flex flex-col gap-1'>
          <Box className='flex w-full items-center gap-2'>
            <Skeleton variant='text' width={60} animation={'pulse'} />
            <Skeleton
              variant='rectangular'
              width='100%'
              height={2}
              animation={'wave'}
            />
            <Skeleton variant='text' width={60} animation={'pulse'} />
          </Box>
          <Box className='flex w-full items-center justify-between'>
            <Skeleton
              variant='text'
              width={70}
              animation={'wave'}
              height={35}
            />
            <Skeleton
              variant='text'
              width={30}
              animation={'wave'}
              height={35}
            />
            <Skeleton
              variant='text'
              width={70}
              animation={'wave'}
              height={35}
            />
          </Box>
        </Box>

        <Box className='flex flex-col gap-1'>
          <Skeleton variant='text' width={100} height={20} />
          <Box className='flex items-end gap-1'>
            <Skeleton variant='text' width={40} height={50} />
            <Skeleton variant='text' width={35} height={25} />
          </Box>
        </Box>

        <Skeleton variant='rounded' width='100%' height={35} />
      </Box>
    </Box>
  );
};

import { Box, Skeleton } from '@mui/material';

export const PropertyCardSkeleton = () => {
  return (
    <Box className='flex flex-col w-full h-[440px] rounded-lg overflow-hidden border border-gray-300'>
      <Box className='relative w-full h-[230px]'>
        <Skeleton
          className='flex h-full'
          width='100%'
          height='100%'
          animation={'wave'}
          variant='rectangular'
        />
        <Skeleton
          className='absolute top-2 left-2'
          variant='rounded'
          width={60}
          height={20}
        />
      </Box>
      <Box className='flex flex-col px-3 py-3 h-[210px] justify-between'>
        <Skeleton variant='text' width='90%' height={45} animation={'wave'} />
        <Skeleton variant='text' width='65%' height={30} animation={'wave'} />
        <Box className='flex gap-5'>
          <Skeleton variant='text' width='15%' height={30} animation={'wave'} />
          <Skeleton variant='text' width='15%' height={30} animation={'wave'} />
          <Skeleton variant='text' width='15%' height={30} animation={'wave'} />
        </Box>
        <Skeleton width='100%' height={3} />
        <Box className='flex items-center w-full justify-between'>
          <Skeleton width='40%' variant='text' height={45} />
          <Skeleton width='40%' variant='rounded' height={40} />
        </Box>
      </Box>
    </Box>
  );
};

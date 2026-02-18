import { Box, Skeleton } from '@mui/material';

export const PackageCardSkeleton = () => {
  return (
    <Box className='flex flex-col border h-[440px] rounded-3xl overflow-hidden relative bg-gray-200'>
      <Box className='bg-white h-[210px] rounded-t-3xl absolute bottom-0  border w-full px-5 py-4 flex flex-col justify-between overflow-hidden'>
        <Skeleton width='80%' height={30} animation={'wave'} />
        <Box className='flex flex-col gap-3'>
          <Box className='flex w-full items-center justify-between'>
            <Skeleton width={120} variant='text' animation={'wave'} />
            <Skeleton width={80} variant='circular' />
          </Box>

          <Skeleton width={90} variant='text' animation={'wave'} />

          <Box className='flex w-full items-center justify-between'>
            <Skeleton width='55%' variant='text' animation={'wave'} />
            <Skeleton width={100} variant='circular' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

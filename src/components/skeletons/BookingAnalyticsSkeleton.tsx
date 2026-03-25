import { Box, Skeleton } from '@mui/material';

export const BookingAnalyticsSkeleton = () => {
  return (
    <Box className='grid md:grid-cols-3 gap-10 items-center w-full h-[60vh]'>
      <Box className={'col-span-2 flex flex-col gap-5'}>
        <Skeleton variant='text' width={'30%'} height={30} />
        <Skeleton variant='rectangular' width={'100%'} height={250} />
      </Box>
      <Box className={'col-span-1 flex flex-col gap-5'}>
        <Skeleton variant='text' width={'30%'} height={30} />
        <Box className='relative' width={200} height={200}>
          <Skeleton
            variant='circular'
            width='100%'
            height='100%'
            animation='wave'
          />
          <Box
            className='absolute rounded-full bg-white'
            sx={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50%',
              height: '50%',
            }}
          />
        </Box>
        <Box className={'flex gap-5'}>
          <Skeleton variant='text' width={'30%'} height={30} />
          <Skeleton variant='text' width={'30%'} height={30} />
        </Box>
      </Box>
    </Box>
  );
};

import { Text } from '@/shared/components/text';

type DashboardHeaderProps = {
  formattedDate: string;
};

export const DashboardHeader = ({ formattedDate }: DashboardHeaderProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-1'>
        <span className='w-1.5 h-1.5 rounded-full bg-green-600 shadow-[0_0_3px_2px_rgba(34,197,94,0.6)]' />
        <Text
          text={'Drejtpërdrejt'}
          size='text-xs'
          font='font-bold font-serif'
          className='tracking-widest uppercase text-green-500'
        />
      </div>
      <Text
        text={'Paneli Kryesor'}
        size='md:text-5xl text-4xl'
        font='font-semibold font-serif'
        className='leading-none tracking-[0.4rem] text-slate-900 dark:text-slate-300 truncate'
      />
      <Text
        text={`${formattedDate} · Pasqyrë e përgjithshme e sistemit`}
        size='text-xs'
        font='font-semibold'
        className='text-gray-500 tracking-wider dark:text-slate-500'
      />
    </div>
  );
};

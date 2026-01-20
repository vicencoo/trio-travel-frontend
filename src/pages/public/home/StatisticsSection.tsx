import { Text } from '../../../components/text';

const STATISTIC_INFO = [
  { id: 1, number: '+2K', text: 'Happy Clients' },
  { id: 2, number: '+45K', text: 'Destinations' },
  { id: 3, number: '+49', text: 'Global Branch' },
  { id: 4, number: '+4K', text: 'Compaigns' },
];

export const StatisticsSection = () => {
  return (
    <div className='hidden md:flex w-full items-center bg-black text-white rounded-xl py-14  justify-center select-none'>
      {STATISTIC_INFO.map((item) => (
        <div
          className='flex flex-col px-14 items-center justify-center border-r last:border-r-0'
          key={item.id}
        >
          <Text text={item.number} size='text-3xl' font='font-medium' />
          <Text text={item.text} size='text-lg' font='font-medium' />
        </div>
      ))}
    </div>
  );
};

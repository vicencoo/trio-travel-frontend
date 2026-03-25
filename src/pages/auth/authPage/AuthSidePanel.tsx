import { IconBox } from '@/components/iconBox';
import { Text } from '@/components/text';
import { STATISTIC_INFO } from '@/constants/statistics';
import { RealEstateAgentOutlined } from '@/icons';

export const AuthSidePanel = () => {
  return (
    <div className='hidden md:flex flex-col gap-7'>
      <div className='flex items-center gap-2 '>
        <IconBox
          icon={<RealEstateAgentOutlined className='text-white' />}
          bgColor='bg-gradient-to-br from-teal via-teal to-teal2'
        />
        <div>
          <Text
            text={'Trio Travel'}
            size='text-2xl'
            font='font-semibold font-serif'
            className='text-white'
          />
          <Text
            text={'Udhëtime përtej të zakonshmes Shqipëri & Botë'}
            font='font-medium'
            size='text-sm'
            className='text-teal2'
          />
        </div>
      </div>
      <Text
        size='lg:text-6xl text-5xl'
        font='font-medium font-serif'
        className='tracking-wide'
      >
        Bota të pret <br /> <span className='text-teal2 '>me krahë hapur.</span>
      </Text>
      <Text
        text={`Udhëtime të personalizuara, ekspertizë e vërtetë dhe shërbim i pakompromis — nga kërkimi i parë deri te perëndimi i fundit i diellit.`}
        size='text-sm'
        font='font-medium'
        className='text-gray-500'
      />
      <div className='flex items-center'>
        {STATISTIC_INFO.map((stat) => (
          <div
            className='flex flex-col items-center gap-1 border-r last:border-r-0 px-3 border-teal'
            key={stat.id}
          >
            <Text
              text={stat.number}
              size='text-2xl'
              font='font-semibold font-serif'
              className='text-teal2'
            />
            <Text
              text={stat.text}
              size='text-xs'
              font='font-medium'
              className='text-nowrap text-gray-500'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

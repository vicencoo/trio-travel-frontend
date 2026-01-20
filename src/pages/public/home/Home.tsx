import { SectionHeader } from '../../../components/sectionHeader/SectionHeader';
import { Advertise } from './Advertise';
import { FAQ } from './FAQ';
import { FavoriteDestinations } from './FavoriteDestinations';
import { FlightOffers } from './FlightOffers';
import { PopularDestinations } from './PopularDestinations';
import { Recommendations } from './Recommendations';
import { StatisticsSection } from './StatisticsSection';

export const Home = () => {
  return (
    <div className='container flex flex-col md:gap-20 gap-7 md:my-16 my-10'>
      <Advertise />

      <div className='flex flex-col gap-10'>
        <SectionHeader
          title='popular destinations'
          text='Navigate the Globe with Confidence'
        />
        <PopularDestinations />
      </div>
      <div className='flex flex-col gap-10'>
        <SectionHeader
          title='recommended for you'
          text='The best booking platform you can trust'
        />
        <Recommendations />
      </div>
      <StatisticsSection />
      <div className='flex flex-col gap-10'>
        <SectionHeader
          title='flight offer deals'
          text='Competitive fares for your route-specific searches'
        />
        <FlightOffers />
      </div>
      <div className='flex flex-col gap-10'>
        <SectionHeader
          title='favorite destinations'
          text='Favorite destionations based on customer reviewa'
        />
        <FavoriteDestinations />
      </div>
      <div className='flex flex-col gap-10'>
        <SectionHeader
          title='frequently asked questions'
          text='Youu need to come at least once in your life'
        />
        <FAQ />
      </div>
    </div>
  );
};

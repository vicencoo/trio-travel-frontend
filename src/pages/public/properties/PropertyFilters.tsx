import { Search } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import type { PropertyFiltersTypes } from './types';
import { Text } from '../../../components/text';

export const PropertyFilters = ({
  handleSearchChange,
  handleSearchClick,
  hadleListingFilterChange,
  listingType,
  count,
}: PropertyFiltersTypes) => {
  return (
    <div className='flex flex-col w-full bg-white p-5 shadow-md rounded-lg items-center gap-7'>
      <div className='flex w-full gap-3 flex-col md:flex-row'>
        <Input
          icon={<Search fontSize='small' className='text-gray-500' />}
          placeholder='Kërko sipas qytetit, lagjes, rrugës ose emrit të pronës'
          className='flex-1 w-full '
          onChange={handleSearchChange}
        />
        <Button
          name='kërko pronë'
          endIcon={<SearchOutlinedIcon />}
          bgColor='#2563eb'
          bgHover='#1d4ed8'
          border='transparent'
          borderHover='transparent'
          color='white'
          onClick={handleSearchClick}
          padding='9px 35px'
        />
      </div>

      <div className='flex w-full flex-col gap-5'>
        <div className='flex w-full items-center gap-2'>
          <div className='flex-1 w-full h-[1px] bg-gray-400' />
          <div className='flex items-center gap-2 select-none'>
            <TuneIcon fontSize='small' className='text-gray-600' />
            <Text
              text={'Opsione Filtrimi'}
              size='text-sm'
              font='font-medium font-serif'
              className='text-gray-600'
            />
          </div>
          <div className='flex-1 w-full h-[1px] bg-gray-400' />
        </div>
        <div className='grid grid-cols-3 gap-2 w-full'>
          <Button
            name='të gjitha'
            onClick={() => hadleListingFilterChange('all')}
            bgColor={listingType === 'all' ? '#2563eb' : 'white'}
            color={listingType === 'all' ? 'white' : 'black'}
            border={listingType === 'all' ? 'transparent' : 'black'}
            borderHover='transparent'
            bgHover='#1d4ed8'
          />
          <Button
            name='me qira'
            onClick={() => hadleListingFilterChange('rent')}
            bgColor={listingType === 'rent' ? '#2563eb' : 'white'}
            color={listingType === 'rent' ? 'white' : 'black'}
            border={listingType === 'rent' ? 'transparent' : 'black'}
            borderHover='transparent'
            bgHover='#1d4ed8'
          />
          <Button
            name='në shitje'
            onClick={() => hadleListingFilterChange('sale')}
            bgColor={listingType === 'sale' ? '#2563eb' : 'white'}
            color={listingType === 'sale' ? 'white' : 'black'}
            border={listingType === 'sale' ? 'transparent' : 'black'}
            borderHover='transparent'
            bgHover='#1d4ed8'
          />
        </div>
      </div>
      <div className='flex items-baseline gap-1 w-full justify-start'>
        <Text text={count} size='text-lg' font='font-medium font-serif' />
        <Text
          text='prona të gjetura'
          size='text-xs'
          font='font-medium'
          className='text-gray-500 capitalize'
        />
      </div>
    </div>
  );
};

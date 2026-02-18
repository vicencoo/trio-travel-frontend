import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Button } from '@/components/button';
import { Text } from '@/components/text';
import type { StatusFilterProps } from './types';

export const StatusFilter = ({
  status,
  handleStatusChange,
}: StatusFilterProps) => {
  return (
    <div className='flex flex-col gap-3 w-full justify-start'>
      <Text
        text={'Filtro sipas statusit'}
        font='font-semibold font-serif'
        className='text-gray-500'
      />
      <div className='flex flex-wrap gap-3'>
        <Button
          name='Te Gjitha'
          border={status === 'all' ? 'orange' : 'black'}
          bgColor={status === 'all' ? 'orange' : 'white'}
          bgHover={status === 'all' ? 'orange' : 'white'}
          borderHover='orange'
          color={status === 'all' ? 'white' : 'black'}
          hoverColor={status === 'all' ? 'white' : 'orange'}
          icon={<WidgetsOutlinedIcon />}
          padding='10px 20px'
          onClick={() => handleStatusChange('all')}
        />
        <Button
          name='Aktive'
          border={status === 'active' ? 'orange' : 'black'}
          bgColor={status === 'active' ? 'orange' : 'white'}
          bgHover={status === 'active' ? 'orange' : 'white'}
          borderHover='orange'
          color={status === 'active' ? 'white' : 'black'}
          hoverColor={status === 'active' ? 'white' : 'orange'}
          icon={<CheckCircleOutlinedIcon />}
          padding='10px 20px'
          onClick={() => handleStatusChange('active')}
        />
        <Button
          name='Draft'
          border={status === 'draft' ? 'orange' : 'black'}
          bgColor={status === 'draft' ? 'orange' : 'white'}
          bgHover={status === 'draft' ? 'orange' : 'white'}
          borderHover='orange'
          color={status === 'draft' ? 'white' : 'black'}
          hoverColor={status === 'draft' ? 'white' : 'orange'}
          icon={<AccessTimeOutlinedIcon />}
          padding='10px 22px'
          onClick={() => handleStatusChange('draft')}
        />
      </div>
    </div>
  );
};

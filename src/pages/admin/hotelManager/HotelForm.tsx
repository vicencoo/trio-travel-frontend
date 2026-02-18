import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import type { HotelFormProps } from './types';
import {
  AcUnit,
  FitnessCenter,
  LocalDining,
  LocalParking,
  Pool,
  RoomService,
  Spa,
  Wifi,
} from '@mui/icons-material';
import { Card } from '@/components/card';
import { Text } from '@/components/text';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { ImageUploader } from '@/components/imageUploader';

const AVAILABLE_FACILITIES = [
  { id: 'wifi', name: 'WiFi', icon: Wifi },
  { id: 'dining', name: 'Restaurant', icon: LocalDining },
  { id: 'parking', name: 'Parking', icon: LocalParking },
  { id: 'spa', name: 'Spa', icon: Spa },
  { id: 'pool', name: 'Pool', icon: Pool },
  { id: 'fitness', name: 'Fitness Center', icon: FitnessCenter },
  { id: 'room-service', name: 'Room Service', icon: RoomService },
  { id: 'ac', name: 'Air Conditioning', icon: AcUnit },
];

export const HotelForm = ({
  handleOpenForm,
  handleChangeData,
  hotelData,
  handleImagesChange,
  handleSetFacilities,
  saveHotel,
  setDeletedImages,
  errors,
}: HotelFormProps) => {
  return (
    <Card padding='p-0' width='md:w-2/3 w-full'>
      <div className='bg-gradient-to-r from-violet-600 to-indigo-600'>
        <div className='flex w-full items-center justify-between text-white py-5 px-7'>
          <Text
            text={hotelData.id ? 'Edito hotelin' : 'Shto hotel të ri'}
            size='text-xl'
            font='font-semibold font-serif'
          />
          <ClearOutlinedIcon
            className='hover:text-red-500 cursor-pointer'
            onClick={handleOpenForm}
          />
        </div>
      </div>
      <div className='flex flex-col gap-6 px-7 py-4'>
        <Input
          label='Emri Hotelit *'
          placeholder='p.sh. Moncaffe Boutique Hotel & SPA'
          value={hotelData.hotel_name}
          onChange={(e) => handleChangeData('hotel_name', e.target.value)}
          errorMessage={errors?.hotel_name}
        />
        <Input
          label='Vendëndodhja *'
          placeholder='p.sh Vlore, Albania'
          value={hotelData.location}
          onChange={(e) => handleChangeData('location', e.target.value)}
          errorMessage={errors?.location}
        />
        <Input
          label='Përshkrimi i Hotelit *'
          multiline
          placeholder='Përshkruaj cdo detaj mbi hotelin'
          value={hotelData.description}
          onChange={(e) => handleChangeData('description', e.target.value)}
          errorMessage={errors?.description}
        />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <Input
            label='Vlerësimi (Rating) *'
            placeholder='p.sh. 4.9'
            type='number'
            value={hotelData.rating || ''}
            onChange={(e) => handleChangeData('rating', e.target.value)}
            errorMessage={errors?.rating}
          />
          <Input
            label='Reviews *'
            placeholder='0'
            type='number'
            value={hotelData.reviews || ''}
            onChange={(e) => handleChangeData('reviews', e.target.value)}
            errorMessage={errors?.reviews}
          />
          <Input
            label='Cmimi/Natë(€)'
            placeholder='89'
            type='number'
            value={hotelData.price || ''}
            onChange={(e) => handleChangeData('price', e.target.value)}
            errorMessage={errors?.price}
          />
        </div>

        <div className='flex flex-col gap-3'>
          <Text
            text={'Shërbimet e Përfshira *'}
            size='text-lg'
            font='font-medium font-serif'
          />
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {AVAILABLE_FACILITIES.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  className={`flex items-center gap-1 border rounded-lg p-2 cursor-pointer select-none ${hotelData.facilities.includes(item.id) ? 'border-blue-700 bg-blue-500 text-white scale-105' : 'border-black bg-blue-300 text-black'} transition-all duration-300 will-change-transform`}
                  key={item.id}
                  onClick={() => handleSetFacilities(item.id)}
                >
                  <IconComponent fontSize='small' />
                  <Text text={item.name} />
                </div>
              );
            })}
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <Text
            text={'Imazhet e Hotelit *'}
            size='text-lg'
            font='font-medium font-serif'
          />
          <ImageUploader
            value={hotelData.hotel_images || []}
            onChange={handleImagesChange}
            imageKey='hotel_image'
            onDeleteOld={(img) => {
              const filename = typeof img === 'string' ? img : img.hotel_image;
              if (filename) setDeletedImages((prev) => [...prev, filename]);
            }}
          />
        </div>
      </div>

      <div className='flex gap-2 px-4 pb-5'>
        <Button
          name='anullo'
          bgHover='#ef4444'
          borderHover='#b91c1c'
          endIcon={<ClearOutlinedIcon />}
          fullWidth
          onClick={handleOpenForm}
        />
        <Button
          name='konfirmo hotelin'
          bgColor='#2563eb'
          bgHover='#1d4ed8'
          border='transparent'
          borderHover='transparent'
          color='white'
          endIcon={<SaveOutlinedIcon />}
          fullWidth
          onClick={saveHotel}
        />
      </div>
    </Card>
  );
};

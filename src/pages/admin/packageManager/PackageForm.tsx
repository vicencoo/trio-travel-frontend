import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import { Card } from '../../../components/card';
import { Input } from '../../../components/input';
import { Text } from '../../../components/text';
import { Button } from '../../../components/button';
import { ImageUploader } from '../../../components/imageUploader';
import { Selector } from '../../../components/selector';
import type { PackageFormProps } from './types';

const akomodimi = [
  { label: 'Hotel Me 3 Yje', value: 'threeStarHotel' },
  { label: 'Hotel Me 4 Yje', value: 'fourStarHotel' },
  { label: 'Hotel Me 5 Yje', value: 'fiveStarHotel' },
  { label: 'Resort', value: 'resort' },
];

const vaktet = [
  { label: 'Vetem Mengjesi', value: 'breakfastOnly' },
  { label: 'Mengjes ,Darke', value: 'breakfastDinner' },
  { label: 'All Inclusive', value: 'allInclusive' },
];

export const PackageForm = ({
  onClose,
  handleChangePackageData,
  handleImagesChange,
  handlePackageDetailsChange,
  touristPackage,
  handleSave,
  setDeletedImages,
  errors,
}: PackageFormProps) => {
  return (
    <Card padding='p-0'>
      <div className='flex w-full justify-between bg-blue-600 px-7 text-white py-5'>
        <Text
          text={touristPackage.id ? 'Edito Paketen' : 'Krijo nje pakete te re'}
          size='text-xl'
          font='font-semibold font-serif'
        />
        <CloseOutlinedIcon
          className='cursor-pointer hover:text-red-500'
          onClick={onClose}
        />
      </div>
      <div className='flex flex-col gap-6 px-7 py-4'>
        <div className='bg-blue-50 rounded-lg p-4 flex flex-col gap-3'>
          <Text text={'Basic information'} size='text-lg' font='font-medium' />
          <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
            <div className='flex flex-col gap-1'>
              <Input
                label='Titulli i Paketes *'
                placeholder='p.sh. Amara Dolce Vita Luxury And Spa'
                value={touristPackage?.title || ''}
                onChange={(e) =>
                  handleChangePackageData('title', e.target.value)
                }
                errorMessage={errors?.title}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <Input
                label='Destinacioni (EUR) *'
                placeholder='p.sh. Antalya, Turkey'
                value={touristPackage?.destination || ''}
                onChange={(e) =>
                  handleChangePackageData('destination', e.target.value)
                }
                errorMessage={errors?.destination}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <Input
                label='Cmimi *'
                placeholder='p.sh. 1600'
                type='number'
                value={touristPackage?.price || ''}
                onChange={(e) =>
                  handleChangePackageData('price', e.target.value)
                }
                icon={
                  <EuroOutlinedIcon
                    className='text-gray-500'
                    fontSize='inherit'
                  />
                }
                errorMessage={errors?.price}
              />
            </div>

            <div>
              <Input
                label='Kohezgjatja (dite) *'
                placeholder='p.sh. 7 dite'
                type='number'
                value={touristPackage?.duration || ''}
                onChange={(e) =>
                  handleChangePackageData('duration', e.target.value)
                }
                errorMessage={errors?.duration}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 bg-green-50 p-4 rounded-lg'>
          <Text
            text={'Pershkrimi i Paketes *'}
            font='font-medium'
            size='text-lg'
            className='text-gray-700'
          />

          <div className='flex flex-col gap-1'>
            <Input
              multiline
              placeholder='Pershkruani cdo gje rreth paketes. Bejini me dije klientit cfare te pres nese e rezervon kete pakete. Shpjegoni cdo gje rreth udhetimit , hotelit dhe cdo detaj tjeter te mundshem . . .'
              value={touristPackage?.description || ''}
              onChange={(e) =>
                handleChangePackageData('description', e.target.value)
              }
              errorMessage={errors?.description}
            />
          </div>
        </div>

        <div className='flex flex-col gap-4 bg-orange-50 p-4 rounded-lg'>
          <Text
            text={'Detaje te Paketes'}
            font='font-medium'
            size='text-lg'
            className='text-gray-700'
          />
          <div className=' flex flex-col md:flex-row gap-4'>
            <div className='flex-1 flex-col gap-1'>
              <Text text={'Akomodimi *'} font='font-semibold' size='text-sm' />
              <Selector
                options={akomodimi}
                value={touristPackage?.accomodation}
                onChange={(e) => handlePackageDetailsChange(e, 'accomodation')}
                errorMessage={errors?.accomodation}
              />
            </div>
            <div className='flex-1 flex-col gap-1'>
              <Text
                text={'Vaktet e Perfshira *'}
                font='font-semibold'
                size='text-sm'
              />
              <Selector
                options={vaktet}
                value={touristPackage.meal_included}
                onChange={(e) => handlePackageDetailsChange(e, 'meal_included')}
                errorMessage={errors.meal_included}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-full bg-purple-50 p-4 rounded-lg'>
          <Text
            size='text-lg'
            text={'Zgjidhni Imazhet e Paketes *'}
            font='font-semibold'
            className='text-gray-700'
          />
          <ImageUploader
            value={touristPackage.package_images || []}
            onChange={handleImagesChange}
            imageKey='image'
            onDeleteOld={(img) => {
              const filename = typeof img === 'string' ? img : img.image;
              setDeletedImages((prev) => [...prev, filename]);
            }}
          />
        </div>
      </div>

      <div className='flex gap-3 px-4 pb-5'>
        <Button
          name='anulo'
          fullWidth
          borderHover='#dc2626'
          bgHover='#ef4444 '
          endIcon={<CloseOutlinedIcon />}
          onClick={onClose}
        />
        <Button
          name='konfirmo paketen'
          fullWidth
          border='transparent'
          borderHover='#1d4ed8'
          bgColor='#3b82f6'
          bgHover='#2563eb'
          color='white'
          endIcon={<AddOutlinedIcon />}
          onClick={handleSave}
        />
      </div>
    </Card>
  );
};

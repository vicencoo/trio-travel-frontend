import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EuroSymbolOutlinedIcon from '@mui/icons-material/EuroSymbolOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Card } from '../../../components/card';
import { Text } from '../../../components/text';
import { Button } from '../../../components/button';
import { useAddProperty } from './useAddProperty';
import { Input } from '../../../components/input';
import { Selector } from '../../../components/selector';
import { ImageUploader } from '../../../components/imageUploader';
import { useNavigate } from 'react-router-dom';

const options = [
  { label: 'Apartament', value: 'apartament' },
  { label: 'Vile', value: 'vile' },
  { label: 'Duplex', value: 'duplex' },
  { label: 'Toke', value: 'toke' },
];

export const PropertyManager = () => {
  const navigate = useNavigate();
  const {
    handlePropertyChange,
    propertyData,
    handleChangePropertyData,
    handleImagesChange,
    handleSave,
    error,
  } = useAddProperty();

  return (
    <div className='flex flex-col gap-5 py-10 items-center justify-center container'>
      <Card width='w-full md:w-3/5'>
        <div className='flex items-start gap-3'>
          <span className='bg-blue-100 flex w-12 h-12 items-center justify-center rounded-lg'>
            <HomeOutlinedIcon className='text-blue-600' fontSize='large' />
          </span>
          <div className='flex flex-col gap-3'>
            <Text
              text={propertyData._id ? 'Edito Pronen' : 'Shto Prone Te Re'}
              size='text-4xl'
              font='font-bold'
            />
            {!propertyData._id && (
              <Text
                text={'Shto nje prone per qera ose shitje'}
                font='font-medium'
                className='text-gray-500'
              />
            )}
          </div>
        </div>
      </Card>

      {error && (
        <span className='flex w-full justify-center'>
          <Text text={error} font='font-medium' className='text-red-500' />
        </span>
      )}

      <Card width='w-full md:w-3/5'>
        <Text text={'Lloji I Listimit'} size='text-lg' font='font-medium' />
        <div className=' flex w-full gap-3'>
          <Button
            name='per qera'
            fullWidth
            onClick={() => {
              handleChangePropertyData('listeningType', 'rent');
            }}
            bgColor={propertyData.listeningType === 'rent' ? 'black' : 'white'}
            color={propertyData.listeningType === 'rent' ? 'white' : 'black'}
          />
          <Button
            name='per shitje'
            fullWidth
            onClick={() => {
              handleChangePropertyData('listeningType', 'sale');
            }}
            bgColor={propertyData.listeningType === 'sale' ? 'black' : 'white'}
            color={propertyData.listeningType === 'sale' ? 'white' : 'black'}
          />
        </div>
      </Card>

      <Card className='w-full md:w-3/5'>
        <div className='flex items-center gap-1'>
          <FeedOutlinedIcon fontSize='medium' className='text-blue-600' />
          <Text text={'Informacion Baze'} size='text-lg' font='font-medium' />
        </div>

        <div className='flex flex-col gap-1'>
          <Text text={'Tipi I Prones'} font='font-semibold' size='text-sm' />
          <Selector
            options={options || ''}
            value={propertyData.propertyType}
            onChange={handlePropertyChange}
          />
        </div>
        <Input
          label='Titulli I Postimit'
          placeholder='Shkruani titullin qe do te shfaqet ne postim . . .'
          value={propertyData.title || ''}
          onChange={(e) => handleChangePropertyData('title', e.target.value)}
        />

        <Input
          label='Pershkrimi I Prones'
          placeholder='Shkruani pershkrimin e prones . . .'
          value={propertyData.description || ''}
          onChange={(e) =>
            handleChangePropertyData('description', e.target.value)
          }
          multiline
        />
      </Card>

      <Card className='w-full md:w-3/5'>
        <div className='flex items-center gap-1'>
          <LocationOnOutlinedIcon fontSize='medium' className='text-blue-600' />
          <Text text={'Locationi I Prones'} size='text-lg' font='font-medium' />
        </div>

        <Input
          label='Qyteti'
          placeholder='Qyteti ku ndodhet prona . . .'
          value={propertyData.city || ''}
          onChange={(e) => handleChangePropertyData('city', e.target.value)}
        />
        <div className='flex md:flex-row flex-col gap-5'>
          <Input
            label='Zona'
            placeholder='Zona orientuese psh: Skele'
            className='flex-1'
            value={propertyData.area || ''}
            onChange={(e) => handleChangePropertyData('area', e.target.value)}
          />
          <Input
            label='Rruga'
            placeholder='psh: Rruga Kombinati I Peshkut'
            className='flex-1'
            value={propertyData.street || ''}
            onChange={(e) => handleChangePropertyData('street', e.target.value)}
          />
        </div>
      </Card>

      <Card className='w-full md:w-3/5'>
        <div className='flex items-center gap-1'>
          <EuroSymbolOutlinedIcon fontSize='medium' className='text-blue-600' />
          <Text text={'Detajet E Prones'} size='text-lg' font='font-medium' />
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <Input
            label={
              propertyData.listeningType === 'rent'
                ? 'Cmimi I Qerase'
                : 'Cmimi I Prones'
            }
            placeholder='0'
            type='number'
            value={propertyData.price || ''}
            onChange={(e) => handleChangePropertyData('price', e.target.value)}
            icon={<EuroSymbolOutlinedIcon fontSize='inherit' />}
          />
          <div className='flex flex-col gap-1'>
            <Text font='font-semibold' size='text-sm'>
              Hapesira E Prones{' '}
              <span className='text-gray-500'>
                (m<sup>2</sup>)
              </span>
            </Text>
            <Input
              placeholder='0'
              type='number'
              value={propertyData.space || ''}
              onChange={(e) =>
                handleChangePropertyData('space', e.target.value)
              }
            />
          </div>

          <Input
            label='Dhomat E Gjumit'
            placeholder='0'
            type='number'
            value={propertyData.bedrooms || ''}
            onChange={(e) =>
              handleChangePropertyData('bedrooms', e.target.value)
            }
          />

          <Input
            label='Numri I Tualeteve'
            placeholder='0'
            type='number'
            value={propertyData.toilets || ''}
            onChange={(e) =>
              handleChangePropertyData('toilets', e.target.value)
            }
          />

          {/*  */}
          <Input
            label='Numri I Katit'
            placeholder='0'
            type='number'
            value={propertyData.floorNumber || ''}
            onChange={(e) =>
              handleChangePropertyData('floorNumber', e.target.value)
            }
          />

          <Input
            label='Viti I Ndertimit'
            placeholder='2020'
            type='number'
            value={propertyData.buildYear || ''}
            onChange={(e) =>
              handleChangePropertyData('buildYear', e.target.value)
            }
          />
        </div>
      </Card>

      <Card className='w-full md:w-3/5'>
        <div className='flex items-center gap-1'>
          <InsertPhotoOutlinedIcon
            fontSize='medium'
            className='text-blue-600'
          />
          <Text text={'Imazhet E Prones'} size='text-lg' font='font-medium' />
        </div>

        <ImageUploader
          value={propertyData.propertyImages || []}
          onChange={handleImagesChange}
          maxImages={20}
          imageKey='propertyImage'
        />
      </Card>

      <div className='flex w-full md:w-3/5 justify-between gap-3'>
        <Button
          name='anulo'
          onClick={() => navigate('/admin/manage-properties')}
          fullWidth
          bgHover='#ef4444'
          borderHover='#b91c1c'
          endIcon={<CloseIcon />}
        />
        <Button
          name={propertyData._id ? 'edito pronen' : 'shto pronen'}
          onClick={handleSave}
          fullWidth
          color='white'
          border='transparent'
          borderHover='#1d4ed8'
          bgColor='#3b82f6'
          bgHover='#2563eb'
          endIcon={<AddIcon />}
        />
      </div>
    </div>
  );
};

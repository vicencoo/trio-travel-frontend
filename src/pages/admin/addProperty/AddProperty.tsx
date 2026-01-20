import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EuroSymbolOutlinedIcon from '@mui/icons-material/EuroSymbolOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Card } from '../../../components/card';
import { Text } from '../../../components/text';
import { Button } from '../../../components/button';
import { useAddProperty } from './useAddProperty';
import { Input } from '../../../components/input';
import { Selector } from '../../../components/selector';
import { ImageUploader } from '../../../components/imageUploader';

const options = [
  { label: 'Apartament', value: 'apartament' },
  { label: 'Vile', value: 'vile' },
  { label: 'Duplex', value: 'duplex' },
];

export const AddProperty = () => {
  const {
    handlePropertyChange,
    data,
    handleChangePropertyData,
    handleImagesChange,
    handleSave,
  } = useAddProperty();

  return (
    <div className='flex flex-col gap-5 py-10 items-center justify-center container'>
      <Card width='w-full md:w-3/5'>
        <div className='flex items-start gap-3'>
          <span className='bg-blue-100 flex w-12 h-12 items-center justify-center rounded-lg'>
            <HomeOutlinedIcon className='text-blue-600' fontSize='large' />
          </span>
          <div className='flex flex-col gap-3'>
            <Text text={'Shto Prone Te Re'} size='text-4xl' font='font-bold' />
            <Text
              text={'Shto nje prone per qera ose shitje'}
              font='font-medium'
              className='text-gray-500'
            />
          </div>
        </div>
      </Card>

      <Card width='w-full md:w-3/5'>
        <Text text={'Lloji I Listimit'} size='text-lg' font='font-medium' />
        <div className=' flex w-full gap-3'>
          <Button
            name='per qera'
            fullWidth
            onClick={() => {
              handleChangePropertyData('listeningType', 'rent');
            }}
            bgColor={data.listeningType === 'rent' ? 'black' : 'white'}
            color={data.listeningType === 'rent' ? 'white' : 'black'}
          />
          <Button
            name='per shitje'
            fullWidth
            onClick={() => {
              handleChangePropertyData('listeningType', 'sale');
            }}
            bgColor={data.listeningType === 'sale' ? 'black' : 'white'}
            color={data.listeningType === 'sale' ? 'white' : 'black'}
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
            options={options}
            value={data.propertyType}
            onChange={handlePropertyChange}
          />
        </div>
        <Input
          label='Titulli I Postimit'
          placeholder='Shkruani titullin qe do te shfaqet ne postim . . .'
          value={data.title}
          onChange={(e) => handleChangePropertyData('title', e.target.value)}
        />

        <Input
          label='Pershkrimi I Prones'
          placeholder='Shkruani pershkrimin e prones . . .'
          value={data.description}
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
          value={data.city}
          onChange={(e) => handleChangePropertyData('city', e.target.value)}
        />
        <div className='flex md:flex-row flex-col gap-5'>
          <Input
            label='Zona'
            placeholder='Zona orientuese psh: Skele'
            className='flex-1'
            value={data.area}
            onChange={(e) => handleChangePropertyData('area', e.target.value)}
          />
          <Input
            label='Rruga'
            placeholder='psh: Rruga Kombinati I Peshkut'
            className='flex-1'
            value={data.street}
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
              data.listeningType === 'rent'
                ? 'Cmimi I Qerase'
                : 'Cmimi I Prones'
            }
            placeholder='0'
            type='number'
            value={data.price}
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
              value={data.space}
              onChange={(e) =>
                handleChangePropertyData('space', e.target.value)
              }
            />
          </div>

          <Input
            label='Dhomat E Gjumit'
            placeholder='0'
            type='number'
            value={data.bedrooms}
            onChange={(e) =>
              handleChangePropertyData('bedrooms', e.target.value)
            }
          />

          <Input
            label='Numri I Tualeteve'
            placeholder='0'
            type='number'
            value={data.toilets}
            onChange={(e) =>
              handleChangePropertyData('toilets', e.target.value)
            }
          />

          <Input
            label='Viti I Ndertimit'
            placeholder='2020'
            type='number'
            value={data.buildYear}
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
          value={data.propertyImages}
          onChange={handleImagesChange}
          maxImages={10}
        />
      </Card>

      <div className='flex w-full md:w-3/5 justify-between'>
        <Button name='cancel' />
        <Button name='shto pronen' onClick={handleSave} />
      </div>
    </div>
  );
};

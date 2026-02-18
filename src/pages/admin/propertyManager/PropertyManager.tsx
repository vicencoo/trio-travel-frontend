import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EuroSymbolOutlinedIcon from '@mui/icons-material/EuroSymbolOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useAddProperty } from './useAddProperty';
import { Card } from '@/components/card';
import { Text } from '@/components/text';
import { Button } from '@/components/button';
import { Selector } from '@/components/selector';
import { PROPERTY_TYPE } from '@/utils';
import { Input } from '@/components/input';
import { ImageUploader } from '@/components/imageUploader';
import { StatusToggle } from '@/components/statusToggle';

export const PropertyManager = () => {
  const navigate = useNavigate();
  const {
    handlePropertyChange,
    propertyData,
    handleChangePropertyData,
    handleImagesChange,
    handleSave,
    error,
    setDeletedImages,
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
              text={propertyData.id ? 'Edito Pronen' : 'Shto Prone Te Re'}
              size='text-4xl'
              font='font-bold'
            />
            {!propertyData.id && (
              <Text
                text={'Shto nje prone per qera ose shitje'}
                font='font-medium'
                className='text-gray-500'
              />
            )}
          </div>
        </div>
      </Card>

      <Card width='w-full md:w-3/5'>
        <Text
          text={'Lloji I Listimit *'}
          size='text-lg'
          font='font-semibold font-serif'
        />
        <div className=' flex w-full gap-3'>
          <Button
            name='per qera'
            fullWidth
            onClick={() => {
              handleChangePropertyData('listing_type', 'rent');
            }}
            bgColor={propertyData.listing_type === 'rent' ? 'black' : 'white'}
            color={propertyData.listing_type === 'rent' ? 'white' : 'black'}
          />
          <Button
            name='per shitje'
            fullWidth
            onClick={() => {
              handleChangePropertyData('listing_type', 'sale');
            }}
            bgColor={propertyData.listing_type === 'sale' ? 'black' : 'white'}
            color={propertyData.listing_type === 'sale' ? 'white' : 'black'}
          />
        </div>

        <StatusToggle
          activeText='✓ Kjo pronë do të jetë e dukshme për publikun.'
          draftText='✎ Kjo pronë do të ruhet si draft. Ju mund ta ndryshoni ne një moment të dytë dhe ta beni pronën aktive.'
          status={propertyData.status}
          onChange={(newStatus) =>
            handleChangePropertyData('status', newStatus)
          }
        />
      </Card>

      <Card className='w-full md:w-3/5'>
        <div className='flex items-center gap-1'>
          <FeedOutlinedIcon fontSize='medium' className='text-blue-600' />
          <Text text={'Informacion Baze'} size='text-lg' font='font-medium' />
        </div>

        <div className='flex flex-col gap-1'>
          <Text text={'Tipi I Prones *'} font='font-semibold' size='text-sm' />
          <Selector
            options={PROPERTY_TYPE || ''}
            value={propertyData.property_type}
            onChange={handlePropertyChange}
            errorMessage={error?.property_type}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <Input
            label='Titulli I Postimit *'
            placeholder='Shkruani titullin qe do te shfaqet ne postim . . .'
            value={propertyData.title || ''}
            onChange={(e) => handleChangePropertyData('title', e.target.value)}
            errorMessage={error?.title}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Input
            label='Pershkrimi I Prones *'
            placeholder='Shkruani pershkrimin e prones . . .'
            value={propertyData.description || ''}
            onChange={(e) =>
              handleChangePropertyData('description', e.target.value)
            }
            multiline
            errorMessage={error?.description}
          />
        </div>
      </Card>

      <Card className='w-full md:w-3/5'>
        <div className='flex items-center gap-1'>
          <LocationOnOutlinedIcon fontSize='medium' className='text-blue-600' />
          <Text text={'Locationi I Prones'} size='text-lg' font='font-medium' />
        </div>

        <div className='flex flex-col gap-1'>
          <Input
            label='Qyteti *'
            placeholder='Qyteti ku ndodhet prona . . .'
            value={propertyData.city || ''}
            onChange={(e) => handleChangePropertyData('city', e.target.value)}
            errorMessage={error?.city}
          />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div className='flex flex-col gap-1'>
            <Input
              label='Zona *'
              placeholder='Zona orientuese psh: Skele'
              value={propertyData.area || ''}
              onChange={(e) => handleChangePropertyData('area', e.target.value)}
              errorMessage={error?.area}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <Input
              label='Rruga *'
              placeholder='psh: Rruga Kombinati I Peshkut'
              value={propertyData.street || ''}
              onChange={(e) =>
                handleChangePropertyData('street', e.target.value)
              }
              errorMessage={error?.street}
            />
          </div>
        </div>
      </Card>

      <Card className='w-full md:w-3/5'>
        <div className='flex items-center gap-1'>
          <EuroSymbolOutlinedIcon fontSize='medium' className='text-blue-600' />
          <Text text={'Detajet E Prones'} size='text-lg' font='font-medium' />
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div className='flex flex-col gap-1'>
            <Input
              label={
                propertyData.listing_type === 'rent'
                  ? 'Cmimi I Qerase *'
                  : 'Cmimi I Prones *'
              }
              placeholder='0'
              type='number'
              value={propertyData.price || ''}
              onChange={(e) =>
                handleChangePropertyData('price', e.target.value)
              }
              icon={<EuroSymbolOutlinedIcon fontSize='inherit' />}
              errorMessage={error?.price}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <Text font='font-semibold' size='text-sm'>
              Hapesira E Prones{' '}
              <span className='text-gray-500'>
                (m<sup>2</sup>)
              </span>{' '}
              *
            </Text>
            <Input
              placeholder='0'
              type='number'
              value={propertyData.space || ''}
              onChange={(e) =>
                handleChangePropertyData('space', e.target.value)
              }
              errorMessage={error?.space}
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
            value={propertyData.floor_number || ''}
            onChange={(e) =>
              handleChangePropertyData('floor_number', e.target.value)
            }
          />

          <Input
            label='Viti I Ndertimit'
            placeholder='2020'
            type='number'
            value={propertyData.build_year || ''}
            onChange={(e) =>
              handleChangePropertyData('build_year', e.target.value)
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
          <Text text={'Imazhet E Prones *'} size='text-lg' font='font-medium' />
        </div>

        <ImageUploader
          value={propertyData.property_images || []}
          onChange={handleImagesChange}
          maxImages={20}
          imageKey='property_image'
          onDeleteOld={(img) => {
            const filename = typeof img === 'string' ? img : img.property_image;
            if (filename) {
              setDeletedImages((prev) => [...prev, filename]);
            }
          }}
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
          name={
            propertyData.id || propertyData.id ? 'edito pronen' : 'shto pronen'
          }
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

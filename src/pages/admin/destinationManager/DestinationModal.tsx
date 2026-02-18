import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/Add';
import type { DestinationFormProps } from './types';
import { Modal } from '@/components/modal';
import { Text } from '@/components/text';
import { Input } from '@/components/input';
import { ImageUploader } from '@/components/imageUploader';
import { Button } from '@/components/button';

export const DestinationModal = ({
  handleOpenModal,
  handleAddTypes,
  inputValue,
  setInputValue,
  data,
  removeType,
  handleChangeData,
  handleImagesChange,
  handleSave,
  errors,
  isDestinationFormOpen,
}: DestinationFormProps) => {
  return (
    <Modal
      isOpen={isDestinationFormOpen}
      onClose={handleOpenModal}
      padding='0'
      height='h-[80vh]'
      width={'w-4/5 md:w-1/2'}
    >
      <div className='bg-gradient-to-tr from-blue-500 to-sky-700'>
        <div className='flex w-full items-center justify-between text-white py-5 px-7'>
          <Text
            text={data.id ? 'Edito destinacionin' : 'Shto destinacion të ri'}
            size='text-xl'
            font='font-medium'
          />
          <CloseOutlinedIcon
            onClick={handleOpenModal}
            className='hover:text-red-500 cursor-pointer'
          />
        </div>
      </div>

      <div className='flex flex-col gap-5 px-4 py-5'>
        <div className='grid md:grid-cols-2 gap-5 md:gap-3'>
          <Input
            label='Qyteti *'
            placeholder='Shruani emrin e qytetit'
            value={data.city}
            onChange={(e) => handleChangeData('city', e.target.value)}
            errorMessage={errors?.city}
          />
          <Input
            label='Shteti *'
            placeholder='Shteti në të cilin ndodhet destinacioni'
            value={data.country}
            onChange={(e) => handleChangeData('country', e.target.value)}
            errorMessage={errors?.country}
          />
        </div>
        <Input
          label='Slogani *'
          placeholder='Shkruani një slogan të shkurter'
          value={data.slogan}
          onChange={(e) => handleChangeData('slogan', e.target.value)}
          errorMessage={errors?.slogan}
        />

        <div className='flex flex-col gap-1'>
          <Text
            text={'Tipet e destinacionit'}
            font='font-semibold'
            size='text-sm'
          />
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <Input
                placeholder='Shkruani një ose më shumë (p.sh. Plazh, Aventurë)'
                className='flex-1'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className='w-11 h-10 bg-sky-600 hover:bg-sky-700 flex items-center justify-center rounded-lg'
                onClick={() => handleAddTypes()}
              >
                <AddIcon fontSize='small' className='text-white' />
              </button>
            </div>
            {data?.destination_types?.length > 0 && (
              <div className='flex items-center gap-3 flex-wrap'>
                {data.destination_types.map((type, index: number) => {
                  const value = type.type;
                  return (
                    <span
                      className='border border-gray-400 rounded-lg bg-gray-50 text-gray-600 px-3 py-1 font-medium hover:bg-gray-200 select-none flex items-center gap-1'
                      key={index}
                    >
                      {value}
                      <CloseOutlinedIcon
                        fontSize='inherit'
                        className='hover:text-red-500 cursor-pointer'
                        onClick={() => value && removeType(value)}
                      />
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-col w-full gap-5'>
          <Text text={'Imazhi I Destinacionit '} font='font-semibold' />
          <ImageUploader
            value={data.destination_images || []}
            onChange={handleImagesChange}
            imageKey='destination_image'
            maxImages={1}
          />
        </div>

        <div className='flex w-full gap-3'>
          <Button
            name='anullo'
            fullWidth
            endIcon={<CloseOutlinedIcon />}
            bgHover='#ef4444'
            onClick={handleOpenModal}
          />
          <Button
            name='konfirmo'
            fullWidth
            endIcon={<SaveOutlinedIcon />}
            bgColor='#0284c7'
            bgHover='#0369a1'
            color='white'
            border='transparent'
            borderHover='transparent'
            onClick={handleSave}
          />
        </div>
      </div>
    </Modal>
  );
};

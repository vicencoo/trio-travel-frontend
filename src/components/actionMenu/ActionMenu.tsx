import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Text } from '../text';
import type { ActionMenuProps } from './types';

export const ActionMenu = ({
  enableEdit = true,
  onEdit,
  enableDelete = true,
  onDelete,
  enableRenew,
  onRenew,
  enableStatus,
  statusText,
  handleStatus,
}: ActionMenuProps) => {
  const { open, ref: wrapperRef, isOpen, close } = useDisclosure();
  return (
    <div
      className='col-span-1 flex w-full justify-end md:pr-5 relative'
      ref={wrapperRef}
    >
      <span
        className='w-8 h-8 bg-transparent flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all duration-200 will-change-transform'
        onClick={() => open()}
      >
        <MoreVertIcon />
      </span>
      {isOpen && (
        <div className='absolute flex flex-col py-3 px-4 gap-3 bg-white rounded-lg shadow-lg border border-gray-100 z-[9999] top-full right-0 mt-1'>
          {enableEdit && (
            <span
              className='flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors duration-300 cursor-pointer'
              onClick={() => {
                onEdit?.();
                close();
              }}
            >
              <ModeEditOutlineOutlinedIcon
                className='text-blue-500'
                fontSize='small'
              />
              <Text text={'Edito'} font='font-medium' />
            </span>
          )}
          {enableDelete && (
            <span
              className='flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-all duration-300 cursor-pointer'
              onClick={() => {
                onDelete?.();
                close();
              }}
            >
              <DeleteOutlinedIcon fontSize='small' className='text-red-500' />
              <Text text={'Fshi'} font='font-medium' />
            </span>
          )}
          {enableRenew && (
            <span
              className='flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors duration-300 cursor-pointer'
              onClick={() => {
                onRenew?.();
                close();
              }}
            >
              <RefreshIcon fontSize='small' className='text-green-500' />
              <Text text={'Rifresko'} font='font-medium' />
            </span>
          )}
          {enableStatus && (
            <span
              className='flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors duration-300 cursor-pointer'
              onClick={() => {
                handleStatus?.();
                close();
              }}
            >
              <PublishedWithChangesOutlinedIcon
                fontSize='small'
                className='text-orange-500'
              />
              <Text text={statusText} font='font-medium' />
            </span>
          )}
        </div>
      )}
    </div>
  );
};

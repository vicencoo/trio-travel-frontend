import CloseIcon from '@mui/icons-material/Close';
import type { ModalProps } from './types';

export const Modal = ({
  isOpen,
  onClose,
  width = 'max-w-md',
  height = 'max-h-full',
  closeIcon = false,
  padding = 'px-6 py-2',
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[99999]'
      onClick={handleBackdropClick}
    >
      <div
        className={`${width} ${height} bg-white rounded-2xl shadow-lg relative overflow-y-auto hide-scrollbar`}
      >
        {closeIcon && (
          <span className='flex justify-end p-2'>
            <CloseIcon
              className='hover:text-red-500 cursor-pointer'
              onClick={onClose}
            />
          </span>
        )}
        <div className={`flex-1 overflow-y-auto scrollbar-hide ${padding}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

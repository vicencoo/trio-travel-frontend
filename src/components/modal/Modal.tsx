import { Close } from '@/icons';
import type { ModalProps } from './types';

export const Modal = ({
  isOpen,
  onClose,
  width = 'max-w-md',
  height = 'max-h-full',
  closeIcon = false,
  bgColor = 'bg-white dark:bg-slate-800',
  padding = 'px-6 py-2',
  ref,
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
      className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[99998]'
      onClick={handleBackdropClick}
      ref={ref}
    >
      <div
        className={`${width} ${height} ${bgColor}  rounded-2xl shadow-lg overflow-y-auto hide-scrollbar relative`}
      >
        {closeIcon && (
          <span className='absolute top-0 right-0 p-2'>
            <Close
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

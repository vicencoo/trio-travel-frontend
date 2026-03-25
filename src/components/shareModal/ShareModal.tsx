import { Modal } from '../modal';
import { Text } from '../text';
import type { ShareModalPropes } from './types';
import { Button } from '../button';
import { socials } from '@/constants/socials';
import { useShareModal } from './useShareModal';

export const ShareModal = ({ isOpen, close, path }: ShareModalPropes) => {
  const { handleIsCopied, isCopied } = useShareModal();
  const shareText = 'Shiko këtë njoftim';

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      width='md:w-2/6 sm:w-2/5 w-3/4'
      closeIcon
    >
      <div className='flex flex-col gap-3 w-full'>
        <div className='flex w-full justify-center py-5 border-b border-slate-300'>
          <Text
            text={'Shpërndani njoftimin me një mik'}
            size='text-lg md:text-xl'
            font='font-medium'
          />
        </div>
        <div className='flex flex-col gap-4 pb-5 border-b border-slate-300'>
          <Text
            text={'Shpërndaje'}
            size='text-sm'
            font='font-semibold font-serif'
          />
          <div className='flex w-full overflow-x-auto gap-5 md:custom-scrollbar pb-3'>
            {socials.map((social) => (
              <div
                className='flex flex-col items-center gap-1'
                key={social.label}
              >
                <button
                  type='button'
                  className={`flex w-14 min-w-14 h-14 rounded-full ${social.style} items-center justify-center cursor-pointer`}
                  onClick={() =>
                    window.open(
                      social.path(shareText, path),
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                >
                  <social.icon />
                </button>
                <Text
                  text={social.label}
                  size='text-sm'
                  font='font-medium'
                  className='capitalize text-slate-700'
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='flex w-full items-center justify-between gap-4 border px-2 py-3 mb-2 rounded-lg'>
            <Text
              text={path}
              className='truncate'
              size='text-sm'
              font='font-semibold font-serif'
            />
            {isCopied ? (
              <span
                className='flex items-center gap-2 text-sm px-4 py-2 
                bg-green-100 text-green-700 
                rounded-full font-semibold 
                shadow-sm border border-green-200 
                animate-fade-in'
              >
                Kopjuar!
              </span>
            ) : (
              <div className='flex-1'>
                <Button
                  name='Kopjo Link'
                  padding='7px 15px'
                  border='transparent'
                  color='white'
                  bgColor='#2563eb'
                  bgHover='#1d4ed8'
                  borderHover='#1e40af'
                  onClick={() => {
                    navigator.clipboard.writeText(path);
                    handleIsCopied();
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Text } from '../../../components/text';
import { FAQ_INFO } from '../../..';

export const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestions = (id: number) =>
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  return (
    <div className='flex border-2 flex-col rounded-lg select-none'>
      {FAQ_INFO.map((faq, index) => {
        const questionNumber =
          index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
        return (
          <div
            onClick={() => toggleQuestions(faq.id)}
            className={`border-b-2 last:border-b-0 py-5 md:px-10 px-2 transition-all duration-300 ease-in-out ${
              openQuestions.includes(faq.id)
                ? 'bg-blue-50'
                : 'bg-white hover:bg-gray-50'
            }`}
            key={faq.id}
          >
            <div className='flex items-center w-full justify-between'>
              <span className='flex items-center md:gap-10 gap-2'>
                <Text
                  text={questionNumber}
                  size='sm:text-3xl text-xl'
                  font='font-bold'
                />
                <Text
                  text={faq.question}
                  size='sm:text-lg text-sm'
                  font='font-bold'
                />
              </span>

              <span
                className={`w-9 h-9 min-w-9 min-h-9 flex-shrink-0 rounded-lg 
                flex items-center justify-center cursor-pointer 
                transition-all duration-300 ease-in-out transform
                ${
                  openQuestions.includes(faq.id)
                    ? 'bg-gray-950 text-white rotate-90'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {openQuestions.includes(faq.id) ? (
                  <CloseIcon fontSize='small' />
                ) : (
                  <AddIcon />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openQuestions.includes(faq.id)
                  ? 'max-h-96 opacity-100 mt-5'
                  : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <Text
                text={faq.answer}
                size='sm:text-sm text-xs'
                font='font-medium'
                className='border-t border-gray-300 -mx-10 px-10 pt-4 text-gray-600 block'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

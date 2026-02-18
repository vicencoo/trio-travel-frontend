import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Icon } from '../icon/Icon';
import { Text } from '../text';
import type { InputProps } from './types';

export const Input = ({
  label,
  labelColor = 'text-black',
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  icon,
  img,
  iconPosition = 'start',
  isPassword = false,
  multiline = false,
  rows = 4,
  height = 'h-10',
  onFocus,
  onBlur,
  className = '',
  errorMessage,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <Text
          text={label}
          font='font-semibold'
          size='text-sm'
          className={labelColor}
        />
      )}

      <div className='relative w-full'>
        {multiline ? (
          <textarea
            name={name}
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange={onChange}
            className={`w-full p-3 border border-gray-300 text-gray-500 rounded-xl hide-scrollbar
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-100 bg-white/60 focus:bg-white/70
            backdrop-blur-sm ${className}`}
            {...props}
          />
        ) : (
          <input
            name={name}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`w-full
              ${icon || img ? 'pl-10' : 'pl-2'}
              ${isPassword ? 'pr-12' : 'pr-2'}
              ${height} py-2 border text-gray-500 border-black rounded-xl
              focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition-all duration-200 bg-white/60 focus:bg-white/70
              backdrop-blur-sm
              ${className}`}
            {...props}
          />
        )}

        {isPassword && (
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400  hover:text-gray-600 transition-colors'
          >
            {showPassword ? (
              <VisibilityOff className='h-5 w-5' />
            ) : (
              <Visibility className='h-5 w-5' />
            )}
          </button>
        )}

        {iconPosition && (icon || img) && (
          <div
            className={`absolute ${
              iconPosition === 'start' ? 'left-3' : 'right-3'
            }  top-1/2 transform -translate-y-1/2`}
          >
            <Icon icon={icon} img={img} size='sm' />
          </div>
        )}
      </div>
      {errorMessage && (
        <Text
          text={errorMessage}
          size='text-xs'
          font='font-medium'
          className='text-red-500'
        />
      )}
    </div>
  );
};

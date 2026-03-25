import React from 'react';
import type { IconProps } from './types';

export const Icon = ({ icon, size, className, img, onClick }: IconProps) => {
  const getIconSize = () => {
    let sizeClasses = 'w-7 h-7';
    switch (size) {
      case 'xs': {
        sizeClasses = 'w-4 h-4';
        break;
      }
      case 'sm': {
        sizeClasses = 'w-6 h-6';
        break;
      }
      case 'md': {
        sizeClasses = 'w-7 h-7';
        break;
      }
      case 'lg': {
        sizeClasses = 'w-8 h-8';
        break;
      }
      case 'xl': {
        sizeClasses = 'w-10 h-10';
        break;
      }
      case '2xl': {
        sizeClasses = 'w-12 h-12';
        break;
      }
      case '3xl': {
        sizeClasses = 'w-14 h-14';
        break;
      }
    }
    return sizeClasses;
  };

  const renderIcon = () => {
    if (!icon) return null;

    if (React.isValidElement(icon)) return icon;

    return React.createElement(icon);
  };

  return (
    <div
      className={`flex items-center justify-center ${className} ${getIconSize()}`}
      onClick={onClick}
    >
      {renderIcon()}
      {img && (
        <img
          src={
            img instanceof File
              ? URL.createObjectURL(img)
              : typeof img === 'string'
              ? img.startsWith('blob:')
                ? img
                : ``
              : ''
          }
          className={`${getIconSize()} ${className} object-contain`}
        />
      )}
    </div>
  );
};

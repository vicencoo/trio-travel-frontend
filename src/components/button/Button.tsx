import { Button as MuiButton } from '@mui/material';
import type { ButtonProps } from './types';

const DEFAULT_COLORS = {
  color: '#1a1a1a', // near-black — always passes
  bgColor: 'white',
  border: '#1a1a1a',
  bgHover: '#1a1a1a',
  hoverColor: '#ffffff',
};

export const Button = ({
  name,
  onClick,
  color = DEFAULT_COLORS.color,
  hoverColor = DEFAULT_COLORS.hoverColor,
  bgColor = DEFAULT_COLORS.bgColor,
  bgHover = DEFAULT_COLORS.bgHover,
  variant = 'outlined',
  fullWidth = false,
  endIcon,
  icon,
  border = DEFAULT_COLORS.border,
  borderHover,
  type = 'button',
  disabled,
  loading,
  padding = '10px 35px',
  className,
}: ButtonProps) => {
  return (
    <MuiButton
      type={type}
      disabled={disabled || loading}
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      startIcon={icon}
      endIcon={endIcon}
      className={`text-nowrap ${className}`}
      sx={{
        padding: `${padding}`,
        color: color || 'white',
        borderColor: border || 'black',
        backgroundColor: bgColor || 'black',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: bgHover || 'black',
          color: hoverColor || 'white',
          borderColor: borderHover || 'black',
          '& .MuiButton-startIcon, & .MuiButton-endIcon': {
            transform: 'scale(1.1)',
          },
        },
        '& .MuiButton-startIcon, & .MuiButton-endIcon': {
          transition: 'transform 0.2s ease',
          fontSize: '0.9em',
        },

        '& .button-text': {
          transition: 'transform 0.2s ease',
          display: 'inline-block',
        },

        '&.Mui-disabled': {
          backgroundColor: bgColor,
          color: color,
          borderColor: border || 'black',
          opacity: 0.5,
          cursor: 'not-allowed',
          pointerEvents: 'auto',
        },
      }}
    >
      <span className='button-text capitalize text-sm font-medium'>{name}</span>
    </MuiButton>
  );
};

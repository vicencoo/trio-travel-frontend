import { Button as MuiButton } from '@mui/material';
import type { ButtonProps } from './types';

export const Button = ({
  name,
  onClick,
  color = 'black',
  hoverColor,
  bgColor = 'white',
  bgHover = 'black',
  variant = 'outlined',
  fullWidth = false,
  endIcon,
  icon,
  border,
  borderHover,
  type,
  disabled,
  padding = '10px 35px',
  className,
}: ButtonProps) => {
  return (
    <MuiButton
      type={type}
      disabled={disabled}
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
      }}
    >
      <span className='button-text capitalize text-sm font-medium'>{name}</span>
    </MuiButton>
  );
};

// import { Button as MuiButton } from '@mui/material';
// import type { ButtonProps } from './types';

// export const Button = ({
//   name,
//   color = 'black',
//   hoverColor,
//   bgColor = 'white',
//   bgHover = 'black',
//   border,
//   borderHover,
//   padding = '10px 35px',
//   className,
//   ...muiProps
// }: ButtonProps) => {
//   return (
//     <MuiButton
//       component='button'
//       {...muiProps}
//       className={`text-nowrap ${className ?? ''}`}
//       sx={{
//         padding,
//         color,
//         borderColor: border || 'black',
//         backgroundColor: bgColor || 'black',
//         borderRadius: '6px',
//         display: 'flex',
//         alignItems: 'center',
//         '&:hover': {
//           backgroundColor: bgHover || 'black',
//           color: hoverColor || 'white',
//           borderColor: borderHover || 'black',
//           '& .MuiButton-startIcon, & .MuiButton-endIcon': {
//             transform: 'scale(1.1)',
//           },
//         },
//         '& .MuiButton-startIcon, & .MuiButton-endIcon': {
//           transition: 'transform 0.2s ease',
//           fontSize: '0.9em',
//         },
//         '& .button-text': {
//           transition: 'transform 0.2s ease',
//           display: 'inline-block',
//         },
//       }}
//     >
//       <span className='button-text capitalize text-sm font-medium'>{name}</span>
//     </MuiButton>
//   );
// };

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import type { SelectorProps } from './types';

export const Selector = ({
  value,
  name,
  onChange,
  options = [],
  label,
  border = 'black',
  multiple = false,
}: SelectorProps) => {
  return (
    <FormControl fullWidth variant='outlined' sx={{ mb: 2 }}>
      <InputLabel
        sx={{
          fontSize: 14,
          transform:
            value && (!Array.isArray(value) || value.length > 0)
              ? 'translate(14px, -8px) scale(0.75)'
              : 'translate(14px, 12px) scale(1)',
          '&.Mui-focused': {
            color: 'black',
            transform: 'translate(14px, -8px) scale(0.75)',
          },
        }}
      >
        {label}
      </InputLabel>

      <Select
        multiple={multiple}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
        sx={{
          height: 37,
          fontSize: 14,
          borderRadius: '8px',
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            py: '6px',
            minHeight: 'unset',
            color: border,
            flexWrap: 'wrap',
          },
          '& .MuiSvgIcon-root': {
            color: border,
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: border,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: border,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: border,
          },
        }}
      >
        {options &&
          options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value} className='text-white'>
              {opt.label}
            </MenuItem>
          ))}
        {/* {options &&
          options.map((opt, index) => (
            <MenuItem key={index} value={opt} className='text-white'>
              {opt}
            </MenuItem>
          ))} */}
      </Select>
    </FormControl>
  );
};

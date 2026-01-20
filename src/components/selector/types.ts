import type { SelectChangeEvent } from '@mui/material';

type SelectorOption = {
  label: string;
  value: string;
};

export type SelectorProps = {
  value?: string;
  name?: string;
  label?: string;
  options: SelectorOption[];
  border?: 'black' | 'white' | 'blue';
  multiple?: boolean;
  onChange: (event: SelectChangeEvent<string | string[]>) => void;
};

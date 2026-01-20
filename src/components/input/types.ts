import type {
  ChangeEventHandler,
  ComponentType,
  FocusEventHandler,
  ReactElement,
} from 'react';

export type InputProps = {
  label?: string;
  labelColor?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  name?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  icon?: ReactElement | ComponentType;
  img?: string;
  iconPosition?: 'start' | 'end';
  isPassword?: boolean;
  multiline?: boolean;
  rows?: number;
  height?: string;
  className?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};

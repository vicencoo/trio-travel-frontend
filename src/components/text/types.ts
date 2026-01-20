import type { MouseEventHandler, ReactNode, Ref } from 'react';

export type TextProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Tag?: any;
  text?: string | number;
  children?: ReactNode;
  size?: string;
  font?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  ref?: Ref<HTMLDivElement>;
  className?: string;
};

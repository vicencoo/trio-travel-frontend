import type { ReactNode } from 'react';

export type MetricCardProps = {
  label: string;
  value?: string | number;
  icon: ReactNode;
  iconBg: string;
};

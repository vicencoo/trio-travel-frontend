import type { Property } from '@/types/types';

export type PropertyItemProps = {
  property: Property;
  handleDelete: (id: number) => void;
  renewProperty: (id: number) => void;
  publishOrDraft: (id: number) => void;
};

import type { Property } from '@/types/types';

export type PropertyItemProps = {
  property: Property;
  handleDelete: (id: string) => void;
  renewProperty: (id: string) => void;
  publishOrDraft: (id: string) => void;
};

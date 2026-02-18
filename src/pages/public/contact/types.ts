import type { ContactTypes } from '@/types/types';

export type ContactFormProps = {
  contact: ContactTypes;
  handleChangeContact: (key: string, value: string) => void;
  handleSubmit: () => void;
};

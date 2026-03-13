import type { ContactTypes } from '@/shared/types/types';

export type ContactFormProps = {
  contact: ContactTypes;
  handleChangeContact: (key: string, value: string) => void;
  handleSubmit: () => void;
};

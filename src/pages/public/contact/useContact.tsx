import type { ContactTypes } from '@/types/types';
import { DEFAULT_CONTACT } from '@/utils/defaults';
import { useState } from 'react';

export const useContact = () => {
  const [contact, setContact] = useState<ContactTypes>(DEFAULT_CONTACT);

  const handleChangeContact = (key: string, value: string) => {
    setContact((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log('contact', contact);
    } catch (err) {
      console.log(err);
    }
  };
  return { handleChangeContact, contact, handleSubmit };
};

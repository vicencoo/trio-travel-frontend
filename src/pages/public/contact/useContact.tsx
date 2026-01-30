import { useState } from 'react';
import { DEFAULT_CONTACT } from '../../../defaults';
import type { ContactTypes } from '../../../types';

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

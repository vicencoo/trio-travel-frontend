import { axios } from '@/api';
import { DEFAULT_CONTACT } from '@/defaults/contact';
import type { ContactTypes } from '@/types/types';
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
      const res = await axios.post('/send-email', contact);
      if (res.data) setContact(DEFAULT_CONTACT);
    } catch (err) {
      console.log(err);
    }
  };
  return { handleChangeContact, contact, handleSubmit };
};

import { useEffect, useState } from 'react';
import type { HotelTypes } from '../../../types';
import { axios } from '../../../api';

export const useHotel = () => {
  const [hotels, setHotels] = useState<HotelTypes[] | []>([]);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const res = await axios('/hotels');
        if (res.data) setHotels(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getHotels();
  }, []);

  return { hotels };
};

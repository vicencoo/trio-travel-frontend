import { axios } from '@/api';
import type { HotelsResponse } from '@/types/responseTypes';
import { useEffect, useState, type ChangeEvent } from 'react';

const HOTEL_LIMIT = 9;

export const useHotel = () => {
  const [hotels, setHotels] = useState<HotelsResponse | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  useEffect(() => {
    const getHotels = async () => {
      try {
        const res = await axios(
          `/hotels?limit=${HOTEL_LIMIT}&page=${pageNumber}`,
        );
        if (res.data) setHotels(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getHotels();
  }, [pageNumber]);

  return { hotels, handlePageChange, pageNumber };
};

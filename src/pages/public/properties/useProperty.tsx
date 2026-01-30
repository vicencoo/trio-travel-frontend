import { useEffect, useState, type ChangeEvent } from 'react';
import { axios } from '../../../api';
import type { PropertiesResponse } from '../../../types';

export const useProperty = () => {
  const [data, setData] = useState<PropertiesResponse | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const ITEMS_PER_PAGE = 6;

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios(
          `/properties?limit=${ITEMS_PER_PAGE}&page=${pageNumber}`,
        );
        if (res.data) setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProperties();
  }, [pageNumber]);

  return { data, pageNumber, handlePageChange };
};

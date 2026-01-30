import { useEffect, useState, type ChangeEvent } from 'react';
import { axios } from '../../../api';
import type { PackageResponse } from '../../../types';

export const usePackages = () => {
  const ITEMS_PER_PAGE = 3;
  const [data, setData] = useState<PackageResponse | null>(null);

  const [pageNumber, setPageNumber] = useState<number>(1);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  useEffect(() => {
    const getAllPackages = async () => {
      try {
        const res = await axios(
          `/packages?packageLimit=${ITEMS_PER_PAGE}&page=${pageNumber}`,
        );
        if (res.data) setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getAllPackages();
  }, [pageNumber]);

  return { data, handlePageChange, pageNumber };
};

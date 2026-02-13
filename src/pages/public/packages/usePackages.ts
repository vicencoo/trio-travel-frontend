import { useEffect, useState, type ChangeEvent } from 'react';
import { axios } from '../../../api';
import type { PackageResponse } from '../../../responseTypes';

const ITEMS_PER_PAGE = 9;

export const usePackages = () => {
  const [data, setData] = useState<PackageResponse | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(inputValue);
    setPageNumber(1);
  };

  useEffect(() => {
    const getAllPackages = async () => {
      try {
        const res = await axios(
          `/packages?packageLimit=${ITEMS_PER_PAGE}&page=${pageNumber}&searchQuery=${searchQuery}`,
        );
        if (res.data) setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getAllPackages();
  }, [pageNumber, searchQuery]);

  return {
    data,
    handlePageChange,
    pageNumber,
    handleSearchChange,
    handleSearchClick,
  };
};

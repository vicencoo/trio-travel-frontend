import { useEffect, useState, type ChangeEvent } from 'react';
import { axios } from '../../../api';
import type { PropertiesResponse } from '../../../responseTypes';

const ITEMS_PER_PAGE = 9;

export const useProperty = () => {
  const [data, setData] = useState<PropertiesResponse | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [listingType, setListingType] = useState<'all' | 'rent' | 'sale'>(
    'all',
  );

  const hadleListingFilterChange = (type: 'all' | 'rent' | 'sale') => {
    setListingType(type);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(inputValue);
    setPageNumber(1);
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios(
          `/properties?limit=${ITEMS_PER_PAGE}&page=${pageNumber}&searchQuery=${searchQuery}&listingType=${listingType}`,
        );
        if (res.data) setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProperties();
  }, [pageNumber, searchQuery, listingType]);

  return {
    data,
    pageNumber,
    handlePageChange,
    handleSearchChange,
    handleSearchClick,
    listingType,
    hadleListingFilterChange,
  };
};

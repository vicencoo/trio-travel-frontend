import { propertyService } from '@/services/propertyServices';
import type { PropertiesResponse } from '@/types/responseTypes';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  LISTING_PARAM,
  listingParamFor,
  parseListingType,
  type ListingType,
} from '@/constants/propertyListing';

const ITEMS_PER_PAGE = 12;

export const useProperty = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const listingType = parseListingType(searchParams.get(LISTING_PARAM));

  const [data, setData] = useState<PropertiesResponse | null>(null);
  // The page is tied to the listing type it was picked for, so switching
  // the filter (also from the header menu) always starts again at page 1
  const [page, setPage] = useState({ listingType, number: 1 });
  const pageNumber = page.listingType === listingType ? page.number : 1;
  const [inputValue, setInputValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const hadleListingFilterChange = (type: ListingType) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        const param = listingParamFor(type);
        if (param) next.set(LISTING_PARAM, param);
        else next.delete(LISTING_PARAM);
        return next;
      },
      { replace: true },
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(inputValue);
    setPage({ listingType, number: 1 });
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, number: number) => {
    setPage({ listingType, number });
  };

  useEffect(() => {
    // Ignore responses that arrive after the filters have changed again
    let isCurrent = true;

    const getProperties = async () => {
      try {
        const res = await propertyService.getAll({
          limit: ITEMS_PER_PAGE,
          page: pageNumber,
          searchQuery,
          listingType,
        });
        if (isCurrent && res.data) setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        if (isCurrent) setIsLoading(false);
      }
    };
    getProperties();

    return () => {
      isCurrent = false;
    };
  }, [pageNumber, searchQuery, listingType]);

  return {
    data,
    pageNumber,
    handlePageChange,
    handleSearchChange,
    handleSearchClick,
    listingType,
    hadleListingFilterChange,
    isLoading,
  };
};

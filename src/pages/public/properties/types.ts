import type { ChangeEvent } from 'react';

export type PropertyFiltersTypes = {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
  hadleListingFilterChange: (type: 'all' | 'rent' | 'sale') => void;
  listingType: 'all' | 'rent' | 'sale';
  count?: number;
};

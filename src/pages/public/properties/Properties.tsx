import { useProperty } from './useProperty';
import { NoPropertyFound } from '../../../components/noPropertyFound';
import { PropertyCard } from '../../../components/propertyCard';
import { Pagination } from '../../../components/pagination';
import { useScrollOnChange } from '../../../hooks/useScrollOnChange';
import { PropertyHero } from './PropertyHero';
import { PropertyFilters } from './PropertyFilters';

export const Properties = () => {
  const {
    data,
    handlePageChange,
    pageNumber,
    handleSearchChange,
    handleSearchClick,
    hadleListingFilterChange,
    listingType,
  } = useProperty();
  const { scrollRef } = useScrollOnChange(pageNumber);

  return (
    <div className='flex flex-col gap-10 pb-10'>
      <PropertyHero />

      <div className='container' ref={scrollRef}>
        <PropertyFilters
          handleSearchChange={handleSearchChange}
          handleSearchClick={handleSearchClick}
          hadleListingFilterChange={hadleListingFilterChange}
          listingType={listingType}
          count={data?.pagination.totalProducts}
        />
      </div>

      {data?.properties && data.properties.length > 0 ? (
        <div className='flex flex-col gap-10 items-center'>
          <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-5'>
            {data &&
              data.properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
          <Pagination
            onChange={handlePageChange}
            page={pageNumber}
            pages={data.pagination.totalPages}
          />
        </div>
      ) : (
        <NoPropertyFound />
      )}
    </div>
  );
};

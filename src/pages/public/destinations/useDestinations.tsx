import { destinationServices } from '@/services/destinationServices';
import type { DestinationResponse } from '@/types/responseTypes';
import { useEffect, useState, type ChangeEvent } from 'react';
const DESTINATION_LIMIT = 12;

export const useDestinations = () => {
  const [data, setData] = useState<DestinationResponse | null>(null);
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const getDestinations = async () => {
    try {
      const res = await destinationServices.getAll({
        limit: DESTINATION_LIMIT,
        page,
      });
      if (res.data) setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      await getDestinations();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { data, handlePageChange, page };
};

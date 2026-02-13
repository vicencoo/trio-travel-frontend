import { useEffect, useState, type ChangeEvent } from 'react';
import type { DestinationResponse } from '../../../responseTypes';
import { axios } from '../../../api';

const DESTINATION_LIMIT = 12;

export const useDestinations = () => {
  const [data, setData] = useState<DestinationResponse | null>(null);
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const getDestinations = async () => {
    try {
      const res = await axios(
        `/destinations?limit=${DESTINATION_LIMIT}&page=${page}`,
      );
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

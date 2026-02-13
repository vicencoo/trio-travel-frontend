import { useEffect, useState, type ChangeEvent } from 'react';
import { axios } from '../../../api';
import type { PropertiesResponse } from '../../../responseTypes';

export const usePropertiesPage = () => {
  const [properties, setProperties] = useState<PropertiesResponse | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const getProperties = async () => {
    try {
      // const res = await axios(`/properties?limit=6&page=${pageNumber}`);
      const res = await axios(`/properties?limit=6&page=${pageNumber}`);

      if (res.data) setProperties(res.data);
    } catch (err) {
      console.error('Error getting properties', err);
    }
  };

  useEffect(() => {
    (async () => {
      await getProperties();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const handleDelete = async (id: string) => {
    try {
      const confirmation = window.confirm(
        'A jeni te sigurt se doni ta fshini kete prone?',
      );
      if (confirmation) {
        await axios.post(`/admin/delete-property?id=${id}`);
        await getProperties();
      }
    } catch (err) {
      console.error('Error deleting property', err);
    }
  };

  return { properties, handleDelete, handlePageChange, pageNumber };
};

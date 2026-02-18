import { axios } from '@/api';
import type { PropertiesResponse } from '@/types/responseTypes';
import { useEffect, useState, type ChangeEvent } from 'react';

export const usePropertiesPage = () => {
  const [properties, setProperties] = useState<PropertiesResponse | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [toast, setToast] = useState<string | null>(null);
  const [status, setStatus] = useState<'all' | 'active' | 'draft'>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleStatusChange = (type: 'all' | 'active' | 'draft') => {
    setStatus(type);
    setPageNumber(1);
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const getProperties = async () => {
    try {
      const res = await axios(
        `/properties?limit=6&page=${pageNumber}&status=${status}`,
      );

      if (res.data) setProperties(res.data);
    } catch (err) {
      console.error('Error getting properties', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getProperties();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, status]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const renewProperty = async (propertyId: string | number) => {
    try {
      const res = await axios.post(`/admin/renew-property?id=${propertyId}`);
      if (res.data) {
        await getProperties();
        showToast('Prona u rifreskua me sukses!');
      }
    } catch (err) {
      console.error(err);
    }
  };

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

  const publishOrDraft = async (id: string) => {
    try {
      await axios.post(`/admin/property/publishOrDraft?id=${id}`);
      await getProperties();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    properties,
    handleDelete,
    handlePageChange,
    pageNumber,
    renewProperty,
    toast,
    publishOrDraft,
    handleStatusChange,
    status,
    isLoading,
  };
};

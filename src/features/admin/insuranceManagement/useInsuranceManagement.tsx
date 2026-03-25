import { DEFAULT_INSURANCE } from '@/defaults/insurance';
import { insuranceServices } from '@/services/insuranceServices';
import type { InsuranceFieldError } from '@/types/errorTypes';
import type { InsurancesResponse } from '@/types/responseTypes';
import type { Insurance } from '@/types/types';
import { useEffect, useState, type ChangeEvent } from 'react';
const PAGE_LIMIT = 10;

export const useInsuranceManagement = () => {
  const [formData, setFormData] = useState(DEFAULT_INSURANCE);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [data, setData] = useState<InsurancesResponse>({
    insurances: [],
    totalPages: 0,
    totalCount: 0,
  });
  const [errors, setErrors] = useState<InsuranceFieldError>({});
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState({
    value: '',
    applied: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleChangeFilter = (value: string) => {
    setFilter((prev) => ({ ...prev, value }));
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilter((prev) => ({ ...prev, applied: prev.value }));
    }, 500);

    return () => clearTimeout(handler);
  }, [filter.value]);

  const getInsurances = async () => {
    try {
      const res = await insuranceServices.getAll({
        limit: PAGE_LIMIT,
        page,
        searchQuery: filter.applied,
      });
      if (res.data) setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getInsurances();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filter.applied]);

  const handleChangeData = (key: string, value: string | number | Date) => {
    setFormData((prev: Insurance) => ({ ...prev, [key]: value }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(DEFAULT_INSURANCE);
  };

  const handleEdit = (insurance: Insurance) => {
    setFormData(insurance);
    openModal();
  };

  const handleDelete = async (id: number) => {
    try {
      const confirm = window.confirm(
        'Jeni i sigurt që doni ta fshini këtë siguracion?',
      );
      if (confirm) {
        const res = await insuranceServices.delete(id);
        if (res.data) {
          await getInsurances();
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      const res = formData.id
        ? await insuranceServices.edit(formData.id, formData)
        : await insuranceServices.add(formData);
      if (res.data) {
        await getInsurances();
        closeModal();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Editing ticket error', error);
      if (error?.response?.data?.errors) {
        const fieldErrors: Record<string, string> = {};
        error.response.data.errors.forEach(
          (e: { path: string | number; msg: string }) => {
            fieldErrors[e.path] = e.msg;
          },
        );
        setErrors(fieldErrors);
      }
    }
  };

  return {
    openModal,
    closeModal,
    isModalOpen,
    formData,
    handleChangeData,
    handleSave,
    data,
    errors,
    handleEdit,
    handleDelete,
    handlePageChange,
    page,
    filter,
    handleChangeFilter,
    isLoading,
  };
};

import { axios } from '@/api';
import type { InsuranceFieldError } from '@/shared/types/errorTypes';
import type { InsurancesResponse } from '@/shared/types/responseTypes';
import type { Insurance } from '@/shared/types/types';
import { DEFAULT_INSURANCE } from '@/utils/defaults';
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

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  console.log('Page:', page);

  const getInsurances = async () => {
    try {
      const res = await axios(
        `/admin/insurances?limit=${PAGE_LIMIT}&page=${page}`,
      );
      if (res.data) setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      await getInsurances();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleChangeData = (key: string, value: string | number | Date) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
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
      const res = await axios.post(`/admin/delete-insurance?insuranceId=${id}`);
      if (res.data) {
        await getInsurances();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      const url = formData.id
        ? `/admin/edit-insurance?insuranceId=${formData.id}`
        : '/admin/add-insurance';
      const res = await axios.post(url, formData);
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
  };
};

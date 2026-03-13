import { axios } from '@/api';
import type { BookingFieldError } from '@/shared/types/errorTypes';
import type { SoldTicket } from '@/shared/types/types';
import { WORK_FORM_DEFAULT } from '@/utils/defaults';
import { useEffect, useState } from 'react';

export const useWorkManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState(WORK_FORM_DEFAULT);
  const [bookings, setBookings] = useState<SoldTicket[] | []>([]);
  const [errors, setErrors] = useState<BookingFieldError>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //   const payload = {
  //   ...formData,
  //   checkInDate: new Date(formData.checkInDate),
  // };

  const getBookings = async () => {
    try {
      const res = await axios('/admin/get-bookings');
      if (res.data) {
        setBookings(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getBookings();
    })();
  }, []);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setFormData(WORK_FORM_DEFAULT);
    setIsModalOpen(false);
  };

  const handleEdit = (data: SoldTicket) => {
    if (data) {
      setFormData(data);
      openModal();
    }
  };

  const handleDelete = async (id: number | string) => {
    try {
      const res = await axios.post(`/admin/delete-booking?bookingId=${id}`);
      if (res.data) {
        await getBookings();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      const url = formData.id
        ? `/admin/edit-booking?bookingId=${formData.id}`
        : '/admin/add-booking';

      const res = await axios.post(url, formData);
      if (res.data) {
        closeModal();
        await getBookings();
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
    bookings,
    openModal,
    closeModal,
    isModalOpen,
    handleChange,
    formData,
    handleEdit,
    handleSave,
    handleDelete,
    errors,
    isLoading,
  };
};

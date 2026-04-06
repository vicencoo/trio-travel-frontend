import { WORK_FORM_DEFAULT } from '@/defaults/soldTicket';
import { bookingServices } from '@/services/bookingServices';
import type { BookingFieldError } from '@/types/errorTypes';
import type { SoldTicket } from '@/types/types';
import { useEffect, useState } from 'react';

export const useWorkManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState(WORK_FORM_DEFAULT);
  const [bookings, setBookings] = useState<SoldTicket[] | []>([]);
  const [errors, setErrors] = useState<BookingFieldError>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAddingTicket, setIsAddingTicket] = useState<boolean>(false);

  const getBookings = async () => {
    try {
      const res = await bookingServices.getBookings();
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
    setFormData((prev: SoldTicket) => ({
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

  const handleDelete = async (id: number) => {
    try {
      const res = await bookingServices.delete(id);
      if (res.data) {
        await getBookings();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    setIsAddingTicket(true);
    try {
      const res = formData.id
        ? await bookingServices.edit(formData.id, formData)
        : await bookingServices.add(formData);
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
    } finally {
      setIsAddingTicket(false);
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
    isAddingTicket,
  };
};

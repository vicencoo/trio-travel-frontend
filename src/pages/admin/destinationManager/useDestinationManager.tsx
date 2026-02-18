import { axios } from '@/api';
import type { DestinationFieldError } from '@/types/errorTypes';
import type { DestinationResponse } from '@/types/responseTypes';
import type { DestinationImages, DestinationTypes } from '@/types/types';
import { DESTINATION_DATA } from '@/utils/defaults';
import { useEffect, useState, type ChangeEvent } from 'react';

export const useDestinationManager = () => {
  const [data, setData] = useState<DestinationTypes>(DESTINATION_DATA);
  const [destinations, setDestinations] = useState<DestinationResponse | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [errors, setErrors] = useState<DestinationFieldError>({});
  const [page, setPage] = useState<number>(1);

  const getDestinations = async () => {
    try {
      const res = await axios(`/destinations?limit=6&page=${page}`);
      if (res.data) setDestinations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDestinations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
    setInputValue('');
    setData(DESTINATION_DATA);
  };

  const handleChangeData = (key: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleImagesChange = (
    images: (File | string | DestinationImages)[],
  ) => {
    setData((prev) => ({
      ...prev,
      destination_images: images,
    }));
  };

  const isAdded = data.destination_types.find(
    (type) => type.type === inputValue,
  );

  const handleAddTypes = () => {
    if (inputValue.trim() === '') return;
    if (isAdded) {
      window.alert('This value is already addded.');
      setInputValue('');
      return;
    }
    setData((prev) => ({
      ...prev,
      destination_types: [
        ...prev.destination_types,
        { type: inputValue.trim().toLowerCase() },
      ],
    }));
    setInputValue('');
  };

  const removeType = (value: string) => {
    setData((prev) => ({
      ...prev,
      destination_types: prev.destination_types.filter(
        (item) => item.type !== value,
      ),
    }));
  };

  const handleDeleteDestination = async (id: string) => {
    try {
      const confirm = window.confirm(
        'Jeni të sigurt që doni ta fshini këtë destinacion?',
      );
      if (confirm) {
        await axios.post(`/admin/delete-destination?destination_id=${id}`);
        getDestinations();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditDestination = (destination: DestinationTypes) => {
    setData(destination);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      if (data.city) formData.append('city', data.city);
      if (data.country) formData.append('country', data.country);
      if (data.slogan) formData.append('slogan', data.slogan);
      if (data.destination_types)
        formData.append(
          'destination_types',
          JSON.stringify(data.destination_types),
        );
      if (data.destination_images)
        data.destination_images.map((img) => {
          if (img instanceof File) {
            formData.append('destination_images', img);
          }
        });

      const url = data.id
        ? `/admin/edit-destination?destination_id=${data.id}`
        : '/admin/add-destination';

      const res = await axios.post(url, formData);
      if (res.data) {
        handleOpenModal();
        getDestinations();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      if (err?.response?.data?.errors) {
        const fieldErrors: Record<string, string> = {};
        err.response.data.errors.forEach(
          (e: { path: string | number; msg: string }) => {
            fieldErrors[e.path] = e.msg;
          },
        );
        setErrors(fieldErrors);
      }
    }
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleAddTypes,
    inputValue,
    setInputValue,
    data,
    removeType,
    handleChangeData,
    handleImagesChange,
    handleSave,
    errors,
    destinations,
    handleDeleteDestination,
    handlePageChange,
    page,
    handleEditDestination,
  };
};

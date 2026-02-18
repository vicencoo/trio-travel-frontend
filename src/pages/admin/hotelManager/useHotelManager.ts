import { axios } from '@/api';
import type { HotelFieldError } from '@/types/errorTypes';
import type { HotelsResponse } from '@/types/responseTypes';
import type { HotelImage, HotelTypes } from '@/types/types';
import { HOTEL_DATA } from '@/utils/defaults';
import { useEffect, useState, type ChangeEvent } from 'react';

export const useHotelManager = () => {
  const [isHotelFormOpen, setIsHotelFormOpen] = useState<boolean>(false);
  const [hotelData, setHotelData] = useState<HotelTypes>(HOTEL_DATA);
  const [allHotels, setAllHotels] = useState<HotelsResponse | null>(null);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [errors, setErrors] = useState<HotelFieldError>({});

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const handleOpenForm = () => {
    setIsHotelFormOpen((prev) => !prev);
    setHotelData(HOTEL_DATA);
  };

  const handleChangeData = (key: string, value: string) => {
    setHotelData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSetFacilities = (itemId: string) => {
    setHotelData((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(itemId)
        ? prev.facilities.filter((id) => id !== itemId)
        : [...prev.facilities, itemId],
    }));
  };

  const handleImagesChange = (images: (File | string | HotelImage)[]) => {
    setHotelData((prev) => ({
      ...prev,
      hotel_images: images,
    }));
  };

  const getAllHotels = async () => {
    try {
      const res = await axios(`/hotels?limit=6&page=${pageNumber}`);
      if (res.data) setAllHotels(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllHotels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const handleEditHotel = (hotelItem: HotelTypes) => {
    const normalizedFacilities = hotelItem.facilities.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (f: any) => f.facility,
    );
    setHotelData({
      ...hotelItem,
      facilities: normalizedFacilities,
    });
    setIsHotelFormOpen(true);
  };

  const handleDeleteHotel = async (hotelId: string) => {
    try {
      const confirm = window.confirm(
        'A jeni te sigurte qe doni ta fshini kete hotel?',
      );
      if (!confirm) return;
      await axios.post(`/admin/delete-hotel?hotelId=${hotelId}`);
      setPageNumber(1);
      await getAllHotels();
    } catch (err) {
      console.error(err);
    }
  };

  const saveHotel = async () => {
    try {
      console.log('Data collected:', hotelData);
      const formData = new FormData();
      if (hotelData.hotel_name)
        formData.append('hotel_name', hotelData.hotel_name);
      if (hotelData.location) formData.append('location', hotelData.location);
      if (hotelData.description)
        formData.append('description', hotelData.description);
      if (hotelData.rating)
        formData.append('rating', hotelData.rating.toString());
      if (hotelData.reviews)
        formData.append('reviews', hotelData.reviews.toString());
      if (hotelData.price) formData.append('price', hotelData.price.toString());
      if (hotelData.facilities)
        formData.append('facilities', JSON.stringify(hotelData.facilities));
      if (deletedImages.length) {
        formData.append('deletedImages', JSON.stringify(deletedImages));
      }
      if (hotelData.hotel_images)
        hotelData.hotel_images.map((img) => {
          if (img instanceof File) {
            formData.append('hotel_images', img);
          }
        });

      const url = hotelData.id
        ? `/admin/edit-hotel?hotelId=${hotelData.id}`
        : '/admin/add-hotel';

      const res = await axios.post(url, formData);
      if (res.data) {
        handleOpenForm();
        await getAllHotels();
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
    handleOpenForm,
    isHotelFormOpen,
    handleChangeData,
    hotelData,
    handleImagesChange,
    handleSetFacilities,
    saveHotel,
    allHotels,
    handleEditHotel,
    handlePageChange,
    pageNumber,
    handleDeleteHotel,
    setDeletedImages,
    errors,
  };
};

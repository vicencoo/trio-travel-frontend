import { useEffect, useState, type ChangeEvent } from 'react';
import { HOTEL_DATA } from '../../../defaults';
import type { HotelImages, HotelsResponse, HotelTypes } from '../../../types';
import { axios } from '../../../api';

export const useHotelManager = () => {
  const [isHotelFormOpen, setIsHotelFormOpen] = useState<boolean>(false);
  const [hotelData, setHotelData] = useState<HotelTypes>(HOTEL_DATA);
  const [allHotels, setAllHotels] = useState<HotelsResponse | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

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

  const handleImagesChange = (images: (File | string | HotelImages)[]) => {
    setHotelData((prev) => ({
      ...prev,
      hotelImages: images,
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
    setHotelData(hotelItem);
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
      const formData = new FormData();
      if (hotelData.hotelName)
        formData.append('hotelName', hotelData.hotelName);
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
      if (hotelData.hotelImages)
        hotelData.hotelImages.map((img) => {
          if (img instanceof File) {
            formData.append('hotelImages', img);
          }
        });

      const url = hotelData._id ? '' : '/admin/add-hotel';

      const res = await axios.post(url, formData);
      if (res.data) {
        handleOpenForm();
        await getAllHotels();
      }
    } catch (err) {
      console.error(err);
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
  };
};

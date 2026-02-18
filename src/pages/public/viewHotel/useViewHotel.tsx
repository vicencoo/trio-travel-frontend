import { axios } from '@/api';
import type { HotelTypes } from '@/types/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useViewHotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState<HotelTypes | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = hotel?.hotel_images || [];

  const next = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const getHotel = async () => {
      try {
        const res = await axios(`/hotel?hotelId=${id}`);
        if (res.data) setHotel(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getHotel();
  }, [id]);

  return { hotel, currentImageIndex, setCurrentImageIndex, next, prev };
};

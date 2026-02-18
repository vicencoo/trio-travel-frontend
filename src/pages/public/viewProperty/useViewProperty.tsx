import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Property } from '@/types/types';
import axios from 'axios';

export const useViewProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<Property>({});
  const [index, setIndex] = useState<number>(0);

  const images = property.property_images || [];

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axios(`/property?id=${id}`);

        if (res.data) setProperty(res.data);
      } catch (err) {
        console.error('Getting property error', err);
      }
    };
    getProperty();
  }, [id]);

  return {
    property,
    index,
    next,
    prev,
    setIndex,
  };
};

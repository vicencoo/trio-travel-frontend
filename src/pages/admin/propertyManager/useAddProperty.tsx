import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { DEFAULT_PROPERTY } from '../../../defaults';
import { axios } from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';
import type { PropertyImage } from '../../../types';
import type { PropertyFieldError } from '../../../errorTypes';

export const useAddProperty = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(DEFAULT_PROPERTY);
  const [error, setError] = useState<PropertyFieldError>({});
  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axios(`/property?id=${id}`);
        if (res.data) setPropertyData(res.data);
      } catch (err) {
        console.error('Error getting properties', err);
      }
    };

    if (id) {
      getProperty();
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPropertyData(DEFAULT_PROPERTY);
    }
  }, [id]);

  const handleChangePropertyData = (key: string, value: string) => {
    setPropertyData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePropertyChange = (
    event: SelectChangeEvent<string | string[]>,
  ) => {
    const value = event.target.value;
    const stringValue = Array.isArray(value) ? value[0] : value;
    handleChangePropertyData('property_type', stringValue);
  };

  const handleImagesChange = (images: (File | string | PropertyImage)[]) => {
    setPropertyData((prev) => ({
      ...prev,
      property_images: images,
    }));
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      if (propertyData.listing_type)
        formData.append('listing_type', propertyData.listing_type);
      if (propertyData.property_type)
        formData.append('property_type', propertyData.property_type);
      if (propertyData.title) formData.append('title', propertyData.title);
      if (propertyData.description)
        formData.append('description', propertyData.description);
      if (propertyData.city) formData.append('city', propertyData.city);
      if (propertyData.area) formData.append('area', propertyData.area);
      if (propertyData.street) formData.append('street', propertyData.street);
      if (propertyData.price)
        formData.append('price', propertyData.price.toString());
      if (propertyData.space)
        formData.append('space', propertyData.space.toString());
      if (propertyData.bedrooms)
        formData.append('bedrooms', propertyData.bedrooms.toString());
      if (propertyData.toilets)
        formData.append('toilets', propertyData.toilets.toString());
      if (propertyData.floor_number)
        formData.append('floor_number', propertyData.floor_number.toString());
      if (propertyData.build_year)
        formData.append('build_year', propertyData.build_year.toString());
      if (deletedImages.length) {
        formData.append('deletedImages', JSON.stringify(deletedImages));
      }

      if (propertyData.property_images)
        propertyData.property_images.forEach((img) => {
          if (img instanceof File) {
            formData.append('property_images', img);
          }
        });

      const url = id ? `/admin/edit-property?id=${id}` : '/admin/add-property';
      const res = await axios.post(url, formData);
      if (res.data) {
        navigate('/admin/manage-properties');
        setPropertyData(DEFAULT_PROPERTY);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      if (error?.response?.data?.errors) {
        const fieldErrors: Record<string, string> = {};
        error.response.data.errors.forEach(
          (e: { path: string | number; msg: string }) => {
            fieldErrors[e.path] = e.msg;
          },
        );
        setError(fieldErrors);
      }
    }
  };

  return {
    handlePropertyChange,
    propertyData,
    handleChangePropertyData,
    handleImagesChange,
    handleSave,
    error,
    setDeletedImages,
  };
};

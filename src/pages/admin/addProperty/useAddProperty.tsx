import type { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { DEFAULT_PROPERTY } from '../../../defaults';
import { axios } from '../../../api';

export const useAddProperty = () => {
  const [data, setData] = useState(DEFAULT_PROPERTY);

  const handleChangePropertyData = (key: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePropertyChange = (
    event: SelectChangeEvent<string | string[]>,
  ) => {
    const value = event.target.value;
    const stringValue = Array.isArray(value) ? value[0] : value;
    handleChangePropertyData('propertyType', stringValue);
  };

  const handleImagesChange = (images: (File | string)[]) => {
    setData((prev) => ({
      ...prev,
      propertyImages: images,
    }));
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();

      formData.append('listeningType', data.listeningType);
      formData.append('propertyType', data.propertyType);
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('city', data.city);
      formData.append('area', data.area);
      formData.append('street', data.street);
      formData.append('price', data.price);
      formData.append('space', data.space);
      formData.append('bedrooms', data.bedrooms);
      formData.append('toilets', data.toilets);
      formData.append('buildYear', data.buildYear);

      data.propertyImages.forEach((img) => {
        if (img instanceof File) {
          formData.append('propertyImages', img);
        }
      });

      await axios.post('/admin/add-property', formData);

      console.log('Data Sending:', data);

      // const result = await response.json();
      // console.log('Saved property:', result);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    handlePropertyChange,
    data,
    handleChangePropertyData,
    handleImagesChange,
    handleSave,
  };
};

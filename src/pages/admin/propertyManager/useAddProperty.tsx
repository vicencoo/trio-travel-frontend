import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { DEFAULT_PROPERTY } from '../../../defaults';
import { axios } from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';
import type { PropertyImage } from '../../../types';

export const useAddProperty = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(DEFAULT_PROPERTY);
  const [error, setError] = useState<string | null>(null);
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
    handleChangePropertyData('propertyType', stringValue);
  };

  const handleImagesChange = (images: (File | string | PropertyImage)[]) => {
    setPropertyData((prev) => ({
      ...prev,
      propertyImages: images,
    }));
  };

  const handleSave = async () => {
    try {
      console.log(propertyData);

      const missingField = Object.entries(propertyData)
        .filter(
          ([key]) =>
            key !== 'propertyImages' &&
            key !== '_id' &&
            key !== 'bedrooms' &&
            key !== 'toilets' &&
            key !== 'floorNumber' &&
            key !== 'buildYear',
        )
        .filter(([, value]) => {
          if (typeof value === 'string') return value.trim() === '';
          return value === null || value === undefined;
        })
        .map(([field]) => field);

      console.log(missingField);

      if (missingField.length > 0) {
        return setError('Ju lutemi te plotesoni te gjitha fushat!');
      }

      const formData = new FormData();

      if (propertyData.listeningType)
        formData.append('listeningType', propertyData.listeningType);
      if (propertyData.propertyType)
        formData.append('propertyType', propertyData.propertyType);
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
      if (propertyData.floorNumber)
        formData.append('floorNumber', propertyData.floorNumber.toString());
      if (propertyData.buildYear)
        formData.append('buildYear', propertyData.buildYear.toString());

      if (propertyData.propertyImages)
        propertyData.propertyImages.forEach((img) => {
          if (img instanceof File) {
            formData.append('propertyImages', img);
          }
        });

      const url = id ? `/admin/edit-property?id=${id}` : '/admin/add-property';
      const res = await axios.post(url, formData);
      if (res.data) {
        navigate('/admin/manage-properties');
        setPropertyData(DEFAULT_PROPERTY);
      }
    } catch (error) {
      console.error(error);

      // setError(error?.response?.data?.message || `Failed to add new property!`);
    }
  };

  return {
    handlePropertyChange,
    propertyData,
    handleChangePropertyData,
    handleImagesChange,
    handleSave,
    error,
  };
};

import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState, type ChangeEvent } from 'react';
import { DEFAULT_PACKAGE } from '../../../defaults';
import type { PackageImage, TouristPackage } from '../../../types';
import { axios } from '../../../api';
import type { PackageResponse } from '../../../responseTypes';
import type { PackageFieldError } from '../../../errorTypes';

export const usePackageManager = () => {
  const [touristPackage, setTouristPackage] = useState(DEFAULT_PACKAGE);
  const [packages, setPackages] = useState<PackageResponse | null>(null);
  const [isPackageFormOpen, setIsPackageFormOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<PackageFieldError>({});

  const handleChangePage = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const handleOpenForm = () => {
    setIsPackageFormOpen((prev) => !prev);
    setTouristPackage(DEFAULT_PACKAGE);
    setEditMode(false);
  };

  const getPackages = async () => {
    try {
      const res = await axios(`/packages?packageLimit=6&page=${pageNumber}`);
      if (res.data) setPackages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      await getPackages();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const handleEditPackage = (packageItem: TouristPackage) => {
    setTouristPackage(packageItem);
    setEditMode(true);
    setIsPackageFormOpen(true);
  };

  const handleChangePackageData = (key: string, value: string) => {
    setTouristPackage((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePackageDetailsChange = (
    event: SelectChangeEvent<string | string[]>,
    type: 'accomodation' | 'meal_included',
  ) => {
    const value = event.target.value;
    const stringValue = Array.isArray(value) ? value[0] : value;
    if (type === 'accomodation') {
      handleChangePackageData('accomodation', stringValue);
    } else if (type === 'meal_included') {
      handleChangePackageData('meal_included', stringValue);
    }
  };

  const handleImagesChange = (images: (File | string | PackageImage)[]) => {
    setTouristPackage((prev) => ({
      ...prev,
      package_images: images,
    }));
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      if (touristPackage.title) formData.append('title', touristPackage.title);
      if (touristPackage.destination)
        formData.append('destination', touristPackage.destination);
      if (touristPackage.price)
        formData.append('price', touristPackage.price.toString());
      if (touristPackage.duration)
        formData.append('duration', touristPackage.duration.toString());
      if (touristPackage.description)
        formData.append('description', touristPackage.description);
      if (touristPackage.accomodation)
        formData.append('accomodation', touristPackage.accomodation);
      if (touristPackage.meal_included)
        formData.append('meal_included', touristPackage.meal_included);
      if (deletedImages.length) {
        formData.append('deletedImages', JSON.stringify(deletedImages));
      }
      if (touristPackage.package_images)
        touristPackage.package_images.map((img) => {
          if (img instanceof File) {
            formData.append('package_images', img);
          }
        });

      const url = editMode
        ? `/admin/edit-package?packageId=${touristPackage.id}`
        : '/admin/add-package';

      const res = await axios.post(url, formData);
      if (res.data) {
        setTouristPackage(DEFAULT_PACKAGE);
        handleOpenForm();
        setEditMode(false);
        await getPackages();
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

  const handleDeletePackage = async (id: string) => {
    try {
      const confirm = window.confirm(
        'Jeni te sigurt qe doni ta fshini kete pakete turistike?',
      );
      if (confirm) {
        const res = await axios.post(`/admin/delete-package?packageId=${id}`);
        if (res.data) {
          await getPackages();
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  return {
    handleChangePackageData,
    handlePackageDetailsChange,
    touristPackage,
    handleImagesChange,
    handleSave,
    handleOpenForm,
    isPackageFormOpen,
    handleEditPackage,
    packages,
    handleDeletePackage,
    handleChangePage,
    pageNumber,
    setDeletedImages,
    errors,
  };
};

import { DEFAULT_PACKAGE } from '@/defaults/package';
import { packageServices } from '@/services/packageServices';
import type { PackageFieldError } from '@/types/errorTypes';
import type { PackageResponse } from '@/types/responseTypes';
import type { PackageImage, TouristPackage } from '@/types/types';
import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState, type ChangeEvent } from 'react';

export const usePackageManager = () => {
  const [touristPackage, setTouristPackage] = useState(DEFAULT_PACKAGE);
  const [packages, setPackages] = useState<PackageResponse | null>(null);
  const [isPackageFormOpen, setIsPackageFormOpen] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<PackageFieldError>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<'all' | 'active' | 'draft'>('all');

  const getPackages = async () => {
    try {
      const res = await packageServices.getAll({
        packageLimit: 6,
        page: pageNumber,
        status,
      });
      if (res.data) setPackages(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePage = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const handleStatusChange = (status: 'all' | 'active' | 'draft') => {
    setStatus(status);
  };

  const handleOpenForm = () => {
    setIsPackageFormOpen((prev) => !prev);
    setTouristPackage(DEFAULT_PACKAGE);
  };

  useEffect(() => {
    (async () => {
      await getPackages();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, status]);

  const handleRenew = async (id: number) => {
    try {
      const res = await packageServices.renew(id);
      if (res.data) {
        await getPackages();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const publishOrDraftPackage = async (id: number) => {
    try {
      await packageServices.publishOrDraft(id);
      await getPackages();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditPackage = (packageItem: TouristPackage) => {
    setTouristPackage(packageItem);
    setIsPackageFormOpen(true);
  };

  const handleChangePackageData = (key: string, value: string) => {
    setTouristPackage((prev: TouristPackage) => ({
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
    setTouristPackage((prev: TouristPackage) => ({
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
      if (touristPackage.status) {
        formData.append('status', touristPackage.status);
      }
      if (touristPackage.package_images)
        touristPackage.package_images.map((img) => {
          if (img instanceof File) {
            formData.append('package_images', img);
          }
        });

      const res = touristPackage.id
        ? await packageServices.edit(touristPackage.id, formData)
        : await packageServices.add(formData);
      if (res.data) {
        setTouristPackage(DEFAULT_PACKAGE);
        handleOpenForm();
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

  const handleDeletePackage = async (id: number) => {
    try {
      const confirm = window.confirm(
        'Jeni te sigurt qe doni ta fshini kete pakete turistike?',
      );
      if (confirm) {
        const res = await packageServices.delete(id);
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
    handleRenew,
    errors,
    isLoading,
    publishOrDraftPackage,
    handleStatusChange,
    status,
  };
};

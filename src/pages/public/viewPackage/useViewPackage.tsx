import { useParams } from 'react-router-dom';
import { axios } from '../../../api';
import { useEffect, useState } from 'react';
import type { TouristPackage } from '../../../types';

export const useViewPackage = () => {
  const { id } = useParams();
  const [packageData, setPackageData] = useState<TouristPackage>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = packageData.package_images || [];

  const next = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await axios(`/package?packageId=${id}`);
        console.log(res.data);
        if (res.data) setPackageData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getPackage();
  }, [id]);

  return {
    packageData,
    isLoading,
    currentImageIndex,
    setCurrentImageIndex,
    next,
    prev,
  };
};

import { insuranceServices } from '@/services/insuranceServices';
import type { InsurancesResponse } from '@/types/responseTypes';
import type { Insurance } from '@/types/types';
import { useEffect, useState, type ChangeEvent } from 'react';
const PAGE_LIMIT = 7;

export const useInsuranceExpiration = () => {
  const [data, setData] = useState<InsurancesResponse>({
    insurances: [],
    totalPages: 0,
    totalCount: 0,
  });
  const [insurance, setInsurance] = useState<Insurance | null>(null);
  const [isPanelOpen, setPanelOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedInterval, setSelectedInterval] = useState<string | number>(14);
  const [newExpirationDate, setNewExpirationDate] = useState<Date | string>(
    new Date(),
  );
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState({
    value: '',
    applied: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleChangeFilter = (value: string) => {
    setFilter((prev) => ({ ...prev, value }));
  };

  const handleChangeInterval = (value: string | number) => {
    setPage(1);
    setSelectedInterval(value);
  };

  const handleChangeExpDate = (date: Date | string) => {
    setNewExpirationDate(date);
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilter((prev) => ({ ...prev, applied: prev.value }));
    }, 500);

    return () => clearTimeout(handler);
  }, [filter.value]);

  const getExpiringInsurances = async () => {
    try {
      const res = await insuranceServices.expiringInsurances({
        days: selectedInterval,
        limit: PAGE_LIMIT,
        page,
        searchQuery: filter.applied,
      });
      if (res.data) {
        setData(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getExpiringInsurances();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedInterval, page, filter.applied]);

  const openPanel = (insurance: Insurance) => {
    setInsurance(insurance);
    setPanelOpen(true);
  };

  const closePanel = () => {
    setInsurance(null);
    setPanelOpen(false);
  };

  const openModal = (insurance: Insurance) => {
    setInsurance(insurance);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setNewExpirationDate(new Date());
    setIsModalOpen(false);
  };

  const handleRenewInsurance = async (id: number) => {
    try {
      const res = await insuranceServices.renewInsurance(id, newExpirationDate);
      if (res.data) {
        closeModal();
        closePanel();
        await getExpiringInsurances();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    openPanel,
    closePanel,
    isPanelOpen,
    insurance,
    openModal,
    closeModal,
    isModalOpen,
    handleChangeInterval,
    selectedInterval,
    data,
    handleChangeExpDate,
    handleRenewInsurance,
    newExpirationDate,
    handlePageChange,
    page,
    handleChangeFilter,
    filter,
    isLoading,
  };
};

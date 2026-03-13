import { axios } from '@/api';
import { useEffect, useState } from 'react';
import type { CheckinTicketsResponse } from './types';
import type { SoldTicket } from '@/shared/types/types';

export const useCheckinService = () => {
  const [dateFilter, setDateFilter] = useState<Date>(new Date());
  const [data, setData] = useState<CheckinTicketsResponse>({});
  const [activeTicket, setActiveTicket] = useState<SoldTicket | null>(null);
  // const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [loadingId, setLoadingId] = useState<number | 'refresh' | null>(null);

  const formattedDate = dateFilter.toLocaleDateString('sq-AL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleDateChange = (date: Date | null) => {
    if (date) setDateFilter(date);
  };

  const handleNextDay = () => {
    setDateFilter((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() + 1);
      return next;
    });
  };

  const handlePreviousDay = () => {
    setDateFilter((prev) => {
      const previous = new Date(prev);
      previous.setDate(previous.getDate() - 1);
      return previous;
    });
  };

  const handleSetCurrentDay = () => {
    setDateFilter(new Date());
  };

  const openModal = (ticket: SoldTicket) => setActiveTicket(ticket);
  const closeModal = () => setActiveTicket(null);

  const getCheckinTickets = async () => {
    setLoadingId('refresh');
    try {
      const res = await axios(`/admin/get-checkin-tickets?date=${dateFilter}`);
      if (res.data) {
        setData(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingId(null);
    }
  };

  useEffect(() => {
    (async () => {
      await getCheckinTickets();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFilter]);

  const refreshPage = () => setDateFilter(new Date());

  const toggleStatus = async (id: number) => {
    setLoadingId(id);
    try {
      const res = await axios.post(
        `/admin/bookings/toggle-status?bookingId=${id}`,
      );

      if (res.data) {
        await getCheckinTickets();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingId(null);
    }
  };

  return {
    dateFilter,
    handleNextDay,
    handlePreviousDay,
    handleSetCurrentDay,
    formattedDate,
    handleDateChange,
    data,
    toggleStatus,
    openModal,
    closeModal,
    refreshPage,
    loadingId,
    activeTicket,
  };
};

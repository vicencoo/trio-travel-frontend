import { ticketServices } from '@/services/ticketServices';
import type { AllTicketsResponse } from '@/types/responseTypes';
import { useEffect, useState } from 'react';

const DISPLAY_TICKETS = 6;

export const usePlaneTickets = () => {
  const [planeTickets, setPlaneTicketS] = useState<AllTicketsResponse>({
    tickets: [],
    minPrice: null,
    averagePrice: null,
    totalTickets: null,
  });
  const [ticketsToAppear, setTicketsToAppear] =
    useState<number>(DISPLAY_TICKETS);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoadMore = () => {
    setTicketsToAppear((prev) => {
      if (ticketsToAppear === planeTickets.totalTickets) return prev;
      return prev + DISPLAY_TICKETS;
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(inputValue.toLowerCase());
    setTicketsToAppear(DISPLAY_TICKETS);
  };

  useEffect(() => {
    const getAllTickets = async () => {
      try {
        const res = await ticketServices.getAll({
          limit: ticketsToAppear,
          searchQuery,
        });
        if (res.data) setPlaneTicketS(res.data);
      } catch (err) {
        console.error('Error getting all tickets: ', err);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTickets();
  }, [ticketsToAppear, searchQuery]);

  return {
    planeTickets,
    handleLoadMore,
    ticketsToAppear,
    handleSearchChange,
    handleSearchClick,
    isLoading,
  };
};

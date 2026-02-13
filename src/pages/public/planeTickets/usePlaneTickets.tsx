import { useEffect, useState } from 'react';
import { axios } from '../../../api';
import type { AllTicketsResponse } from '../../../responseTypes';

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
        const res = await axios(
          `/tickets?limit=${ticketsToAppear}&searchQuery=${searchQuery}`,
        );
        if (res.data) setPlaneTicketS(res.data);
      } catch (err) {
        console.error('Error getting all tickets: ', err);
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
  };
};

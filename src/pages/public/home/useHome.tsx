import { useEffect, useState } from 'react';
import { axios } from '../../../api';
import type { PackageResponse, PropertiesResponse } from '../../../types';
import type { AllTicketsResponse } from '../../../responseTypes';

export const useHome = () => {
  const [properties, setProperties] = useState<PropertiesResponse | null>(null);
  const [planeTickets, setPlaneTicketS] = useState<AllTicketsResponse>({
    tickets: [],
  });
  const [packages, setPackages] = useState<PackageResponse | null>(null);

  const getAllPackages = async () => {
    try {
      const res = await axios(`/packages?packageLimit=6`);
      if (res.data) setPackages(res.data);
    } catch (err) {
      console.error('Error getting all packages: ', err);
    }
  };

  const getAllTickets = async () => {
    try {
      const res = await axios(`/tickets?limit=${4}`);
      if (res.data) setPlaneTicketS(res.data);
    } catch (err) {
      console.error('Error getting all tickets: ', err);
    }
  };

  const getProperties = async () => {
    try {
      const res = await axios(`/properties?limit=6`);
      if (res.data) setProperties(res.data);
    } catch (err) {
      console.error('Error getting properties:', err);
    }
  };

  useEffect(() => {
    (async () => {
      await getProperties();
      await getAllTickets();
      await getAllPackages();
    })();
  }, []);
  return { properties, planeTickets, packages };
};

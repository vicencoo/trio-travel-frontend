import { useEffect, useState } from 'react';
import { axios } from '../../../api';
import type {
  AllTicketsResponse,
  PackageResponse,
  PropertiesResponse,
} from '../../../responseTypes';
import type { DestinationTypes } from '../../../types';

const PACKAGE_LIMIT = 6;
const TICKET_LIMIT = 4;
const PROPERTY_LIMIT = 6;

export const useHome = () => {
  const [properties, setProperties] = useState<PropertiesResponse | null>(null);
  const [planeTickets, setPlaneTicketS] = useState<AllTicketsResponse>({
    tickets: [],
  });
  const [packages, setPackages] = useState<PackageResponse | null>(null);
  const [destinations, setDestinations] = useState<DestinationTypes[] | []>([]);

  const getDestinations = async () => {
    try {
      const res = await axios('/destinations');
      if (res.data) setDestinations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getPackages = async () => {
    try {
      const res = await axios(`/packages?packageLimit=${PACKAGE_LIMIT}`);
      if (res.data) setPackages(res.data);
    } catch (err) {
      console.error('Error getting all packages: ', err);
    }
  };

  const getTickets = async () => {
    try {
      const res = await axios(`/tickets?limit=${TICKET_LIMIT}`);
      if (res.data) setPlaneTicketS(res.data);
    } catch (err) {
      console.error('Error getting all tickets: ', err);
    }
  };

  const getProperties = async () => {
    try {
      const res = await axios(`/properties?limit=${PROPERTY_LIMIT}`);

      if (res.data) setProperties(res.data);
    } catch (err) {
      console.error('Error getting properties:', err);
    }
  };

  useEffect(() => {
    (async () => {
      await getProperties();
      await getTickets();
      await getPackages();
      await getDestinations();
    })();
  }, []);
  return { properties, planeTickets, packages, destinations };
};

import { useEffect, useState, type ChangeEvent } from 'react';
import type { PlaneTicket, TicketImage } from '../../../types';
import { DEFAULT_TICKET } from '../../../defaults';
import { axios } from '../../../api';

const ADMIN_PLANE_TICKETS = 6;

export const usePlaneTicketsPage = () => {
  const [planeTicket, setPlaneTicket] = useState<PlaneTicket>(DEFAULT_TICKET);
  const [openModal, setOpenModal] = useState(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [data, setData] = useState({
    tickets: [],
    minPrice: null,
    averagePrice: null,
    totalTickets: null,
    totalPages: null,
  });

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
    setPlaneTicket(DEFAULT_TICKET);
    setEditMode(false);
  };

  const getAllTickets = async () => {
    try {
      const res = await axios(
        `/tickets?limit=${ADMIN_PLANE_TICKETS}&page=${pageNumber}`,
      );
      if (res.data) setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      await getAllTickets();
    })();
  }, [pageNumber]);

  const handleEditTicket = (ticket: PlaneTicket) => {
    setPlaneTicket(ticket);
    setOpenModal(true);
    setEditMode(true);
  };

  const handleDeleteTicket = async (ticketId: string) => {
    try {
      const confirm = window.confirm(
        'Are you sure that you want to delete this Plane Ticket?',
      );
      if (confirm) {
        const res = await axios.post(
          `/admin/delete-ticket?ticketId=${ticketId}`,
        );

        if (res.data) {
          await getAllTickets();
        }
      }
    } catch (err) {
      console.error('Error deleting ticket', err);
    }
  };

  const hadleTicketChange = (key: string, value: string) => {
    setPlaneTicket((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleImageChange = (images: (string | File | TicketImage)[]) => {
    setPlaneTicket((prev) => ({
      ...prev,
      ticketImages: images,
    }));
  };
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      if (planeTicket.from) formData.append('from', planeTicket.from);
      if (planeTicket.to) formData.append('to', planeTicket.to);
      if (planeTicket.departureAirport)
        formData.append('departureAirport', planeTicket.departureAirport);
      if (planeTicket.arrivalAirport)
        formData.append('arrivalAirport', planeTicket.arrivalAirport);
      if (planeTicket.price)
        formData.append('price', planeTicket.price.toString());
      if (planeTicket.ticketImages)
        planeTicket.ticketImages.forEach((img) => {
          if (img instanceof File) {
            formData.append('ticketImages', img);
          }
        });

      const url = editMode
        ? `/admin/edit-ticket?ticketId=${planeTicket._id}`
        : '/admin/add-ticket';

      const res = await axios.post(url, formData);

      if (res.data) {
        setPlaneTicket(DEFAULT_TICKET);
        handleOpenModal();
        setEditMode(false);
        await getAllTickets();
      }
    } catch (err) {
      console.error('Editing ticket error', err);
    }
  };

  return {
    hadleTicketChange,
    handleSubmit,
    handleOpenModal,
    handleImageChange,
    openModal,
    planeTicket,
    data,
    handleDeleteTicket,
    handleEditTicket,
    handlePageChange,
    pageNumber,
  };
};

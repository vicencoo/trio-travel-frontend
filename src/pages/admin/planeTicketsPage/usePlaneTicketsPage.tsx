import { DEFAULT_TICKET } from '@/defaults/planeTicket';
import { ticketServices } from '@/services/ticketServices';
import type { PlaneTicketFieldError } from '@/types/errorTypes';
import type { PlaneTicket, TicketImage } from '@/types/types';
import { useEffect, useState, type ChangeEvent } from 'react';

const ADMIN_PLANE_TICKETS = 6;

export const usePlaneTicketsPage = () => {
  const [planeTicket, setPlaneTicket] = useState<PlaneTicket>(DEFAULT_TICKET);
  const [openModal, setOpenModal] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [data, setData] = useState({
    tickets: [],
    totalPages: null,
  });
  const [errors, setErrors] = useState<PlaneTicketFieldError>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAddingticket, setIsAddingTicket] = useState<boolean>(false);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
    setPlaneTicket(DEFAULT_TICKET);
  };

  const getAllTickets = async () => {
    try {
      const res = await ticketServices.getAll({
        limit: ADMIN_PLANE_TICKETS,
        page: pageNumber,
      });
      if (res.data) setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getAllTickets();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const handleEditTicket = (ticket: PlaneTicket) => {
    setPlaneTicket(ticket);
    setOpenModal(true);
  };

  const handleDeleteTicket = async (ticketId: number) => {
    try {
      const confirm = window.confirm(
        'Are you sure that you want to delete this Plane Ticket?',
      );
      if (confirm) {
        const res = await ticketServices.delete(ticketId);

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
      ticket_images: images,
    }));
  };
  const handleSubmit = async () => {
    setIsAddingTicket(true);
    try {
      const formData = new FormData();
      if (planeTicket.from) formData.append('from', planeTicket.from);
      if (planeTicket.to) formData.append('to', planeTicket.to);
      if (planeTicket.departure_airport)
        formData.append('departure_airport', planeTicket.departure_airport);
      if (planeTicket.arrival_airport)
        formData.append('arrival_airport', planeTicket.arrival_airport);
      if (planeTicket.price)
        formData.append('price', planeTicket.price.toString());
      if (planeTicket.ticket_images)
        planeTicket.ticket_images.forEach((img) => {
          if (img instanceof File) {
            formData.append('ticket_images', img);
          }
        });

      const res = planeTicket.id
        ? await ticketServices.edit(planeTicket.id, formData)
        : await ticketServices.add(formData);

      if (res.data) {
        setPlaneTicket(DEFAULT_TICKET);
        handleOpenModal();
        await getAllTickets();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Editing ticket error', error);
      if (error?.response?.data?.errors) {
        const fieldErrors: Record<string, string> = {};
        error.response.data.errors.forEach(
          (e: { path: string | number; msg: string }) => {
            fieldErrors[e.path] = e.msg;
          },
        );
        setErrors(fieldErrors);
      }
    } finally {
      setIsAddingTicket(false);
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
    errors,
    isLoading,
    isAddingticket,
  };
};

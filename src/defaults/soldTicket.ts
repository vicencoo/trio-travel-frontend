import type { SoldTicket } from "@/types/types";

export const WORK_FORM_DEFAULT: SoldTicket = {
  client_name: "",
  ticket_date: new Date(),
  ticket_code: "",
  flight_company_id: "",
  ticket_price: "",
};

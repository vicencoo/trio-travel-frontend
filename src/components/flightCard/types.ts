export type FlightCardProps = {
  item: {
    id: number;
    image: string;
    departureAirport: string;
    arrivalAirport: string;
    from: string;
    to: string;
    price: number | string;
  };
};

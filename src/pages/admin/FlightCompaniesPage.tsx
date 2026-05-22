import { lazy } from "react";

const FlightCompaniesPage = lazy(
  () => import("@features/admin/flightCompanies"),
);

export default FlightCompaniesPage;

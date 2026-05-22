import { DEFAULT_FLIGHT_COMPANY } from "@/defaults/flightCompany";
import { flightCompanyServices } from "@/services/flightCompanySerices";
import type { FlightCompany } from "@/types/types";
import { useEffect, useState } from "react";

// const companies = [
//   { id: 1, flight_company: "Air Albania" },
//   { id: 2, flight_company: "Turkish Airlines" },
//   { id: 3, flight_company: "Lufthansa" },
// ];

export const useFlightCompanies = () => {
  const [companies, setCompanies] = useState<FlightCompany[] | []>([]);
  const [formData, setFormData] = useState(DEFAULT_FLIGHT_COMPANY);
  const [isAddCompanyOpen, setIsAddCompanyOpen] = useState<boolean>(false);
  // const [isEditing, setIsEditing] = useState<boolean>(false);
  // const [editingId, setEditingId] = useState<number>();

  const getCompanies = async () => {
    try {
      console.log("Getting");
      const res = await flightCompanyServices.getCompanies();

      if (res.data) {
        console.log(res.data.data);

        setCompanies(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeCompanyName = (key: string, value: string) => {
    setFormData((prev: FlightCompany) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleOpenForm = () => {
    setIsAddCompanyOpen((prev) => !prev);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCompanies();
  }, []);

  const handleStartEditing = (company: FlightCompany) => {
    if (!company) return;
    setFormData(company);
  };

  const handleCloseEditing = () => {
    setFormData(DEFAULT_FLIGHT_COMPANY);
  };

  const handleSaveCompany = async () => {
    try {
      const flight_company = formData.flight_company.trim().toLowerCase();
      if (!flight_company) return;

      if (formData.id) {
        const res = await flightCompanyServices.editCompany(
          formData.id,
          flight_company,
        );
        if (res.data) {
          setFormData(DEFAULT_FLIGHT_COMPANY);
          await getCompanies();
        }
      } else {
        const res = await flightCompanyServices.addCompany(flight_company);
        if (res.data) {
          setFormData(DEFAULT_FLIGHT_COMPANY);
          setIsAddCompanyOpen(false);
          await getCompanies();
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCompany = async (companyId: number) => {
    try {
      if (!companyId) return alert("Company not valid!");

      const confirm = window.confirm(
        "Do you want to delete this flight company?",
      );

      if (confirm) {
        const res = await flightCompanyServices.deleteCompany(companyId);
        if (res.data) {
          await getCompanies();
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    companies,
    handleOpenForm,
    isAddCompanyOpen,
    formData,
    handleChangeCompanyName,
    handleSaveCompany,
    // editingId,
    handleStartEditing,
    handleCloseEditing,
    handleDeleteCompany,
  };
};

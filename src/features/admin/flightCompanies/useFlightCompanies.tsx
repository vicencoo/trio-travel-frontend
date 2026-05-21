import { flightCompanyServices } from "@/services/flightCompanySerices";
import { useEffect, useState } from "react";

type FlightCompany = {
  id?: number;
  name: string;
};

export const useFlightCompanies = () => {
  const [formData, setFormData] = useState("");
  const [companies, setCompanies] = useState<FlightCompany[]>([]);
  const [isAddOrEditOpen, setIsAddOrEditOpen] = useState<boolean>(false);
  // const [isEditing, setIsEditing] = useState<boolean>(false);
  // const [editingId, setEditingId] = useState<number>();

  const handleChangeCompanyName = (name: string) => {
    setFormData(name);
  };

  const handleOpenForm = () => {
    setIsAddOrEditOpen((prev) => !prev);
    setFormData("");
  };
  useEffect(() => {
    const getCompanies = async () => {
      try {
        console.log("Getting");
        const res = await flightCompanyServices.getCompanies();
        setCompanies(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCompanies();
  }, []);

  const handleSaveCompany = async () => {
    try {
      const payload = {
        name: formData.trim().toLowerCase(),
      };

      console.log("Company collected", payload);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    companies,
    handleOpenForm,
    isAddOrEditOpen,
    formData,
    handleChangeCompanyName,
    handleSaveCompany,
  };
};

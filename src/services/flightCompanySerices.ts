import { axios } from "@/api";

export const flightCompanyServices = {
  addCompany: (name: string) =>
    axios.post("/admin/add-flight-company", { name }),

  getCompanies: () => axios.get("/admin/get-all-flight-companies"),

  editCompany: (companyId: number, name: string) =>
    axios.post(
      "/admin/edit-flight-company",
      { name },
      {
        params: { companyId },
      },
    ),

  deleteCompany: (companyId: number) =>
    axios.post("/admin/delete-company", null, {
      params: { companyId },
    }),
};

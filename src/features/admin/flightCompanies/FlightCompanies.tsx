import {
  Check,
  Close,
  DeleteOutlinedIcon,
  ModeEditOutlineOutlinedIcon,
  Plane,
  Plus,
} from "@/icons";
import { useFlightCompanies } from "./useFlightCompanies";
import { Input } from "@/components/input";
import { Text } from "@/components/text";

const FlightCompanies = () => {
  const {
    handleOpenForm,
    isAddCompanyOpen,
    companies,
    formData,
    handleChangeCompanyName,
    handleSaveCompany,
    handleStartEditing,
    handleCloseEditing,
    handleDeleteCompany,
    isSubmitting,
  } = useFlightCompanies();

  console.log(companies);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-800 p-6 md:p-8">
      {/* Header */ isAddCompanyOpen}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200 flex-shrink-0">
            <Plane size={20} />
          </div>
          <div>
            <Text
              text={"Kompanitë e Fluturimeve"}
              size="text-xl"
              font="font-extrabold"
              className="text-slate-800 dark:text-slate-100 leading-tight"
            />
            <Text
              text={" Shiko, shto, modifiko dhe fshij kompanitë"}
              size="text-sm"
              font="font-medium"
              className="text-slate-400 mt-0.5"
            />
          </div>
        </div>
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-200 transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap"
        >
          {isAddCompanyOpen ? <Close /> : <Plus />}

          {isAddCompanyOpen ? "Mbyll" : "Shto Kompani"}
        </button>
      </div>

      {/* Card */}
      {/* <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"> */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-100">
          <p className="text-sm font-semibold text-slate-400 dark:text-slate-300">
            Gjithsej:{" "}
            <span className="text-blue-600 font-extrabold">
              {companies.length}
            </span>
            {"  "}
            kompani
          </p>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600">
              <th className="text-left px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-blue-100 w-14">
                #
              </th>
              <th className="text-left px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-blue-100">
                Emri i Kompanisë
              </th>
              <th className="text-right px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-blue-100">
                Veprimet
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Add row */}
            {isAddCompanyOpen && (
              <tr className="bg-blue-50 dark:bg-slate-700 border-b border-blue-100 dark:border-slate-600">
                <td className="px-6 py-3.5"></td>
                <td className="px-6 py-3.5">
                  <Input
                    autoFocus
                    value={formData.flight_company}
                    placeholder="Emri i kompanise"
                    onChange={(e) =>
                      handleChangeCompanyName("flight_company", e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (isSubmitting) return;
                      if (e.key === "Enter") handleSaveCompany();
                      if (e.key === "Escape") handleOpenForm();
                    }}
                    className="border-blue-400"
                  />
                </td>
                <td className="px-6 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    {/* <button
                      onClick={() => handleSaveCompany()}
                      className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors"
                      title="Ruaj"
                    >
                      <Check />
                    </button> */}
                    <button
                      disabled={isSubmitting}
                      onClick={() => handleSaveCompany()}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                      ${
                        isSubmitting
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-emerald-50 hover:bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      <Check />
                    </button>
                    <button
                      onClick={() => handleOpenForm()}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
                      title="Anulo"
                    >
                      <Close />
                    </button>
                  </div>
                </td>
              </tr>
            )}

            {companies
              ? companies?.map((c, i) => (
                  <tr
                    key={c.id}
                    className="border-b border-slate-50 dark:border-slate-700 last:border-0 hover:bg-slate-50/60 dark:hover:bg-slate-700/60 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <Text
                        text={i + 1}
                        className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-200"
                        size="text-xs"
                        font="font-bold"
                      />
                    </td>
                    <td className="px-6 py-4">
                      {formData.id === c.id ? (
                        <Input
                          autoFocus
                          value={formData.flight_company}
                          className="max-w-max"
                          onChange={(e) =>
                            handleChangeCompanyName(
                              "flight_company",
                              e.target.value,
                            )
                          }
                          onKeyDown={(e) => {
                            if (isSubmitting) return;
                            if (e.key === "Enter") handleSaveCompany();
                            if (e.key === "Escape") handleCloseEditing();
                          }}
                        />
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                          <Text
                            text={c.flight_company}
                            size="text-sm"
                            font="font-semibold"
                            className="text-slate-700 dark:text-slate-100 capitalize"
                          />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {formData.id === c.id ? (
                          <>
                            <button
                              onClick={handleSaveCompany}
                              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-200 flex items-center justify-center transition-colors"
                              title="Ruaj"
                            >
                              <Check />
                            </button>
                            <button
                              onClick={handleCloseEditing}
                              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
                              title="Anulo"
                            >
                              <Close />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleStartEditing(c)}
                              className="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors"
                              title="Edito"
                            >
                              <ModeEditOutlineOutlinedIcon />
                            </button>

                            <button
                              disabled={isSubmitting}
                              onClick={() => {
                                if (c.id) handleDeleteCompany(c.id);
                              }}
                              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                              ${
                                isSubmitting
                                  ? "bg-gray-300 dark:bg-slate-600 text-gray-400 dark:text-slate-400 cursor-not-allowed"
                                  : "bg-red-50 hover:bg-red-100 text-red-500"
                              }`}
                            >
                              <DeleteOutlinedIcon />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightCompanies;

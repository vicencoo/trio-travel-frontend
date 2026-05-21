import {
  Check,
  Close,
  DeleteOutlinedIcon,
  ModeEditOutlineOutlinedIcon,
  Plane,
  Plus,
  Search,
} from "@/icons";
import { useFlightCompanies } from "./useFlightCompanies";
import { Input } from "@/components/input";
// import { useState } from "react";

// const initialCompanies = [
//   { id: 1, name: "Air Albania" },
//   { id: 2, name: "Turkish Airlines" },
//   { id: 3, name: "Wizz Air" },
//   { id: 4, name: "Ryanair" },
//   { id: 5, name: "Lufthansa" },
// ];

const FlightCompanies = () => {
  const {
    handleOpenForm,
    isAddOrEditOpen,
    companies,
    formData,
    handleChangeCompanyName,
    handleSaveCompany,
  } = useFlightCompanies();

  console.log(companies);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200 flex-shrink-0">
            <Plane size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 leading-tight">
              Kompanitë e Fluturimeve
            </h1>
            <p className="text-sm text-slate-400 font-medium mt-0.5">
              Shiko, shto, modifiko dhe fshij kompanitë
            </p>
          </div>
        </div>
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-200 transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap"
        >
          <Plus /> Shto Kompani
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-100">
          <p className="text-sm font-semibold text-slate-400">
            Gjithsej:{" "}
            <span className="text-blue-600 font-extrabold">
              {/* {companies.length} */}
            </span>{" "}
            kompani
          </p>
          {/* <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition-colors">
            <span className="text-slate-400">
              <Search />
            </span>
            <input
              className="bg-transparent outline-none text-sm text-slate-700 placeholder-slate-400 w-44 font-medium"
              placeholder="Kërko kompani..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div> */}
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
            {isAddOrEditOpen && (
              <tr className="bg-blue-50 border-b border-blue-100">
                <td className="px-6 py-3.5"></td>
                <td className="px-6 py-3.5">
                  {/* <input
                    autoFocus
                    className="border-2 border-blue-500 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 outline-none bg-white w-72 max-w-full shadow-sm shadow-blue-100 focus:ring-2 focus:ring-blue-100"
                    placeholder="Emri i kompanisë..."
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveAdd();
                      if (e.key === "Escape") setAdding(false);
                    }}
                  /> */}
                  <Input
                    value={formData}
                    placeholder="Emri i kompanise"
                    onChange={(e) => handleChangeCompanyName(e.target.value)}
                  />
                </td>
                <td className="px-6 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={handleSaveCompany}
                      className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors"
                      title="Ruaj"
                    >
                      <Check />
                    </button>
                    <button
                      //   onClick={() => setAdding(false)}
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
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-xs font-bold text-slate-400">
                        {i + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {editingId === c.id ? (
                        <input
                          autoFocus
                          className="border-2 border-blue-500 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-800 outline-none bg-blue-50 w-64 max-w-full focus:ring-2 focus:ring-blue-100"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") saveEdit();
                            if (e.key === "Escape") cancelEdit();
                          }}
                        />
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                          <span className="text-sm font-semibold text-slate-700">
                            {c.name}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {editingId === c.id ? (
                          <>
                            <button
                              onClick={saveEdit}
                              className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors"
                              title="Ruaj"
                            >
                              <Check />
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
                              title="Anulo"
                            >
                              <Close />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEdit(c)}
                              className="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors"
                              title="Edito"
                            >
                              <ModeEditOutlineOutlinedIcon />
                            </button>
                            <button
                              onClick={() => setDeleteId(c.id)}
                              className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors"
                              title="Fshi"
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

      {/* {deleteId && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setDeleteId(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 w-80 max-w-[90vw] text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4 text-red-500">
              <DeleteOutlinedIcon size={22} />
            </div>
            <h3 className="text-base font-extrabold text-slate-800 mb-2">
              Fshi Kompaninë
            </h3>
            <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">
              Jeni i sigurt që doni të fshini{" "}
              <span className="font-bold text-slate-700">
                "{companies.find((c) => c.id === deleteId)?.name}"
              </span>
              ? Ky veprim nuk mund të kthehet.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors"
              >
                Anulo
              </button>
              <button
                onClick={doDelete}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold shadow-md shadow-red-100 transition-colors"
              >
                Fshi
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default FlightCompanies;

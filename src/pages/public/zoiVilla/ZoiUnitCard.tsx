import { Link } from "react-router-dom";
import { Image } from "@/components/image";
import {
  BathtubOutlinedIcon,
  HotelOutlinedIcon,
  Layers,
  SquareFootOutlinedIcon,
} from "@/icons";
import {
  formatArea,
  zoiFloorLabel,
  zoiStatusLabel,
  zoiUnitPath,
  type ZoiUnit,
} from "@/constants/zoiVilla";

type ZoiUnitCardProps = {
  unit: ZoiUnit;
  index?: number;
};

export const ZoiUnitCard = ({ unit, index = 0 }: ZoiUnitCardProps) => {
  const isSold = unit.status === "sold";

  return (
    <Link
      to={zoiUnitPath(unit)}
      className="public-reveal group relative flex w-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={unit.gallery[1] ?? unit.gallery[0]}
          alt={`Apartament ${unit.type}, Shkalla ${unit.stair}, Nr. ${unit.number} – Zoi Villa Residence`}
          loading={index < 3 ? "eager" : "lazy"}
          className={`h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-110 ${
            isSold ? "grayscale-[60%]" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
          Shkalla {unit.stair}
        </span>
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm ${
            isSold
              ? "bg-red-100/95 text-red-700"
              : "bg-emerald-100/95 text-emerald-700"
          }`}
        >
          {zoiStatusLabel(unit.status)}
        </span>
        <span className="absolute bottom-4 left-4 rounded-lg bg-navy/85 px-3 py-1.5 text-sm font-semibold text-gold">
          {unit.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Apartamenti nr. {unit.number}
          </p>
          <h3 className="text-lg font-bold text-gray-900 md:text-xl">
            Apartament {unit.type} · {formatArea(unit.area)}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-500">
            {unit.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-sm font-medium text-gray-500">
          <span className="flex items-center gap-1.5">
            <HotelOutlinedIcon fontSize="inherit" className="text-gray-400" />
            {unit.bedrooms} dhoma
          </span>
          <span className="flex items-center gap-1.5">
            <BathtubOutlinedIcon fontSize="inherit" className="text-gray-400" />
            {unit.bathrooms} {unit.bathrooms === 1 ? "tualet" : "tualete"}
          </span>
          <span className="flex items-center gap-1.5">
            <Layers size={14} className="text-gray-400" />
            {zoiFloorLabel(unit.floor)}
          </span>
          <span className="flex items-center gap-1.5">
            <SquareFootOutlinedIcon
              fontSize="inherit"
              className="text-gray-400"
            />
            {formatArea(unit.netArea)} neto
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Çmimi</span>
            <span className="font-serif text-lg font-semibold text-blue-700">
              {isSold ? "I shitur" : "Me kërkesë"}
            </span>
          </div>
          <span className="inline-flex items-center justify-center text-nowrap rounded-md border border-[#1d4ed8] bg-white px-5 py-2 text-sm font-medium text-[#1d4ed8] transition-colors duration-200 group-hover:bg-[#1d4ed8] group-hover:text-white">
            Shiko detajet
          </span>
        </div>
      </div>
    </Link>
  );
};

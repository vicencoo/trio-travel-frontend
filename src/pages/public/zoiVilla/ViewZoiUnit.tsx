import { Link, useParams } from "react-router-dom";
import type { ReactNode } from "react";
import { Card } from "@/components/card";
import { SEO } from "@/components/seo";
import { ViewImages } from "@/components/viewImages/ViewImages";
import { ShareModal } from "@/components/shareModal/ShareModal";
import { useDisclosure } from "@/hooks/useDisclosure";
import { NotFound } from "@/pages/public/notFound";
import { getZoiUnitSeo } from "@/seo/zoiVilla";
import {
  ArrowBack,
  BadgeCheck,
  BathtubOutlinedIcon,
  ChevronLeft,
  ChevronRight,
  Compass,
  HotelOutlinedIcon,
  Layers,
  RestaurantMenuOutlined,
  Share2,
  SquareFootOutlinedIcon,
  Car,
} from "@/icons";
import {
  ZOI_UNITS,
  ZOI_VILLA,
  ZOI_VILLA_PATH,
  formatArea,
  getZoiUnit,
  zoiFloorLabel,
  zoiStatusLabel,
  zoiUnitName,
  zoiUnitPath,
} from "@/constants/zoiVilla";
import { ZoiContactCard } from "./ZoiContactCard";
import { ZoiUnitCard } from "./ZoiUnitCard";
import { FloorPlan } from "./FloorPlan";

const Stat = ({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-3">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
      {icon}
    </span>
    <div className="flex flex-col">
      <span className="text-lg font-bold text-gray-900">{value}</span>
      <span className="text-sm font-semibold text-gray-500">{label}</span>
    </div>
  </div>
);

export const ViewZoiUnit = () => {
  const { slug } = useParams();
  const { close, isOpen, open } = useDisclosure();
  const unit = getZoiUnit(slug);

  if (!unit) return <NotFound />;

  const seo = getZoiUnitSeo(unit);
  const name = zoiUnitName(unit);
  const isSold = unit.status === "sold";

  const index = ZOI_UNITS.indexOf(unit);
  const prevUnit = ZOI_UNITS[(index - 1 + ZOI_UNITS.length) % ZOI_UNITS.length];
  const nextUnit = ZOI_UNITS[(index + 1) % ZOI_UNITS.length];

  // Same staircase first; for a sold unit, show what is still for sale
  const related = ZOI_UNITS.filter(
    (u) =>
      u !== unit &&
      (isSold
        ? u.status === "available" && u.type === unit.type
        : u.stair === unit.stair),
  ).slice(0, 3);

  return (
    <>
      <SEO {...seo} />

      <div className="container flex flex-col gap-10 pb-20 pt-3">
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <Link
              to={`${ZOI_VILLA_PATH}?shkalla=${unit.stair}#apartamentet`}
              className="flex w-max items-center text-gray-500 transition-all duration-300 will-change-transform hover:scale-110 hover:text-black hover:underline"
            >
              <ArrowBack fontSize="small" />
              <span className="font-medium">Kthehu te Zoi Villa</span>
            </Link>

            <button
              type="button"
              className="flex items-center gap-1 transition-all duration-150 will-change-transform hover:scale-105 hover:underline"
              onClick={open}
            >
              <Share2 size={18} />
              <span className="hidden font-medium md:flex">Shpërndaj</span>
            </button>
          </div>

          <ViewImages key={unit.slug} images={unit.gallery} title={name} />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="flex flex-col gap-5 md:col-span-2">
            <Card>
              <div className="flex flex-col gap-3 border-b-2 pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isSold
                        ? "bg-red-100 text-red-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {zoiStatusLabel(unit.status)}
                  </span>
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-gold">
                    {ZOI_VILLA.name}
                  </span>
                </div>

                <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h1 className="text-xl font-medium md:text-2xl">{name}</h1>
                  <span className="font-serif text-2xl font-bold text-blue-500">
                    {isSold ? "I shitur" : `Çmimi: ${ZOI_VILLA.price}`}
                  </span>
                </div>

                <p className="font-medium text-gray-500">
                  {ZOI_VILLA.city}, {ZOI_VILLA.country} ·{" "}
                  {zoiFloorLabel(unit.floor)} · Orientimi {unit.orientation}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Stat
                  icon={<SquareFootOutlinedIcon fontSize="small" />}
                  value={formatArea(unit.area)}
                  label="Sipërfaqja bruto"
                />
                <Stat
                  icon={<SquareFootOutlinedIcon fontSize="small" />}
                  value={formatArea(unit.netArea)}
                  label="Sipërfaqja neto"
                />
                <Stat
                  icon={<HotelOutlinedIcon fontSize="small" />}
                  value={unit.bedrooms}
                  label="Dhoma gjumi"
                />
                <Stat
                  icon={<BathtubOutlinedIcon fontSize="small" />}
                  value={unit.bathrooms}
                  label={unit.bathrooms === 1 ? "Tualet" : "Tualete"}
                />
                <Stat
                  icon={<Layers size={18} />}
                  value={zoiFloorLabel(unit.floor)}
                  label={`Shkalla ${unit.stair}`}
                />
                <Stat
                  icon={<Compass size={18} />}
                  value={unit.orientation}
                  label="Orientimi"
                />
                <Stat
                  icon={<RestaurantMenuOutlined fontSize="small" />}
                  value={ZOI_VILLA.kitchen}
                  label="Kuzhina"
                />
                <Stat
                  icon={<Car size={18} />}
                  value={ZOI_VILLA.parking}
                  label="Parkimi"
                />
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-medium">Përshkrimi</h2>
              <p className="font-medium text-gray-500">
                {unit.shortDescription} {unit.description}
              </p>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {ZOI_VILLA.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700"
                  >
                    <BadgeCheck
                      size={16}
                      className="shrink-0 text-emerald-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>

            <FloorPlan src={unit.floorPlan} alt={`Planimetria – ${name}`} />

            <div className="grid grid-cols-2 gap-3">
              <Link
                to={zoiUnitPath(prevUnit)}
                className="group flex min-w-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-700"
              >
                <ChevronLeft
                  size={18}
                  className="shrink-0 transition-transform group-hover:-translate-x-1"
                />
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs text-gray-400">I mëparshmi</span>
                  <span className="truncate">
                    Shkalla {prevUnit.stair}, Nr. {prevUnit.number}
                  </span>
                </span>
              </Link>
              <Link
                to={zoiUnitPath(nextUnit)}
                className="group flex min-w-0 items-center justify-end gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-right text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-700"
              >
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs text-gray-400">Tjetri</span>
                  <span className="truncate">
                    Shkalla {nextUnit.stair}, Nr. {nextUnit.number}
                  </span>
                </span>
                <ChevronRight
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="flex flex-col gap-5 md:sticky md:top-24">
              <ZoiContactCard
                subject={`Apartamentin ${unit.type}, Shkalla ${unit.stair}, Nr. ${unit.number}`}
                {...(isSold && {
                  title: "Ky apartament është shitur",
                  text: "Ju ndihmojmë të gjeni një apartament të ngjashëm në këtë rezidencë",
                })}
              />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-medium">
              {isSold
                ? `Apartamente ${unit.type} ende në shitje`
                : `Apartamente të tjera në Shkallën ${unit.stair}`}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
              {related.map((u, i) => (
                <ZoiUnitCard key={u.slug} unit={u} index={i + 3} />
              ))}
            </div>
          </section>
        )}

        <ShareModal isOpen={isOpen} close={close} path={seo.canonical} />
      </div>
    </>
  );
};

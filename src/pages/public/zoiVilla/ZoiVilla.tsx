import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/seo";
import { PAGE_SEO } from "@/seo/pages";
import { Image } from "@/components/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Car,
  House,
  KeyRound,
  Layers,
  MapPin,
} from "@/icons";
import {
  ZOI_STAIRS,
  ZOI_UNITS,
  ZOI_VILLA,
  type ZoiUnitStatus,
  type ZoiUnitType,
} from "@/constants/zoiVilla";
import { whatsappLink } from "@/pages/public/services/contact";
import { ZoiUnitCard } from "./ZoiUnitCard";
import { ZoiContactCard } from "./ZoiContactCard";
import { useZoiFilters } from "./useZoiFilters";

const AVAILABLE = ZOI_UNITS.filter((u) => u.status === "available").length;

const STATS = [
  { icon: Building2, value: ZOI_VILLA.stairs, label: "Shkallë banimi" },
  { icon: House, value: ZOI_UNITS.length, label: "Apartamente" },
  { icon: KeyRound, value: AVAILABLE, label: "Në shitje tani" },
  { icon: Car, value: ZOI_VILLA.parkingSpots, label: "Vende parkimi" },
];

const STATUS_OPTIONS: { value: ZoiUnitStatus | null; label: string }[] = [
  { value: null, label: "Të gjitha" },
  { value: "available", label: "Në shitje" },
  { value: "sold", label: "E shitur" },
];

const TYPE_OPTIONS: { value: ZoiUnitType | null; label: string }[] = [
  { value: null, label: "Të gjitha" },
  { value: "2+1", label: "2+1" },
  { value: "3+1", label: "3+1" },
];

const pillClass = (active: boolean) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
    active
      ? "bg-navy text-white shadow-sm"
      : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50 hover:text-gray-900"
  }`;

const scrollToUnits = () =>
  document
    .getElementById("apartamentet")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export const ZoiVilla = () => {
  const {
    units,
    stair,
    status,
    type,
    setStair,
    setStatus,
    setType,
    reset,
    hasFilters,
  } = useZoiFilters();

  // Coming back from an apartment (…#apartamentet) lands on the list
  const { hash } = useLocation();
  useEffect(() => {
    if (hash !== "#apartamentet") return;
    const timer = setTimeout(scrollToUnits, 50);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <SEO {...PAGE_SEO.zoiVilla} />

      <div className="flex flex-col gap-14 pb-20 md:gap-20">
        {/* Hero */}
        <section className="relative flex min-h-[460px] w-full overflow-hidden md:min-h-[540px]">
          <Image
            img={ZOI_VILLA.coverImage}
            alt={`${ZOI_VILLA.name}, ${ZOI_VILLA.city}`}
            loading="eager"
            priority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />

          <div className="container relative flex flex-col justify-center gap-6 pb-32 pt-14 text-white md:pb-36">
            <span className="inline-flex w-max items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <BadgeCheck size={14} />
              Projekt i rekomanduar
            </span>

            <div className="flex max-w-2xl flex-col gap-4">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                {ZOI_VILLA.name}
              </h1>
              <p className="flex items-center gap-2 text-sm font-medium text-white/80 md:text-base">
                <MapPin size={16} className="text-gold" />
                {ZOI_VILLA.city}, {ZOI_VILLA.country} · Apartamente 2+1 &amp; 3+1
              </p>
              <p className="text-base leading-7 text-white/80 md:text-lg">
                {ZOI_VILLA.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToUnits}
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-amber-300"
              >
                Shiko apartamentet
                <ArrowRight size={16} />
              </button>
              <a
                href={whatsappLink(
                  `Përshëndetje, dua informacion për apartamentet në ${ZOI_VILLA.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/40 transition-colors duration-200 hover:bg-white/10"
              >
                Kërko informacion
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container -mt-24 relative z-10 md:-mt-28">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-xl md:grid-cols-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white px-5 py-6 md:px-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </span>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 md:text-3xl">
                    {value}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="container grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
              Pse Zoi Villa
            </span>
            <h2 className="text-3xl font-medium text-gray-900">
              Jetesë e qetë, standard i lartë ndërtimi
            </h2>
            <p className="leading-7 text-gray-500">
              Çdo apartament ka kuzhinë open space, ndriçim natyral dhe
              planimetri funksionale. Vendet e parkimit ofrohen opsionalisht për
              çdo apartament. Trio Travel & Immo ju shoqëron nga vizita e parë
              deri te firmosja.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ZOI_VILLA.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3.5 text-sm font-medium text-gray-700 shadow-sm"
              >
                <BadgeCheck size={18} className="shrink-0 text-emerald-600" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Units explorer */}
        <section
          id="apartamentet"
          className="container flex scroll-mt-24 flex-col gap-8"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-3xl font-medium capitalize">
              Apartamentet në shitje
            </h2>
            <p className="text-sm font-medium text-gray-500">
              Zgjidhni shkallën dhe klikoni një apartament për të parë fotot,
              planimetrinë dhe detajet
            </p>
          </div>

          {/* Staircase picker */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            <button
              type="button"
              onClick={() => setStair(null)}
              className={`flex flex-col items-start gap-1 rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                stair === null
                  ? "border-navy bg-navy text-white shadow-lg"
                  : "border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              <span className="text-sm font-semibold">Të gjitha</span>
              <span
                className={`text-xs ${stair === null ? "text-gold" : "text-gray-500"}`}
              >
                {ZOI_UNITS.length} apartamente
              </span>
            </button>
            {ZOI_STAIRS.map((value) => {
              const inStair = ZOI_UNITS.filter((u) => u.stair === value);
              const free = inStair.filter(
                (u) => u.status === "available",
              ).length;
              const active = stair === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setStair(value)}
                  className={`flex flex-col items-start gap-1 rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                    active
                      ? "border-navy bg-navy text-white shadow-lg"
                      : "border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Layers size={15} />
                    Shkalla {value}
                  </span>
                  <span
                    className={`text-xs ${active ? "text-gold" : "text-gray-500"}`}
                  >
                    {inStair.length} njësi · {free} në shitje
                  </span>
                </button>
              );
            })}
          </div>

          {/* Status + type filters */}
          <div className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-semibold text-gray-700">
                Statusi:
              </span>
              {STATUS_OPTIONS.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setStatus(option.value)}
                  className={pillClass(status === option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-semibold text-gray-700">
                Tipi:
              </span>
              {TYPE_OPTIONS.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setType(option.value)}
                  className={pillClass(type === option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>
              <span className="font-semibold text-gray-900">
                {units.length}
              </span>{" "}
              {units.length === 1 ? "apartament" : "apartamente"}
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={reset}
                className="font-medium text-blue-700 hover:underline"
              >
                Pastro filtrat
              </button>
            )}
          </div>

          {units.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
              {units.map((unit, index) => (
                <ZoiUnitCard key={unit.slug} unit={unit} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-gray-200 bg-white p-10 text-center">
              <House size={26} className="text-blue-700" />
              <p className="font-semibold text-gray-900">
                Asnjë apartament me këto filtra
              </p>
              <button
                type="button"
                onClick={reset}
                className="text-sm font-medium text-blue-700 hover:underline"
              >
                Shiko të gjitha apartamentet
              </button>
            </div>
          )}
        </section>

        {/* Contact */}
        <section className="container grid gap-6 md:grid-cols-3 md:items-center">
          <div className="flex flex-col gap-3 md:col-span-2">
            <h2 className="text-3xl font-medium text-gray-900">
              Doni të shihni apartamentet nga afër?
            </h2>
            <p className="max-w-xl leading-7 text-gray-500">
              Na shkruani për çmimet aktuale, planimetritë e plota dhe
              disponueshmërinë e parkimeve. Organizojmë vizitën në rezidencë në
              kohën që ju përshtatet.
            </p>
          </div>
          <ZoiContactCard
            title="Kontaktoni Trio Travel & Immo"
            text="Agjenti juaj për Zoi Villa Residence"
          />
        </section>
      </div>
    </>
  );
};

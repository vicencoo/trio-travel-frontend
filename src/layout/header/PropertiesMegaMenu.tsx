import { Link } from "react-router-dom";
import { ArrowRight, House, MapPin, MessageCircleMore } from "@/icons";
import { PROPERTY_LISTING_LINKS } from "@/constants/propertyListing";
import { createSlug } from "@/utils/createSlug";
import { formatPropertyPrice } from "@/utils/currency";
import { inertProps } from "@/utils/inertProps";
import type { Property } from "@/types/types";
import { useRecentProperties } from "./useRecentProperties";
import type { MegaMenuProps } from "./types";

const OWNER_MESSAGE = encodeURIComponent(
  "Përshëndetje! Kam një pronë që dua ta shes ose ta jap me qira. A mund të më ndihmoni?",
);

const getImage = (property: Property) => {
  const first = property.property_images?.[0];
  return typeof first === "object" && "property_image" in first
    ? first.property_image
    : "";
};

const RecentPropertyCard = ({
  property,
  index,
  isOpen,
  onNavigate,
}: {
  property: Property;
  index: number;
  isOpen: boolean;
  onNavigate: () => void;
}) => (
  <Link
    to={`/pronat/${createSlug(property.title, property.id)}`}
    onClick={onNavigate}
    style={{ transitionDelay: isOpen ? `${80 + index * 60}ms` : "0ms" }}
    className={`group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${
      index === 2 ? "md:max-lg:hidden" : ""
    } ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
      <img
        src={getImage(property)}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-sm">
        {property.listing_type === "rent" ? "Me Qira" : "Në Shitje"}
      </span>
    </div>

    <div className="flex flex-1 flex-col gap-1.5 p-4">
      <h3 className="line-clamp-1 text-sm font-semibold capitalize text-gray-900">
        {property.title}
      </h3>
      <span className="flex items-center gap-1 text-xs capitalize text-gray-500">
        <MapPin size={12} className="shrink-0" />
        {property.city}, Shqipëri
      </span>
      {property.price != null && (
        <span className="mt-auto pt-1 text-base font-semibold text-blue-700">
          {formatPropertyPrice(property.price, property.currency)}
          {property.listing_type === "rent" && (
            <span className="text-xs font-medium text-gray-500"> / muaj</span>
          )}
        </span>
      )}
    </div>
  </Link>
);

const RecentPropertySkeleton = ({ index }: { index: number }) => (
  <div
    className={`flex flex-col overflow-hidden rounded-3xl border border-gray-100 ${
      index === 2 ? "md:max-lg:hidden" : ""
    }`}
  >
    <div className="aspect-[4/3] animate-pulse bg-gray-100" />
    <div className="flex flex-col gap-2 p-4">
      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-100" />
      <div className="h-3 w-1/2 animate-pulse rounded bg-gray-100" />
      <div className="h-5 w-1/3 animate-pulse rounded bg-gray-100" />
    </div>
  </div>
);

export const PropertiesMegaMenu = ({
  isOpen,
  whatsappUrl,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: MegaMenuProps) => {
  const { properties, isLoading } = useRecentProperties(isOpen);

  return (
    <div
      id="properties-mega-menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseEnter}
      onBlur={onMouseLeave}
      className={`hidden md:block absolute inset-x-0 top-full origin-top border-b border-gray-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.15)] transition-all duration-300 ease-out ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
      {...inertProps(!isOpen)}
    >
      <div className="container grid gap-5 py-6 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
        {/* Intro panel */}
        <div className="relative flex flex-col justify-between gap-5 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 p-5 text-white">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-blue-600/40 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Pronat</h3>
            <p className="text-sm leading-6 text-white/70">
              Prona në shitje dhe me qira në Vlorë dhe në të gjithë Shqipërinë.
            </p>
          </div>

          <div className="relative flex flex-col gap-2">
            {PROPERTY_LISTING_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-2xl bg-white/10 p-3 ring-1 ring-white/15 transition-colors duration-200 hover:bg-white hover:text-gray-950"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <link.icon size={18} />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold">{link.title}</span>
                  <span className="text-xs text-white/60 transition-colors duration-200 group-hover:text-gray-500">
                    {link.text}
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>

          <a
            href={`${whatsappUrl}?text=${OWNER_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <MessageCircleMore size={16} className="shrink-0" />
            Keni një pronë? Na kontaktoni
          </a>
        </div>

        {/* Newest properties */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">
              Pronat më të fundit
            </span>
            <Link
              to="/pronat"
              onClick={onNavigate}
              className="group inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800"
            >
              Të gjitha pronat
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <RecentPropertySkeleton key={idx} index={idx} />
              ))}
            </div>
          ) : properties && properties.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {properties.map((property, idx) => (
                <RecentPropertyCard
                  key={property.id}
                  property={property}
                  index={idx}
                  isOpen={isOpen}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          ) : (
            <Link
              to="/pronat"
              onClick={onNavigate}
              className="flex flex-1 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center transition-colors duration-200 hover:bg-gray-100"
            >
              <House size={24} className="text-blue-700" />
              <span className="text-sm font-semibold text-gray-900">
                Shikoni të gjitha pronat tona
              </span>
              <span className="text-xs text-gray-500">
                Apartamente, vila dhe ambiente në shitje ose me qira
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const PropertiesMobileLinks = () => (
  <div className="ml-4 flex flex-col gap-1 border-l-2 border-red-100 pl-3">
    {PROPERTY_LISTING_LINKS.map((link) => (
      <Link
        key={link.id}
        to={link.path}
        className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors duration-200 hover:bg-gray-50"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
          <link.icon size={18} />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">
            {link.title}
          </span>
          <span className="text-xs text-gray-500">{link.text}</span>
        </span>
      </Link>
    ))}
  </div>
);

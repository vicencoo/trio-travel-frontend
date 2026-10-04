import { Link } from "react-router-dom";
import { ArrowRight, MessageCircleMore, Package } from "@/icons";
import { homePageBanners } from "@/constants/homePageBanners";
import { inertProps } from "@/utils/inertProps";
import type { MegaMenuProps } from "./types";

export const PackagesMegaMenu = ({
  isOpen,
  whatsappUrl,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: MegaMenuProps) => {
  return (
    <div
      id="packages-mega-menu"
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
      <div className="container grid gap-5 py-6 lg:grid-cols-[280px_1fr]">
        {/* Intro panel */}
        <div className="relative hidden lg:flex flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 p-6 text-white">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-600/40 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Package size={20} />
            </span>
            <h3 className="text-xl font-semibold">Paketa Turistike</h3>
            <p className="text-sm leading-6 text-white/70">
              Oferta të përzgjedhura me fluturime, hotele dhe itinerare të
              organizuara për çdo sezon.
            </p>
          </div>

          <div className="relative flex flex-col gap-2">
            <Link
              to="/paketa-turistike"
              onClick={onNavigate}
              className="group inline-flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-950 transition-colors duration-200 hover:bg-red-50"
            >
              Të gjitha paketat
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white/80 ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              <MessageCircleMore size={16} />
              Kërko ofertë të personalizuar
            </a>
          </div>
        </div>

        {/* Featured packages from the home page banners */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {homePageBanners.map((banner, idx) => (
            <Link
              key={banner.id}
              to={banner.buttonUrl}
              onClick={onNavigate}
              style={{ transitionDelay: isOpen ? `${80 + idx * 60}ms` : "0ms" }}
              className={`group relative flex h-56 overflow-hidden rounded-3xl bg-gray-900 text-white ring-1 ring-gray-200 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <img
                src={banner.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-colors duration-300 group-hover:from-black/90" />

              <div className="relative flex w-full flex-col justify-between p-4">
                {banner.badge && (
                  <span className="w-max rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md ring-1 ring-white/25">
                    {banner.badge}
                  </span>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    {banner.title}
                  </h3>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors duration-200 group-hover:text-white">
                    {banner.buttonText}
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PackagesMobileLinks = () => (
  <div className="ml-4 flex flex-col gap-1 border-l-2 border-red-100 pl-3">
    {homePageBanners.map((banner) => (
      <Link
        key={banner.id}
        to={banner.buttonUrl}
        className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors duration-200 hover:bg-gray-50"
      >
        <img
          src={banner.mobileImage ?? banner.image}
          alt=""
          loading="lazy"
          className="h-11 w-11 shrink-0 rounded-lg object-cover"
        />
        <span className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">
            {banner.title}
          </span>
          {banner.badge && (
            <span className="text-xs text-gray-500">{banner.badge}</span>
          )}
        </span>
      </Link>
    ))}
  </div>
);

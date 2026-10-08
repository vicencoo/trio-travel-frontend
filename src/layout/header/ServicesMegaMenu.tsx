import { Link } from "react-router-dom";
import { ArrowRight, Layers, MessageCircleMore } from "@/icons";
import {
  SERVICE_GROUPS,
  SERVICE_PAGES,
  type ServiceGroup,
} from "@/constants/services";
import { SERVICE_ICONS } from "@/pages/public/services";
import { inertProps } from "@/utils/inertProps";
import type { MegaMenuProps } from "./types";

const GROUPS = Object.keys(SERVICE_GROUPS) as ServiceGroup[];

const servicesIn = (group: ServiceGroup) =>
  SERVICE_PAGES.filter((service) => service.group === group);

export const ServicesMegaMenu = ({
  isOpen,
  whatsappUrl,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: MegaMenuProps) => {
  return (
    <div
      id="services-mega-menu"
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
              <Layers size={20} />
            </span>
            <h3 className="text-xl font-semibold">Shërbime</h3>
            <p className="text-sm leading-6 text-white/70">
              Siguracione Albsig, pagesa faturash e gjobash, MoneyGram dhe
              e-Albania, të gjitha në një vend në Vlorë.
            </p>
          </div>

          <div className="relative flex flex-col gap-2">
            <Link
              to="/sherbime"
              onClick={onNavigate}
              className="group inline-flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-950 transition-colors duration-200 hover:bg-red-50"
            >
              Të gjitha shërbimet
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
              Na pyesni në WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {GROUPS.map((group, groupIndex) => (
            <div
              key={group}
              style={{
                transitionDelay: isOpen ? `${80 + groupIndex * 60}ms` : "0ms",
              }}
              className={`flex flex-col gap-2 transition-all duration-500 ease-out ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                {SERVICE_GROUPS[group].name}
              </span>
              {servicesIn(group).map((service) => {
                const Icon = SERVICE_ICONS[service.icon];
                return (
                  <Link
                    key={service.key}
                    to={service.path}
                    onClick={onNavigate}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors duration-200 group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={17} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">
                        {service.name}
                      </span>
                      <span className="text-xs leading-5 text-gray-500">
                        {service.summary}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ServicesMobileLinks = () => (
  <div className="ml-4 flex flex-col gap-1 border-l-2 border-red-100 pl-3">
    {SERVICE_PAGES.map((service) => {
      const Icon = SERVICE_ICONS[service.icon];
      return (
        <Link
          key={service.key}
          to={service.path}
          className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50"
        >
          <Icon size={16} className="shrink-0 text-red-600" />
          {service.name}
        </Link>
      );
    })}
  </div>
);

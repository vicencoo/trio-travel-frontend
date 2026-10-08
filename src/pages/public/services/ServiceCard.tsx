import { Link } from "react-router-dom";
import { ArrowRight } from "@/icons";
import type { ServiceCardProps } from "./types";

export const ServiceCard = ({
  name,
  summary,
  path,
  Icon,
  onClick,
}: ServiceCardProps) => (
  <Link
    to={path}
    onClick={onClick}
    className="site-card group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg"
  >
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
      <Icon size={20} />
    </span>
    <span className="flex flex-1 flex-col gap-1">
      <span className="flex items-center justify-between gap-2 font-semibold text-gray-900">
        {name}
        <ArrowRight
          size={16}
          className="shrink-0 text-gray-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-red-600"
        />
      </span>
      <span className="text-sm leading-6 text-gray-500">{summary}</span>
    </span>
  </Link>
);

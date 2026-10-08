import { MapPin, MessageCircleMore, Phone } from "@/icons";
import {
  CONTACT_ADDRESS,
  CONTACT_PHONE,
  CONTACT_PHONE_LABEL,
  whatsappLink,
} from "./contact";

type ServiceContactBandProps = {
  title: string;
  text: string;
  whatsappMessage: string;
};

export const ServiceContactBand = ({
  title,
  text,
  whatsappMessage,
}: ServiceContactBandProps) => (
  <div className="public-reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 text-white shadow-xl">
    <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-red-600/40 blur-3xl" />
    <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

    <div className="relative flex flex-col items-center gap-5 px-6 py-10 text-center md:px-10 md:py-14">
      <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      <p className="max-w-2xl text-base text-white/80 md:text-lg">{text}</p>
      <span className="flex items-center gap-2 text-sm text-white/70">
        <MapPin size={16} className="shrink-0" />
        {CONTACT_ADDRESS}
      </span>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-950 transition-colors duration-200 hover:bg-red-50"
        >
          <MessageCircleMore size={18} />
          Na shkruani në WhatsApp
        </a>
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition-colors duration-200 hover:bg-white/10"
        >
          <Phone size={18} />
          {CONTACT_PHONE_LABEL}
        </a>
      </div>
    </div>
  </div>
);

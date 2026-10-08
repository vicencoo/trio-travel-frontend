import { Image } from "@/components/image";
import { MessageCircleMore, Phone } from "@/icons";
import { CONTACT_PHONE, CONTACT_PHONE_LABEL, whatsappLink } from "./contact";
import type { ServiceHeroProps } from "./types";

export const ServiceHero = ({
  heading,
  intro,
  image,
  imageAlt,
  whatsappMessage,
  eyebrow,
}: ServiceHeroProps) => (
  <div className="public-reveal relative flex min-h-[420px] w-full overflow-hidden bg-gray-950 text-white">
    <Image
      src={image}
      alt={imageAlt}
      priority="high"
      className="absolute inset-0 h-full w-full object-cover object-right"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/10" />

    <div className="container relative flex flex-col justify-center gap-6 py-14 md:py-20">
      <div className="flex max-w-2xl flex-col gap-4">
        {eyebrow && (
          <span className="w-max rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-200 ring-1 ring-white/20">
            {eyebrow}
          </span>
        )}
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          {heading}
        </h1>
        <p className="text-base leading-7 text-white/85 md:text-lg">{intro}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-red-700"
        >
          <MessageCircleMore size={18} />
          Na shkruani në WhatsApp
        </a>
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
        >
          <Phone size={18} />
          {CONTACT_PHONE_LABEL}
        </a>
      </div>
    </div>
  </div>
);

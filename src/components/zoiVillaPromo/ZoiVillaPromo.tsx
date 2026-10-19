import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, MapPin } from "@/icons";
import { ZOI_UNITS, ZOI_VILLA, ZOI_VILLA_PATH } from "@/constants/zoiVilla";

const available = ZOI_UNITS.filter((u) => u.status === "available").length;

// Featured band that points visitors to the Zoi Villa Residence page
export const ZoiVillaPromo = () => (
  <section className="public-reveal grid grid-cols-1 overflow-hidden rounded-3xl bg-navy text-white shadow-xl md:grid-cols-[1.05fr_0.95fr]">
    <div className="flex flex-col justify-center gap-6 px-6 py-9 md:px-10 md:py-12">
      <span className="inline-flex w-max items-center gap-2 rounded-full bg-gold px-4 py-1 text-sm font-semibold text-navy">
        <BadgeCheck size={15} />
        Projekt i rekomanduar
      </span>

      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold md:text-4xl">{ZOI_VILLA.name}</h2>
        <p className="flex items-center gap-2 text-sm text-white/70">
          <MapPin size={15} className="text-gold" />
          {ZOI_VILLA.city}, {ZOI_VILLA.country}
        </p>
        <p className="max-w-xl text-base leading-7 text-white/80 md:text-lg">
          {ZOI_VILLA.tagline}. Shikoni fotot, planimetritë dhe disponueshmërinë
          e çdo apartamenti.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          { value: ZOI_UNITS.length, label: "Apartamente" },
          { value: available, label: "Në shitje" },
          { value: ZOI_VILLA.parkingSpots, label: "Parkime" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white/5 px-2 py-3 ring-1 ring-white/10"
          >
            <div className="text-2xl font-bold text-gold">{stat.value}</div>
            <div className="text-xs text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>

      <Link
        to={ZOI_VILLA_PATH}
        className="inline-flex w-max items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-amber-200"
      >
        Shiko apartamentet
        <ArrowRight size={16} />
      </Link>
    </div>

    <Link
      to={ZOI_VILLA_PATH}
      className="relative block min-h-[260px] md:min-h-full"
      aria-label={`Apartamentet në ${ZOI_VILLA.name}`}
    >
      <img
        src={ZOI_VILLA.coverImage}
        alt={`${ZOI_VILLA.name}, ${ZOI_VILLA.city}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent md:bg-gradient-to-l" />
    </Link>
  </section>
);

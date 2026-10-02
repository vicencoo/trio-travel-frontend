import { Link } from "react-router-dom";
import { ArrowRightAlt, BadgeCheck, MapPin, Plane } from "@/icons";

const INFO = [
  { id: 1, icon: <Plane size={18} />, text: "Fluturime & hotele" },
  { id: 2, icon: <MapPin size={18} />, text: "Tregjet e Krishtlindjeve" },
  { id: 3, icon: <BadgeCheck size={18} />, text: "Paketa me asistencë" },
];

export const ChristmasBanner = () => {
  return (
    <section className="public-reveal relative w-full aspect-[940/1672] max-h-[640px] md:aspect-[1983/793] md:max-h-none overflow-hidden rounded-3xl text-white shadow-xl select-none">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/images/christmas-banner-mobile.webp"
        />
        <img
          src="/images/christmas-banner.webp"
          alt="Paketa turistike për Krishtlindje"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent md:bg-gradient-to-l md:from-black/65 md:via-black/30" />

      <div className="relative flex h-full flex-col items-start justify-start gap-5 px-6 py-9 md:ml-auto md:w-1/2 md:justify-center md:px-10">
        <span className="w-max rounded-full bg-red-600 px-4 py-1 text-sm font-semibold">
          Oferta për festat
        </span>

        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold md:text-4xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Paketa turistike për Krishtlindje
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/90 md:text-lg">
            Festoni Krishtlindjet dhe Vitin e Ri në destinacionet më magjike,
            me fluturime, hotele dhe itinerare të përgatitura për ju.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/90 sm:flex-row sm:gap-5">
          {INFO.map((item) => (
            <span className="flex items-center gap-2" key={item.id}>
              <span className="text-amber-300">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

        <Link
          to="/paketa-turistike-krishtlindje"
          className="inline-flex w-max items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-red-700 transition-all duration-200 hover:bg-red-50"
          aria-label="Shiko paketa turistike për Krishtlindje"
        >
          Shiko paketat e Krishtlindjeve
          <ArrowRightAlt fontSize="small" />
        </Link>
      </div>
    </section>
  );
};

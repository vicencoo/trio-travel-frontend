import { Link, useNavigate } from "react-router-dom";
import { useHome } from "./useHome";
import { Advertise } from "./Advertise";
import { SectionHeader } from "./SectionHeader";
import { PropertyCard } from "@/components/propertyCard";
import { PackageCard } from "@/components/packageCard";
import { FlightOfferCard } from "@/components/flightOfferCard";
import { StatisticsSection } from "./StatisticsSection";
import { Destinations } from "./Destinations";
import { FAQ } from "./FAQ";
import { ViewAllButton } from "@/components/viewAllButton";
import { PropertyCardSkeleton } from "@/components/skeletons";
import { SEO } from "@/components/seo";
import { ArrowRightAlt, BadgeCheck, MapPin, Plane } from "@/icons";
import { homeSchema } from "@/constants/seoSchemas";

export const Home = () => {
  const {
    properties,
    planeTickets,
    packages,
    destinations,
    propertiesLoading,
  } = useHome();
  const navigate = useNavigate();
  return (
    <>
      <SEO
        title="Trio Travel & Immo | Paketa Turistike, Prona & Bileta Avioni në Shqipëri"
        description="Trio Travel & Immo në Vlorë ofron paketa turistike, bileta avioni, prona në shitje, apartamente, vila dhe udhëtime të personalizuara në Shqipëri dhe destinacionet më të kërkuara në botë."
        canonical="https://www.triotravel.al"
        image="https://www.triotravel.al/images/trio-travel-og.webp"
        keywords={[
          "Trio Travel",
          "Trio Travel Albania",
          "Trio Travel Vlore",
          "paketa turistike",
          "paketa turistike Shqiperi",
          "paketa turistike Turqi",
          "paketa turistike Dubai",
          "bileta avioni",
          "oferta fluturimesh",
          "agjenci turistike Vlore",
          "agjenci turistike Shqiperi",
          "prona ne shitje",
          "apartamente ne shitje",
          "vila ne shitje",
          "prona ne Vlore",
          "apartamente ne Vlore",
          "real estate Albania",
          "udhetime te personalizuara",
        ]}
        schema={homeSchema}
      />

      <div className="container flex flex-col md:gap-20 gap-14 md:mb-16 my-10">
        <Advertise />

        {propertiesLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          properties?.properties &&
          properties.properties.length > 0 && (
            <div className="flex flex-col gap-10">
              <SectionHeader
                title="Ofertat më të fundit për prona"
                text="Shfleto pronat më të mira në treg"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {properties.properties.map((property, index) => (
                  <PropertyCard
                    property={property}
                    index={index}
                    key={property.id}
                  />
                ))}
              </div>

              <div className="flex w-full justify-center">
                <ViewAllButton
                  text="shiko te gjitha pronat"
                  onClick={() => navigate("/pronat")}
                />
              </div>
            </div>
          )
        )}

        {packages?.packages && packages.packages.length > 0 && (
          <div className="flex flex-col gap-10">
            <SectionHeader
              title="Paketat tona turistike"
              text="Zbuloni eksperienca unike udhëtimi ose na kontaktoni për të krijuar paketën tuaj të personalizuar"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {packages.packages.map((packageItem, index) => (
                <PackageCard
                  key={packageItem.id}
                  index={index}
                  data={packageItem}
                />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <ViewAllButton
                text="Shiko Të Gjitha Paketat"
                path="/paketa-turistike"
              />
            </div>
          </div>
        )}

        <section className="grid grid-cols-1 overflow-hidden rounded-2xl bg-[#0f2f2f] text-white shadow-xl md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center gap-6 px-6 py-9 md:px-10 md:py-12">
            <span className="w-max rounded-full bg-amber-300 px-4 py-1 text-sm font-semibold text-[#18302f]">
              Destinacion i kërkuar
            </span>

            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Paketa turistike Turqi
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                Shikoni ofertat për Stamboll, Antalya, Bodrum dhe qytete të
                tjera të Turqisë me hotele, fluturime dhe itinerare të
                përshtatura për familje, çifte ose grupe.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 text-sm text-white/90 sm:grid-cols-3">
              <span className="flex items-center gap-2">
                <Plane size={18} className="text-amber-300" />
                Fluturime & hotele
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-amber-300" />
                Antalya & Stamboll
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck size={18} className="text-amber-300" />
                Paketa me asistencë
              </span>
            </div>

            <Link
              to="/paketa-turistike-turqi"
              className="inline-flex w-max items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0f2f2f] transition-all duration-200 hover:bg-amber-200"
              aria-label="Shiko paketa turistike Turqi"
            >
              Shiko paketa turistike Turqi
              <ArrowRightAlt fontSize="small" />
            </Link>
          </div>

          <Link
            to="/paketa-turistike-turqi"
            className="relative block min-h-[260px] md:min-h-full"
            aria-label="Paketa turistike Turqi"
          >
            <img
              src="/images/packages.webp"
              alt="Paketa turistike në Turqi"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f2f]/65 via-transparent to-transparent md:bg-gradient-to-l" />
          </Link>
        </section>

        {planeTickets &&
          planeTickets?.totalTickets &&
          planeTickets?.totalTickets > 0 && (
            <div className="flex flex-col gap-10">
              <SectionHeader
                title="Ofertat e fluturimeve"
                text="Gjeni ofertat më të mira të fluturimeve sipas destinacionit dhe datave tuaja të udhëtimit"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {planeTickets.tickets &&
                  planeTickets.tickets.map((ticket, index) => (
                    <FlightOfferCard
                      ticket={ticket}
                      index={index}
                      key={ticket.id}
                    />
                  ))}
              </div>

              <div className="flex w-full justify-center">
                <ViewAllButton
                  text="Shiko Të Gjitha Ofertat"
                  path="/bileta-avioni"
                />
              </div>
            </div>
          )}

        <StatisticsSection />

        <div className="flex flex-col gap-10">
          <SectionHeader
            title="Destinacionet më të pëlqyera"
            text="Udhëtoni botën me konfidencë te plotë"
          />
          <Destinations destinations={destinations} />
        </div>

        <div className="flex flex-col gap-10">
          <SectionHeader title="Pyetjet më të shpeshta" />
          <FAQ />
        </div>
      </div>
    </>
  );
};

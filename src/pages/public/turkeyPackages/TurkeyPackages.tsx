import { SEO } from "@/components/seo";
import { Pagination } from "@/components/pagination";
import { Text } from "@/components/text";
import { NoDataFound } from "@/components/noDataFound";
import { useTurkeyPackages } from "./useTurkeyPackages";
import { useScrollOnChange } from "@/hooks/useScrollOnChange";
import { PackageCardSkeleton } from "@/components/skeletons";
import { PackageCard } from "@/components/packageCard";
import { turkeyPackagesSchema } from "@/constants/seoSchemas";
import { TurkeyPackagesHero } from "./TurkeyHero";

export const TurkeyPackages = () => {
  const {
    data,
    handlePageChange,
    handleSearchChange,
    handleSearchClick,
    isLoading,
    pageNumber,
  } = useTurkeyPackages();

  const message = encodeURIComponent(
    `Përshëndetje!
  Jam i/e interesuar për paketa turistike në Turqi.
  A mund të më ndihmoni me oferta për Stamboll, Antalya, Bodrum ose destinacione të tjera?`,
  );

  const { scrollRef } = useScrollOnChange(pageNumber);
  return (
    <>
      <SEO
        title="Paketa Turistike Turqi | Stamboll, Antalya, Bodrum & Oferta Pushimesh"
        description="Zbuloni paketa turistike për Turqi me Trio Travel & Immo. Oferta për Stamboll, Antalya, Bodrum dhe destinacione të tjera me hotele, fluturime dhe asistencë."
        canonical="https://www.triotravel.al/paketa-turistike-turqi"
        image="https://www.triotravel.al/images/trio-travel-package-og.webp"
        keywords={[
          "paketa turistike Turqi",
          "paketa turistike ne Turqi",
          "pushime ne Turqi",
          "oferta Turqi",
          "paketa Stamboll",
          "pushime Antalya",
          "paketa Antalya",
          "paketa Bodrum",
          "paketa turistike nga Vlora",
          "agjenci turistike Vlore",
          "agjenci turistike Shqiperi",
          "udhetime te organizuara",
        ]}
        schema={turkeyPackagesSchema}
      />

      <div className="flex flex-col md:gap-16 gap-8 w-full">
        <TurkeyPackagesHero
          handleSearchChange={handleSearchChange}
          handleSearchClick={handleSearchClick}
          scrollRef={scrollRef}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-5 container">
            {Array.from({ length: 6 }).map((_, index) => (
              <PackageCardSkeleton key={index} />
            ))}
          </div>
        ) : data?.packages && data.packages.length > 0 ? (
          <div className="flex flex-col items-center gap-10 container">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-5 w-full">
              {data.packages.map((item, idx) => (
                <PackageCard data={item} index={idx} key={item.id} />
              ))}
            </div>
            <Pagination
              onChange={handlePageChange}
              page={pageNumber}
              pages={data.pagination.totalPages}
            />
          </div>
        ) : (
          <NoDataFound text="Nuk u gjetën paketa për Turqi" />
        )}
        <div className="public-reveal container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white shadow-xl">
            <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />

            <div className="relative flex flex-col items-center gap-5 px-6 py-10 md:px-10 md:py-14 text-center">
              <Text
                text="Nuk po gjeni paketën e duhur për Turqi?"
                size="text-2xl md:text-3xl"
                font="font-semibold"
              />
              <Text
                text="Na shkruani dhe ne ju sugjerojmë ofertën më të përshtatshme për Stamboll, Antalya, Bodrum ose qytete të tjera të Turqisë."
                font="font-medium"
                size="md:text-lg text-base"
                className="max-w-2xl text-white/90"
              />
              <button
                className="rounded-full bg-white px-7 py-3 font-medium text-blue-700 shadow-md transition-all hover:scale-[1.02] hover:bg-blue-50 duration-200 will-change-transform"
                onClick={() => {
                  window.open(`https://wa.me/355696900916?text=${message}`);
                }}
              >
                Kërko Ofertë për Turqi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

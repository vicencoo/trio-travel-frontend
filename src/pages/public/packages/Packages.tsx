import { usePackages } from "./usePackages";
import { useScrollOnChange } from "@/hooks/useScrollOnChange";
import { Text } from "@/components/text";
import { PackageCard } from "@/components/packageCard";
import { Pagination } from "@/components/pagination";
import { PackageCardSkeleton } from "@/components/skeletons";
import { NoDataFound } from "@/components/noDataFound";
import { SEO } from "@/components/seo";
import { packagesSchema } from "@/constants/seoSchemas";
import { PackagesHero } from "./PackagesHero";

export const Packages = () => {
  const {
    data,
    handlePageChange,
    pageNumber,
    handleSearchChange,
    handleSearchClick,
    isLoading,
  } = usePackages();

  const message = encodeURIComponent(
    `Përshëndetje!
Do të doja të krijoja një paketë udhëtimi të personalizuar sipas dëshirave të mia.
A mund të më ndihmoni me sugjerime dhe organizimin?`,
  );

  const { scrollRef } = useScrollOnChange(pageNumber);

  return (
    <>
      <SEO
        title="Paketa Turistike | Oferta Udhëtimi & Paketa të Personalizuara"
        description="Zbuloni paketa turistike me Trio Travel & Immo në Vlorë ose krijoni paketën tuaj të personalizuar sipas destinacionit, buxhetit dhe datave të udhëtimit."
        canonical="https://www.triotravel.al/paketa-turistike"
        image="https://www.triotravel.al/images/trio-travel-package-og.webp"
        keywords={[
          "paketa turistike",
          "paketa turistike Shqiperi",
          "paketa turistike te personalizuara",
          "oferta udhetimi",
          "pushime ne Europe",
          "pushime ne Turqi",
          "pushime ne Dubai",
          "agjenci turistike Vlore",
          "agjensi turistike Vlore",
          "agjenci turistike Shqiperi",
          "agjensi turistike Shqiperi",
          "udhetime te organizuara",
        ]}
        schema={packagesSchema}
      />

      <div className="flex flex-col md:gap-16 gap-8 w-full">
        <PackagesHero
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
          <NoDataFound text="No Packages found" />
        )}
        <div className="public-reveal container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white shadow-xl">
            <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />

            <div className="relative flex flex-col items-center gap-5 px-6 py-10 md:px-10 md:py-14 text-center">
              <Text
                text="Nuk po gjeni atë që po kërkoni?"
                size="text-2xl md:text-3xl"
                font="font-semibold"
              />
              <Text
                text="Le të krijojmë paketën perfekte të udhëtimit, të përshtatur sipas ëndrrave tuaja"
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
                Kërko Paketë të Personalizuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

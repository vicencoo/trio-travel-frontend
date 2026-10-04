import { Button } from "@/components/button";
import { Image } from "@/components/image";
import { Input } from "@/components/input";
import { Text } from "@/components/text";
import { Search } from "@/icons";
import type { NovemberPackagesHeroTypes } from "./types";

export const NovemberHero = ({
  scrollRef,
  handleSearchChange,
  handleSearchClick,
}: NovemberPackagesHeroTypes) => {
  return (
    <div className="public-reveal relative flex md:h-[500px] h-[600px] overflow-hidden bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white w-full ">
      <Image
        src={"/images/november-packages-desktop.webp"}
        className="absolute w-full h-full object-cover md:block hidden"
      />
      <Image
        src={"/images/november-packages-mobile.webp"}
        className="absolute w-full h-full object-cover md:hidden"
      />
      <div className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="container relative flex flex-col w-full gap-6 py-16 md:py-20">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Paketa Turistike për Festat e Nëntorit
          </h1>
          <Text
            text={
              "Përfitoni nga pushimet e 28 dhe 29 Nëntorit me oferta për qytete të Evropës, fundjava të shkurtra dhe udhëtime të organizuara"
            }
            size="text-lg md:text-xl"
            className="text-white/90 max-w-2xl"
          />
        </div>

        <div
          className="flex flex-col md:flex-row md:w-3/4 w-full gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md border border-white/20 shadow-xl"
          ref={scrollRef}
        >
          <Input
            icon={<Search size={16} className="text-gray-500" />}
            className="flex-1"
            placeholder={"Kërkoni Romë, Vjenë, Stamboll..."}
            height="h-12"
            onChange={handleSearchChange}
          />
          <Button
            name="Kërko paketë"
            color="white"
            bgColor="#1d4ed8"
            bgHover="#1e40af"
            onClick={handleSearchClick}
            endIcon={<Search size={16} />}
          />
        </div>
      </div>
    </div>
  );
};

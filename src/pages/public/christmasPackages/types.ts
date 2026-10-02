import type { useScrollOnChange } from "@/hooks/useScrollOnChange";
import type { useChristmasPackages } from "./useChristmasPackages";

export type ChristmasPackagesHeroTypes = {
  scrollRef: ReturnType<typeof useScrollOnChange>["scrollRef"];
  handleSearchChange: ReturnType<
    typeof useChristmasPackages
  >["handleSearchChange"];
  handleSearchClick: ReturnType<
    typeof useChristmasPackages
  >["handleSearchClick"];
};

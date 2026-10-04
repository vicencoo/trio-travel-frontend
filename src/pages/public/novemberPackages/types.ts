import type { useScrollOnChange } from "@/hooks/useScrollOnChange";
import type { useNovemberPackages } from "./useNovemberPackages";

export type NovemberPackagesHeroTypes = {
  scrollRef: ReturnType<typeof useScrollOnChange>["scrollRef"];
  handleSearchChange: ReturnType<
    typeof useNovemberPackages
  >["handleSearchChange"];
  handleSearchClick: ReturnType<
    typeof useNovemberPackages
  >["handleSearchClick"];
};

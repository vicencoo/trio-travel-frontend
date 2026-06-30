import type { useScrollOnChange } from "@/hooks/useScrollOnChange";
import type { useTurkeyPackages } from "./useTurkeyPackages";

export type TurkeyPackagesHeroTypes = {
  scrollRef: ReturnType<typeof useScrollOnChange>["scrollRef"];
  handleSearchChange: ReturnType<
    typeof useTurkeyPackages
  >["handleSearchChange"];
  handleSearchClick: ReturnType<typeof useTurkeyPackages>["handleSearchClick"];
};

import type { useScrollOnChange } from "@/hooks/useScrollOnChange";
import type { usePackages } from "./usePackages";

export type PackagesHeroTypes = {
  scrollRef: ReturnType<typeof useScrollOnChange>["scrollRef"];
  handleSearchChange: ReturnType<typeof usePackages>["handleSearchChange"];
  handleSearchClick: ReturnType<typeof usePackages>["handleSearchClick"];
};

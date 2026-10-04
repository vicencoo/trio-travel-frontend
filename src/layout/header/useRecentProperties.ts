import { useEffect, useRef, useState } from "react";
import { propertyService } from "@/services/propertyServices";
import type { Property } from "@/types/types";

const SHOWN_PROPERTIES = 3;
// Fetch a few extra so sold/rented ones can be skipped
const FETCHED_PROPERTIES = 9;

// Loads the newest available properties the first time `enabled` turns true,
// so the header doesn't hit the API on every page load.
export const useRecentProperties = (enabled: boolean) => {
  const [properties, setProperties] = useState<Property[] | null>(null);
  const [hasFailed, setHasFailed] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!enabled || hasStarted.current) return;
    hasStarted.current = true;

    propertyService
      .getAll({ limit: FETCHED_PROPERTIES, page: 1 })
      .then((res) => {
        const list: Property[] = res.data?.properties ?? [];
        setProperties(
          list
            .filter((property) => property.availability === "available")
            .slice(0, SHOWN_PROPERTIES),
        );
      })
      .catch((err) => {
        console.error(err);
        setHasFailed(true);
      });
  }, [enabled]);

  return {
    properties,
    isLoading: properties === null && !hasFailed,
  };
};

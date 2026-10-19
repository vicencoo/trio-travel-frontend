import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ZOI_STAIRS,
  ZOI_UNITS,
  type ZoiUnitStatus,
  type ZoiUnitType,
} from "@/constants/zoiVilla";

// Filters live in the query string (?shkalla=2&statusi=ne-shitje&tipi=3%2B1)
// so a filtered view can be shared or opened again with "back".
const STATUS_PARAM: Record<ZoiUnitStatus, string> = {
  available: "ne-shitje",
  sold: "e-shitur",
};

const parseStatus = (value: string | null): ZoiUnitStatus | null =>
  (Object.keys(STATUS_PARAM) as ZoiUnitStatus[]).find(
    (key) => STATUS_PARAM[key] === value,
  ) ?? null;

const parseStair = (value: string | null) => {
  const stair = Number(value);
  return ZOI_STAIRS.includes(stair) ? stair : null;
};

const parseType = (value: string | null): ZoiUnitType | null =>
  value === "2+1" || value === "3+1" ? value : null;

export const useZoiFilters = () => {
  const [params, setParams] = useSearchParams();

  const stair = parseStair(params.get("shkalla"));
  const status = parseStatus(params.get("statusi"));
  const type = parseType(params.get("tipi"));

  const update = (key: string, value: string | null) =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) next.set(key, value);
        else next.delete(key);
        return next;
      },
      { replace: true, preventScrollReset: true },
    );

  const units = useMemo(
    () =>
      ZOI_UNITS.filter(
        (unit) =>
          (stair === null || unit.stair === stair) &&
          (status === null || unit.status === status) &&
          (type === null || unit.type === type),
      ),
    [stair, status, type],
  );

  return {
    units,
    stair,
    status,
    type,
    setStair: (value: number | null) =>
      update("shkalla", value === null ? null : String(value)),
    setStatus: (value: ZoiUnitStatus | null) =>
      update("statusi", value && STATUS_PARAM[value]),
    setType: (value: ZoiUnitType | null) => update("tipi", value),
    reset: () => setParams({}, { replace: true, preventScrollReset: true }),
    hasFilters: stair !== null || status !== null || type !== null,
  };
};

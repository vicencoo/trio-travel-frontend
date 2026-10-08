import {
  Banknote,
  Car,
  HeartPulse,
  House,
  Landmark,
  Motorbike,
  Plane,
  Receipt,
  Sailboat,
  ShieldCheck,
  Siren,
} from "@/icons";
import type { ServiceIconKey } from "@/constants/services";

export const SERVICE_ICONS: Record<ServiceIconKey, typeof Car> = {
  insurance: ShieldCheck,
  car: Car,
  motorbike: Motorbike,
  boat: Sailboat,
  property: House,
  life: HeartPulse,
  travel: Plane,
  bills: Receipt,
  fines: Siren,
  moneygram: Banknote,
  eAlbania: Landmark,
};

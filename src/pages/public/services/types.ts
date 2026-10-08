import type { Car } from "@/icons";
import type { ServicePage } from "@/constants/services";

export type ServiceCardProps = {
  name: string;
  summary: string;
  path: string;
  Icon: typeof Car;
  onClick?: () => void;
};

export type ServicePageProps = {
  service: ServicePage;
};

export type ServiceHeroProps = {
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  eyebrow?: string;
};

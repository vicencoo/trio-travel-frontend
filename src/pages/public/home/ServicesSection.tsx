import { getServicePage } from "@/constants/services";
import { ViewAllButton } from "@/components/viewAllButton";
import { ServiceCard, SERVICE_ICONS } from "@/pages/public/services";
import { SectionHeader } from "./SectionHeader";

// The other insurance pages are one click away, on /siguracione
const HOME_SERVICES = [
  "insurance",
  "carInsurance",
  "billPayments",
  "finePayments",
  "moneygram",
  "eAlbania",
]
  .map(getServicePage)
  .filter((service) => service !== undefined);

export const ServicesSection = () => (
  <div className="flex flex-col gap-10">
    <SectionHeader
      title="Shërbime të tjera në agjencinë tonë"
      text="Siguracione, pagesa faturash e gjobash, MoneyGram dhe e-Albania në një vend"
    />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {HOME_SERVICES.map((service) => (
        <ServiceCard
          key={service.key}
          name={service.name}
          summary={service.summary}
          path={service.path}
          Icon={SERVICE_ICONS[service.icon]}
        />
      ))}
    </div>
    <div className="flex w-full justify-center">
      <ViewAllButton text="Shiko të gjitha shërbimet" path="/sherbime" />
    </div>
  </div>
);

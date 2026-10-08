import { SEO } from "@/components/seo";
import { House, Package, Plane } from "@/icons";
import { PAGE_SEO } from "@/seo/pages";
import {
  CORE_SERVICES,
  SERVICE_GROUPS,
  SERVICE_PAGES,
  type ServiceGroup,
} from "@/constants/services";
import { SectionHeader } from "../home/SectionHeader";
import { ServiceHero } from "./ServiceHero";
import { ServiceCard } from "./ServiceCard";
import { ServiceContactBand } from "./ServiceContactBand";
import { SERVICE_ICONS } from "./serviceIcons";

const CORE_ICONS = [Package, Plane, House];

const WHATSAPP_MESSAGE =
  "Përshëndetje! Dua informacion për shërbimet tuaja.";

export const Services = () => {
  return (
    <>
      <SEO {...PAGE_SEO.services} />

      <div className="flex w-full flex-col gap-14 pb-10 md:gap-20 md:pb-20">
        <ServiceHero
          heading="Të gjitha shërbimet në një vend, në Vlorë"
          intro="Nga pushimet dhe biletat e avionit te pronat, siguracionet Albsig, pagesat e faturave dhe gjobave, MoneyGram dhe e-Albania. Te Trio Travel & Immo i kryeni të gjitha shpejt, në Kryqëzimin Rinia."
          image="/images/services/sherbime.webp"
          imageAlt="Shërbimet e Trio Travel & Immo në Vlorë"
          whatsappMessage={WHATSAPP_MESSAGE}
          eyebrow="Shërbimet tona"
        />

        <div className="container flex flex-col gap-14 md:gap-20">
          <section className="flex flex-col gap-10">
            <SectionHeader
              title="Udhëtime & Prona"
              text="Pushime, fluturime dhe prona në shitje e me qera"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.path}
                  name={service.name}
                  summary={service.summary}
                  path={service.path}
                  Icon={CORE_ICONS[index]}
                />
              ))}
            </div>
          </section>

          {(Object.keys(SERVICE_GROUPS) as ServiceGroup[]).map((group) => (
            <section key={group} className="flex flex-col gap-10">
              <SectionHeader
                title={SERVICE_GROUPS[group].name}
                text={SERVICE_GROUPS[group].text}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICE_PAGES.filter((service) => service.group === group).map(
                  (service) => (
                    <ServiceCard
                      key={service.key}
                      name={service.name}
                      summary={service.summary}
                      path={service.path}
                      Icon={SERVICE_ICONS[service.icon]}
                    />
                  ),
                )}
              </div>
            </section>
          ))}

          <ServiceContactBand
            title="Nuk e gjetët shërbimin që kërkoni?"
            text="Na shkruani ose na telefononi. Me shumë mundësi ju ndihmojmë edhe me atë."
            whatsappMessage={WHATSAPP_MESSAGE}
          />
        </div>
      </div>
    </>
  );
};

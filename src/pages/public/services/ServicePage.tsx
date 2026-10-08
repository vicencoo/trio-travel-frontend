import { Link } from "react-router-dom";
import { SEO } from "@/components/seo";
import { ViewAllButton } from "@/components/viewAllButton";
import { BadgeCheck } from "@/icons";
import { SERVICE_SEO } from "@/seo/pages";
import { SERVICE_PAGES, getServicePage } from "@/constants/services";
import { FAQ } from "../home/FAQ";
import { SectionHeader } from "../home/SectionHeader";
import { ServiceHero } from "./ServiceHero";
import { ServiceCard } from "./ServiceCard";
import { ServiceContactBand } from "./ServiceContactBand";
import { SERVICE_ICONS } from "./serviceIcons";
import type { ServicePageProps } from "./types";

export const ServicePage = ({ service }: ServicePageProps) => {
  const children = (service.children?.keys ?? [])
    .map(getServicePage)
    .filter((child) => child !== undefined);

  // Same-group services first, so an insurance page links to the other
  // insurance pages before the payment ones
  const related = SERVICE_PAGES.filter(
    (other) => other.key !== service.key && !children.includes(other),
  )
    .sort(
      (a, b) =>
        Number(b.group === service.group) - Number(a.group === service.group),
    )
    .slice(0, 6);

  const parent = SERVICE_PAGES.find((other) =>
    other.children?.keys.includes(service.key),
  );

  return (
    <>
      <SEO {...SERVICE_SEO[service.key]} />

      <div className="flex w-full flex-col gap-14 pb-10 md:gap-20 md:pb-20">
        <ServiceHero
          heading={service.heading}
          intro={service.intro}
          image={service.image}
          imageAlt={service.imageAlt}
          whatsappMessage={service.whatsappMessage}
          eyebrow={parent?.name ?? "Shërbime në Vlorë"}
        />

        <div className="container flex flex-col gap-14 md:gap-20">
          <nav
            aria-label="Breadcrumb"
            className="-mt-6 flex flex-wrap items-center gap-1.5 text-sm text-gray-500 md:-mt-10"
          >
            <Link to="/" className="hover:text-gray-900">
              Kryefaqja
            </Link>
            <span>/</span>
            <Link to="/sherbime" className="hover:text-gray-900">
              Shërbime
            </Link>
            {parent && (
              <>
                <span>/</span>
                <Link to={parent.path} className="hover:text-gray-900">
                  {parent.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span aria-current="page" className="font-medium text-gray-900">
              {service.name}
            </span>
          </nav>

          <section className="flex flex-col gap-10">
            <SectionHeader
              title="Çfarë ofrojmë"
              text={`${service.name} te Trio Travel & Immo në Vlorë`}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="site-card flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <BadgeCheck className="text-red-600" />
                  <h3 className="font-semibold text-gray-900">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-500">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {service.children && children.length > 0 && (
            <section className="flex flex-col gap-10">
              <SectionHeader
                title={service.children.heading}
                text={service.children.text}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {children.map((child) => (
                  <ServiceCard
                    key={child.key}
                    name={child.name}
                    summary={child.summary}
                    path={child.path}
                    Icon={SERVICE_ICONS[child.icon]}
                  />
                ))}
              </div>
            </section>
          )}

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="site-card flex flex-col gap-5 rounded-3xl bg-gray-50 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Çfarë dokumentesh duhen
              </h2>
              <ul className="flex flex-col gap-3">
                {service.documents.map((document) => (
                  <li
                    key={document}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                    {document}
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-card flex flex-col gap-5 rounded-3xl bg-gray-50 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Si funksionon
              </h2>
              <ol className="flex flex-col gap-4">
                {service.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-gray-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-950 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="flex flex-col gap-10">
            <SectionHeader
              title="Pyetje të shpeshta"
              text={`Përgjigje për pyetjet më të zakonshme rreth shërbimit ${service.name}`}
            />
            <FAQ items={service.faqs} />
          </section>

          <ServiceContactBand
            title={`Keni nevojë për ${service.name}?`}
            text="Ejani në zyrë ose na shkruani dhe ju përgjigjemi sa më shpejt."
            whatsappMessage={service.whatsappMessage}
          />

          <section className="flex flex-col gap-10">
            <SectionHeader
              title="Shërbime të tjera"
              text="Gjithçka që ju duhet, në një vend në Vlorë"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((other) => (
                <ServiceCard
                  key={other.key}
                  name={other.name}
                  summary={other.summary}
                  path={other.path}
                  Icon={SERVICE_ICONS[other.icon]}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <ViewAllButton text="Të gjitha shërbimet" path="/sherbime" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

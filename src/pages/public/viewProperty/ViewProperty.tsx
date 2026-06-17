import { useNavigate } from "react-router-dom";
import { useViewProperty } from "./useViewProperty";
import { PropertyStats } from "./PropertyStats";
import { ContactAgency } from "./ContactAgency";
import { Text } from "@/components/text";
import { Card } from "@/components/card";
import { formattedPrice } from "@/utils/formattedPrice";
import { Spinner } from "@/components/spinner";
import {
  ArrowBack,
  BathtubOutlinedIcon,
  CalendarMonthOutlined,
  HotelOutlinedIcon,
  LocationOnOutlined,
  Share2,
  SquareFootOutlinedIcon,
} from "@/icons";
import { ViewImages } from "@/components/viewImages/ViewImages";
import { useDisclosure } from "@/hooks/useDisclosure";
import { ShareModal } from "@/components/shareModal/ShareModal";
import { SEO } from "@/components/seo";

export const ViewProperty = () => {
  const { property, isLoading } = useViewProperty();
  const { close, isOpen, open } = useDisclosure();
  const navigate = useNavigate();

  const slug = window.location.pathname.split("/").pop();
  const shareUrl = `${import.meta.env.VITE_LOCAL}/share/property/${slug}`;

  if (isLoading)
    return (
      <div className="flex w-full min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  const canonicalUrl = `https://www.triotravel.al/pronat/${slug}`;

  const seoTitle = `${property?.title || "Pronë në Shqipëri"} | Trio Travel Albania`;

  const seoDescription = property?.description
    ? property.description.slice(0, 155)
    : "Shfletoni prona në Shqipëri me Trio Travel Albania. Gjeni apartamente, vila dhe prona për investim.";

  const firstImage = property?.property_images?.[0];

  const seoImage: string =
    typeof firstImage === "string"
      ? firstImage
      : firstImage instanceof File
        ? "https://www.triotravel.al/images/property-cover.webp"
        : typeof firstImage === "object" &&
            firstImage !== null &&
            "image_url" in firstImage &&
            typeof firstImage.image_url === "string"
          ? firstImage.image_url
          : "https://www.triotravel.al/images/property-cover.webp";

  const propertySchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${canonicalUrl}#property`,
    name: property?.title,
    url: canonicalUrl,
    description: seoDescription,
    image: seoImage,
    datePosted: property?.created_at,
    address: {
      "@type": "PostalAddress",
      addressLocality: property?.city,
      streetAddress: `${property?.street || ""} ${property?.area || ""}`.trim(),
      addressCountry: "AL",
    },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      price: property?.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    floorSize: property?.space
      ? {
          "@type": "QuantitativeValue",
          value: property.space,
          unitCode: "MTK",
        }
      : undefined,
    numberOfRooms: property?.bedrooms,
    numberOfBathroomsTotal: property?.toilets,
    yearBuilt: property?.build_year,
    provider: {
      "@type": "RealEstateAgent",
      name: "Trio Travel & Immo",
      url: "https://www.triotravel.al",
      telephone: "+355696900916",
    },
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        image={seoImage}
        keywords={[
          String(property?.title ?? ""),
          String(property?.city ?? ""),
          String(property?.area ?? ""),
          String(property?.property_type ?? ""),
          "prona ne shitje",
          "apartamente ne shitje",
          "vila ne shitje",
          "prona ne Shqiperi",
          "real estate Albania",
          "Trio Travel Albania",
        ]}
        schema={propertySchema}
      />

      <div className="container flex flex-col pt-3 gap-10 pb-20">
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <span
              className="flex items-center cursor-pointer w-max text-gray-500 hover:underline hover:scale-110 hover:text-black transition-all duration-300 will-change-transform"
              onClick={() => navigate("/pronat")}
            >
              <ArrowBack fontSize="small" />
              <Text text={"Kthehu Tek Pronat"} font="font-medium" />
            </span>

            <div
              className="flex items-center gap-1 hover:underline cursor-pointer hover:scale-105 transition-all duration-150 will-change-transform"
              onClick={open}
            >
              <Share2 size={18} />
              <Text
                text={"Shpërndaj"}
                font="font-medium"
                className="hidden md:flex"
              />
            </div>
          </div>

          {property && <ViewImages images={property.property_images} />}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="flex flex-col gap-5 md:col-span-2">
            <Card>
              <div className="flex flex-col gap-3 pb-5 border-b-2">
                <div className="flex items-center w-full justify-between gap-3">
                  <h1 className="text-xl md:text-2xl font-medium capitalize">
                    {property?.title}
                  </h1>
                  <div className="flex items-center gap-2">
                    <Text
                      text={`${formattedPrice(Number(property?.price))}€`}
                      size="text-2xl"
                      font="font-bold font-serif"
                      className="capitalize text-blue-500"
                    />
                    <Share2
                      size={20}
                      className="cursor-pointer"
                      onClick={open}
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col m:items-center items-start w-full md:justify-between gap-1">
                  <span className="flex items-center">
                    <LocationOnOutlined
                      fontSize="small"
                      className="text-gray-500"
                    />
                    <Text
                      text={`${property?.city}, ${property?.street}, ${property?.area}`}
                      font="font-medium"
                      className="capitalize text-gray-500"
                    />
                  </span>
                  <Text
                    size="text-sm"
                    font="font-medium"
                    className="text-gray-500"
                  >
                    Tipi i prones:{" "}
                    <span className="text-base capitalize">
                      {property?.property_type}
                    </span>
                  </Text>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-2 gap-4">
                {property?.bedrooms && (
                  <PropertyStats
                    icon={<HotelOutlinedIcon fontSize="small" />}
                    value={property?.bedrooms}
                    label="dhomat e gjumit"
                  />
                )}

                {property?.toilets && (
                  <PropertyStats
                    icon={<BathtubOutlinedIcon fontSize="small" />}
                    value={property?.toilets}
                    label="tualetet"
                  />
                )}

                {property?.space && (
                  <PropertyStats
                    icon={<SquareFootOutlinedIcon fontSize="small" />}
                    value={property?.space}
                    label="meter katror"
                  />
                )}
                {property?.build_year && (
                  <PropertyStats
                    icon={<CalendarMonthOutlined fontSize="small" />}
                    value={property?.build_year}
                    label="viti ndertimit"
                  />
                )}
              </div>
            </Card>

            <Card>
              <Text
                text={"Pershkrimi I Prones"}
                size="text-lg"
                font="font-medium"
              />

              <Text
                text={property?.description}
                font="font-medium"
                className="text-gray-500 whitespace-pre-line"
              />
            </Card>
          </div>
          <div className="md:col-span-1">
            <ContactAgency />
          </div>

          <ShareModal isOpen={isOpen} close={close} path={shareUrl} />
        </div>
      </div>
    </>
  );
};

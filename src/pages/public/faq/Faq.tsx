import { Text } from "@/components/text";
import { SEO } from "@/components/seo";
import { ViewAllButton } from "@/components/viewAllButton";
import { PAGE_SEO } from "@/seo/pages";
import { FAQ } from "../home/FAQ";

export const Faq = () => {
  return (
    <>
      <SEO {...PAGE_SEO.faq} />

      <div className="flex flex-col gap-10 pb-7 md:pb-20">
        <div className="public-reveal relative w-full overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-12 md:py-20">
          <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-6 md:gap-8 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Pyetjet më të Shpeshta
              </h1>
              <Text
                text="Përgjigje për pyetjet që na bëni më shpesh rreth biletave të avionit, paketave turistike, vizave, sigurimeve dhe shërbimeve të tjera të Trio Travel & Immo në Vlorë."
                size="text-base md:text-xl"
                font="font-semibold"
                className="text-white/95 leading-relaxed"
              />
            </div>
          </div>
        </div>

        <div className="container flex flex-col gap-10">
          <FAQ />

          <div className="public-reveal flex flex-col items-center gap-4 text-center">
            <Text
              Tag="h2"
              text="Nuk e gjetët përgjigjen?"
              size="text-2xl"
              font="font-medium"
            />
            <Text
              text="Na kontaktoni dhe ekipi ynë do t'ju përgjigjet sa më shpejt."
              size="text-sm"
              font="font-medium"
              className="text-gray-500"
            />
            <ViewAllButton text="Na Kontaktoni" path="/contact" />
          </div>
        </div>
      </div>
    </>
  );
};

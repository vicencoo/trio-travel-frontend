import { Link } from "react-router-dom";
import { NoDataFound } from "@/components/noDataFound";
import { SEO } from "@/components/seo";
import { NOT_FOUND_SEO } from "@/seo/pages";

export const NotFound = () => {
  return (
    <>
      <SEO {...NOT_FOUND_SEO} />

      <div className="container flex flex-col items-center gap-6 pt-10 pb-20">
        <NoDataFound text="Faqja nuk u gjet" />
        <Link to="/" className="font-medium text-red-600 hover:underline">
          Kthehu në faqen kryesore
        </Link>
      </div>
    </>
  );
};

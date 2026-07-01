import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { DestinationsProps } from "./types";
import { Image } from "@/components/image";
import { Text } from "@/components/text";
import { ChevronLeft, ChevronRight } from "@/icons";
import "./destinations.css";

const VISIBLE_COUNT = 8;

export const Destinations = ({ destinations }: DestinationsProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(VISIBLE_COUNT);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const navigate = useNavigate();
  const total = destinations?.length || 0;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 497) {
        setVisibleCount(2);
      } else if (window.innerWidth < 690) {
        setVisibleCount(3); // below md
      } else if (window.innerWidth < 757) {
        setVisibleCount(4); // below md
      } else if (window.innerWidth < 1077) {
        setVisibleCount(5); // below lg
      } else if (window.innerWidth < 1277) {
        setVisibleCount(6); // below lg
      } else {
        setVisibleCount(8); // md and up
      }
    };
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    setSlideDirection("left");
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setSlideDirection("right");
    setStartIndex((prev) => (prev + 1) % total);
  };

  useEffect(() => {
    if (!slideDirection) return;

    const timer = window.setTimeout(() => {
      setSlideDirection(null);
    }, 260);

    return () => window.clearTimeout(timer);
  }, [slideDirection, startIndex]);

  const visibleItems = [];
  if (destinations && total > 0) {
    for (let i = 0; i < visibleCount; i++) {
      visibleItems.push(destinations[(startIndex + i) % total]);
    }
  }
  return (
    <div className="flex items-center gap-3 select-none">
      <button
        type="button"
        className="min-w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 hover:scale-105 transition-all duration-300"
        onClick={prev}
      >
        <ChevronLeft fontSize="medium" />
      </button>

      <div
        className={`flex items-center sm:justify-between justify-center sm:gap-0 gap-6 w-full ${
          slideDirection === "left"
            ? "destinations-slide-left"
            : slideDirection === "right"
              ? "destinations-slide-right"
              : ""
        }`}
      >
        {visibleItems?.slice(0, visibleCount).map((destination) => {
          const firstImage = destination?.destination_images?.[0];

          const image =
            typeof firstImage === "object" && "destination_image" in firstImage
              ? firstImage.destination_image
              : "";

          return (
            <div
              className="group flex flex-col items-center gap-2 cursor-pointer"
              key={destination.id}
              onClick={() => navigate("/destinacionet")}
            >
              <div className="sm:w-[124px] sm:h-[124px] w-[104px] h-[104px] rounded-full p-[4px] bg-white shadow-md border border-blue-500 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 will-change-transform">
                <Image
                  src={image}
                  alt={`${destination.country} ${destination.city}`}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-all duration-300 will-change-transform"
                />
              </div>

              <div className="text-center leading-tight">
                <Text
                  text={destination.city}
                  className="capitalize text-gray-900"
                  size="text-sm"
                  font="font-semibold"
                />

                {destination.country && (
                  <Text
                    text={destination.country}
                    className="capitalize text-gray-500 mt-[2px]"
                    size="text-xs"
                    font="font-medium"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="min-w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 hover:scale-105 transition-all duration-300"
        onClick={next}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

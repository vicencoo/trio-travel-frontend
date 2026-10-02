import { ArrowRightAlt } from "@/icons";
import { Link } from "react-router-dom";
import type { HomeBannerTypes } from "./types";

export const HomeBanner = ({
  title,
  text,
  badge,
  info,
  image,
  mobileImage,
  buttonText,
  buttonUrl,
  isFirst = false,
}: HomeBannerTypes) => {
  const TitleTag = isFirst ? "h1" : "h2";

  return (
    <div className="relative h-full w-full shrink-0 overflow-hidden text-white">
      <picture>
        {mobileImage && (
          <source media="(max-width: 767px)" srcSet={mobileImage} />
        )}
        <img
          src={image}
          alt={title?.trim() ?? ""}
          loading={isFirst ? "eager" : "lazy"}
          fetchPriority={isFirst ? "high" : "auto"}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-transparent md:bg-gradient-to-l md:from-black/65 md:via-black/30" />

      <div className="relative flex h-full flex-col items-start justify-start gap-4 px-5 pt-7 pb-14 md:gap-5 md:ml-auto md:w-1/2 md:justify-center md:px-10">
        {badge && (
          <span className="w-max rounded-full bg-amber-300 px-3 py-1 text-xs md:px-4 md:text-sm font-semibold text-[#18302f]">
            {badge}
          </span>
        )}

        <div className="flex flex-col gap-2 md:gap-3">
          {title && (
            <TitleTag className="text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {title}
            </TitleTag>
          )}
          {text && (
            <p className="max-w-xl text-sm leading-6 text-white/90 line-clamp-3 md:line-clamp-none md:text-lg md:leading-7">
              {text}
            </p>
          )}
        </div>

        {info && info.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-white/90 md:gap-x-5 md:text-sm">
            {info.map(({ id, icon: Icon, text }) => (
              <span className="flex items-center gap-2" key={id}>
                <Icon size={16} className="shrink-0 text-amber-300" />
                {text}
              </span>
            ))}
          </div>
        )}

        <Link
          to={buttonUrl}
          className="inline-flex w-max items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm md:px-6 md:py-3 font-semibold text-[#0f2f2f] transition-all duration-200 hover:bg-amber-200"
          aria-label={buttonText}
        >
          {buttonText}
          <ArrowRightAlt fontSize="small" />
        </Link>
      </div>
    </div>
  );
};

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

      {/* Mobile: dark at the top (text) and bottom (actions).
          Desktop: dark on the right, where the content sits. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/10 to-black/80 md:bg-gradient-to-l md:from-black/70 md:via-black/35 md:to-transparent" />

      <div className="relative flex h-full flex-col justify-between px-5 pt-7 pb-12 md:ml-auto md:w-1/2 md:justify-center md:gap-8 md:px-12 md:pb-7">
        {/* Heading group */}
        <div className="flex flex-col items-start gap-3 md:gap-4">
          {badge && (
            <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#18302f]">
              {badge}
            </span>
          )}
          {title && (
            <TitleTag className="text-[26px] leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[42px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {title}
            </TitleTag>
          )}
          {text && (
            <p className="max-w-xl text-sm leading-6 text-white/85 line-clamp-3 md:line-clamp-none md:text-base md:leading-7">
              {text}
            </p>
          )}
        </div>

        {/* Highlights + call to action */}
        <div className="flex flex-col gap-4 md:gap-6">
          {info && info.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {info.map(({ id, icon: Icon, text }) => (
                <li
                  key={id}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-md md:text-sm"
                >
                  <Icon size={15} className="shrink-0 text-amber-300" />
                  {text}
                </li>
              ))}
            </ul>
          )}

          <Link
            to={buttonUrl}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f2f2f] shadow-lg transition-all duration-200 hover:bg-amber-200 md:w-max md:justify-start"
            aria-label={buttonText}
          >
            {buttonText}
            <ArrowRightAlt fontSize="small" />
          </Link>
        </div>
      </div>
    </div>
  );
};

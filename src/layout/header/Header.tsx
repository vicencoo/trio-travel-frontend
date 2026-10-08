import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@/hooks/useDisclosure";
import { Image } from "@/components/image";
import { ChevronDown, Menu, MessageCircleMore, X } from "@/icons";
import { HEADER_ITEMS } from "@/constants/navigation";
import { homePageBanners } from "@/constants/homePageBanners";
import { inertProps } from "@/utils/inertProps";
import { PackagesMegaMenu, PackagesMobileLinks } from "./PackagesMegaMenu";
import {
  PropertiesMegaMenu,
  PropertiesMobileLinks,
} from "./PropertiesMegaMenu";
import { ServicesMegaMenu, ServicesMobileLinks } from "./ServicesMegaMenu";
import { SERVICE_PAGES } from "@/constants/services";

const WHATSAPP_URL = "https://wa.me/355696900916";
const MEGA_MENU_CLOSE_DELAY = 150;

type HeaderItem = (typeof HEADER_ITEMS)[number];
type MegaMenuKey = NonNullable<HeaderItem["megaMenu"]>;

const MEGA_MENU_IDS: Record<MegaMenuKey, string> = {
  packages: "packages-mega-menu",
  properties: "properties-mega-menu",
  services: "services-mega-menu",
};

export const Header = () => {
  const { pathname, search } = useLocation();
  const { ref: wrapperRef, isOpen, toggle, close } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MegaMenuKey | null>(null);
  // The services list is long, so on mobile it starts collapsed every time
  // the menu is opened
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Opening one menu replaces the other straight away
  const openMega = useCallback((key: MegaMenuKey) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }, []);

  // Small delay so the menu survives the gap between the trigger and panel
  const scheduleCloseMega = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(
      () => setOpenMenu(null),
      MEGA_MENU_CLOSE_DELAY,
    );
  }, []);

  const closeMega = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpenMenu(null);
  }, []);

  const openPackages = useCallback(() => openMega("packages"), [openMega]);
  const openProperties = useCallback(() => openMega("properties"), [openMega]);
  const openServices = useCallback(() => openMega("services"), [openMega]);

  const megaMenuOpeners: Record<MegaMenuKey, () => void> = {
    packages: openPackages,
    properties: openProperties,
    services: openServices,
  };

  useEffect(() => {
    if (!openMenu) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && closeMega();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openMenu, closeMega]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating (also between /pronat filters,
  // which only change the query string)
  useEffect(() => {
    close();
  }, [pathname, search, close]);

  // Also marks the section as active on its detail pages (e.g. /pronat/:slug)
  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  // The packages item is also active on the seasonal package pages, and the
  // services item on every service page
  const isItemActive = (item: HeaderItem) =>
    isActive(item.path) ||
    (item.megaMenu === "packages" &&
      homePageBanners.some((banner) => pathname === banner.buttonUrl)) ||
    (item.megaMenu === "services" &&
      SERVICE_PAGES.some((service) => pathname === service.path));

  return (
    <header
      ref={wrapperRef}
      className={`sticky top-0 z-[9999] w-full border-b bg-white/80 backdrop-blur-xl transition-shadow duration-300 ${
        isScrolled || isOpen
          ? "border-gray-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
          : "border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="Trio Travel homepage" className="shrink-0">
          <Image
            img="/images/TrioTravel.webp"
            alt="Trio Travel Agency Logo"
            className="min-w-[100px] max-w-[100px] h-[20px] object-cover"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Navigimi kryesor"
          className="hidden md:flex items-center gap-1 rounded-full border border-gray-200/80 bg-gray-50/80 p-1"
        >
          {HEADER_ITEMS.map((item) => {
            const active = isItemActive(item);
            const isMenuOpen = !!item.megaMenu && openMenu === item.megaMenu;
            const highlighted = active || isMenuOpen;
            const openThisMenu = item.megaMenu
              ? megaMenuOpeners[item.megaMenu]
              : undefined;
            return (
              <Link
                key={item.id}
                to={item.path}
                aria-current={active ? "page" : undefined}
                {...(item.megaMenu && {
                  "aria-haspopup": true,
                  "aria-expanded": isMenuOpen,
                  "aria-controls": MEGA_MENU_IDS[item.megaMenu],
                  onMouseEnter: openThisMenu,
                  onMouseLeave: scheduleCloseMega,
                  onFocus: openThisMenu,
                  onBlur: scheduleCloseMega,
                  onClick: closeMega,
                })}
                className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 lg:px-4 py-1.5 text-sm font-medium capitalize select-none transition-colors duration-200 ${
                  highlighted
                    ? "bg-white text-gray-950 shadow-sm ring-1 ring-gray-200"
                    : "text-gray-600 hover:text-gray-950 hover:bg-white/70"
                }`}
              >
                {item.name}
                {item.megaMenu && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      isMenuOpen ? "rotate-180 text-red-600" : ""
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 hover:shadow-md"
          >
            <MessageCircleMore size={16} />
            Na Kontaktoni
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => {
              if (!isOpen) setMobileServicesOpen(false);
              toggle();
            }}
            aria-label={isOpen ? "Mbyll menunë" : "Hap menunë"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 transition-colors duration-200 hover:bg-gray-50"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <PropertiesMegaMenu
        isOpen={openMenu === "properties"}
        whatsappUrl={WHATSAPP_URL}
        onMouseEnter={openProperties}
        onMouseLeave={scheduleCloseMega}
        onNavigate={closeMega}
      />

      <PackagesMegaMenu
        isOpen={openMenu === "packages"}
        whatsappUrl={WHATSAPP_URL}
        onMouseEnter={openPackages}
        onMouseLeave={scheduleCloseMega}
        onNavigate={closeMega}
      />

      <ServicesMegaMenu
        isOpen={openMenu === "services"}
        whatsappUrl={WHATSAPP_URL}
        onMouseEnter={openServices}
        onMouseLeave={scheduleCloseMega}
        onNavigate={closeMega}
      />

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto origin-top border-b border-gray-200 bg-white shadow-xl transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        {...inertProps(!isOpen)}
      >
        <nav
          aria-label="Navigimi kryesor"
          className="container flex flex-col gap-1 py-4"
        >
          {HEADER_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <div key={item.id} className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Link
                    to={item.path}
                    aria-current={active ? "page" : undefined}
                    className={`flex flex-1 items-center justify-between rounded-xl px-4 py-3 text-base font-medium capitalize transition-colors duration-200 ${
                      active
                        ? "bg-red-50 text-red-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-950"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                    )}
                  </Link>
                  {item.megaMenu === "services" && (
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      aria-label={
                        mobileServicesOpen
                          ? "Mbyll listën e shërbimeve"
                          : "Hap listën e shërbimeve"
                      }
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-links"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-gray-600 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-950"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180 text-red-600" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.megaMenu === "properties" && <PropertiesMobileLinks />}
                {item.megaMenu === "packages" && <PackagesMobileLinks />}
                {item.megaMenu === "services" && (
                  <div
                    id="mobile-services-links"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    {...inertProps(!mobileServicesOpen)}
                  >
                    <div className="overflow-hidden">
                      <ServicesMobileLinks />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700"
          >
            <MessageCircleMore size={18} />
            Na Kontaktoni në WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

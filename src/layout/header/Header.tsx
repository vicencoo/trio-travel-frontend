import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@/hooks/useDisclosure";
import { Image } from "@/components/image";
import { Menu, MessageCircleMore, X } from "@/icons";
import { HEADER_ITEMS } from "@/constants/navigation";
import { inertProps } from "@/utils/inertProps";

const WHATSAPP_URL = "https://wa.me/355696900916";

export const Header = () => {
  const { pathname } = useLocation();
  const { ref: wrapperRef, isOpen, toggle, close } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Also marks the section as active on its detail pages (e.g. /pronat/:slug)
  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

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
            const active = isActive(item.path);
            return (
              <Link
                key={item.id}
                to={item.path}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3 lg:px-4 py-1.5 text-sm font-medium capitalize select-none transition-colors duration-200 ${
                  active
                    ? "bg-white text-gray-950 shadow-sm ring-1 ring-gray-200"
                    : "text-gray-600 hover:text-gray-950 hover:bg-white/70"
                }`}
              >
                {item.name}
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
            onClick={toggle}
            aria-label={isOpen ? "Mbyll menunë" : "Hap menunë"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 transition-colors duration-200 hover:bg-gray-50"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute inset-x-0 top-full origin-top border-b border-gray-200 bg-white shadow-xl transition-all duration-300 ease-out ${
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
            const active = isActive(item.path);
            return (
              <Link
                key={item.id}
                to={item.path}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium capitalize transition-colors duration-200 ${
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

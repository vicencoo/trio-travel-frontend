import { useEffect, useState } from "react";
import { Card } from "@/components/card";
import { Close, Search } from "@/icons";

type FloorPlanProps = {
  src: string;
  alt: string;
};

// Floor plan preview that opens full screen on click
export const FloorPlan = ({ src, alt }: FloorPlanProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-medium">Planimetria</h2>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:underline"
        >
          <Search size={15} />
          Zmadho
        </button>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Hap planimetrinë në ekran të plotë"
        className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 cursor-zoom-in"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="max-h-[520px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Mbyll"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-transform hover:scale-110"
          >
            <Close />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-full max-w-full rounded-xl bg-white object-contain p-3"
          />
        </div>
      )}
    </Card>
  );
};

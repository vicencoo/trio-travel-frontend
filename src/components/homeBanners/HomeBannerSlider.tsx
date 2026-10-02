import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@/icons";
import { HomeBanner } from "./HomeBanner";
import type { HomeBannerSliderTypes } from "./types";

const SWIPE_THRESHOLD = 50;
const DRAG_START_THRESHOLD = 5;
const TRANSITION_MS = 700;

export const HomeBannerSlider = ({
  banners,
  interval = 6000,
}: HomeBannerSliderTypes) => {
  const total = banners.length;
  const isLooping = total > 1;

  // For an endless loop the track is [last copy, ...banners, first copy].
  // `position` is the index in that track, so the real banners start at 1.
  // When we land on a copy we jump to the real banner without a transition.
  const toSlide = (index: number, key: string) => {
    const { id, ...banner } = banners[index];
    return { ...banner, key: key || String(id), realIndex: index };
  };
  const slides = isLooping
    ? [
        toSlide(total - 1, "clone-last"),
        ...banners.map((_, index) => toSlide(index, "")),
        toSlide(0, "clone-first"),
      ]
    : banners.map((_, index) => toSlide(index, ""));

  const [position, setPosition] = useState(isLooping ? 1 : 0);
  const [isJumping, setIsJumping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const hasDragged = useRef(false);

  const current = isLooping ? (position - 1 + total) % total : 0;
  const isOnClone = isLooping && (position === 0 || position === total + 1);

  const move = (step: 1 | -1) => {
    // Ignore moves while we are on a copy waiting to jump back.
    if (!isLooping || isOnClone) return;
    setPosition((prev) => prev + step);
  };

  const goTo = (index: number) => {
    if (isLooping) setPosition(index + 1);
  };

  // After sliding onto a copy, jump to the matching real banner.
  useEffect(() => {
    if (!isOnClone) return;
    const timer = setTimeout(() => {
      setIsJumping(true);
      setPosition(position === 0 ? total : 1);
    }, TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [isOnClone, position, total]);

  // Turn the transition back on once the jump has been painted.
  useEffect(() => {
    if (!isJumping) return;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setIsJumping(false));
    });
    return () => cancelAnimationFrame(frame);
  }, [isJumping]);

  // `position` is a dependency so the timer restarts after a manual change.
  useEffect(() => {
    if (isPaused || isDragging || !isLooping) return;
    const timer = setTimeout(() => setPosition((prev) => prev + 1), interval);
    return () => clearTimeout(timer);
  }, [position, isPaused, isDragging, isLooping, interval]);

  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (!isLooping) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragStartX.current = e.clientX;
    hasDragged.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;

    // Only start dragging after a small movement, so normal clicks on the
    // button and the dots still work.
    if (!hasDragged.current && Math.abs(diff) > DRAG_START_THRESHOLD) {
      hasDragged.current = true;
      setIsDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (hasDragged.current) setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (dragStartX.current === null) return;
    if (hasDragged.current && Math.abs(dragOffset) > SWIPE_THRESHOLD) {
      move(dragOffset < 0 ? 1 : -1);
    }
    dragStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  // A drag ends with a click on whatever is under the pointer; swallow it so
  // dragging over the button doesn't open the link.
  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged.current = false;
    }
  };

  if (total === 0) return null;

  return (
    <section
      className={`public-reveal group relative w-full h-[70svh] min-h-[480px] max-h-[620px] md:h-[65vh] md:min-h-[460px] md:max-h-[600px] overflow-hidden rounded-2xl md:rounded-3xl shadow-xl select-none touch-pan-y ${
        isLooping ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
      }`}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClickCapture={handleClickCapture}
      onDragStart={(e) => e.preventDefault()}
    >
      <div
        className={`flex h-full ${
          isDragging || isJumping
            ? ""
            : "transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        }`}
        style={{
          transform: `translateX(calc(-${position * 100}% + ${dragOffset}px))`,
        }}
      >
        {slides.map(({ key, realIndex, ...banner }, index) => {
          const isClone = key.startsWith("clone");
          const isActive = index === position;
          return (
            <div
              key={key}
              className="h-full w-full shrink-0"
              aria-roledescription="slide"
              aria-label={`${realIndex + 1} / ${total}`}
              aria-hidden={isClone || !isActive}
              inert={isClone || !isActive}
            >
              <HomeBanner {...banner} isFirst={!isClone && realIndex === 0} />
            </div>
          );
        })}
      </div>

      {isLooping && (
        <>
          <button
            type="button"
            onClick={() => move(-1)}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-md transition-all duration-200 hover:bg-black/60 md:flex md:opacity-0 md:group-hover:opacity-100"
            aria-label="Oferta e mëparshme"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-md transition-all duration-200 hover:bg-black/60 md:flex md:opacity-0 md:group-hover:opacity-100"
            aria-label="Oferta e radhës"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-4 md:bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {banners.map(({ id }, index) => (
              <button
                key={id}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Shko te oferta ${index + 1}`}
                aria-current={index === current}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

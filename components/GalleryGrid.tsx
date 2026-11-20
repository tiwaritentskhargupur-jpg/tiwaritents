"use client";

import Image from "next/image";
import { withBase } from "@/lib/assetPath";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { business, type GalleryFilter, type GalleryItem } from "@/site.config";
import { fillTemplate, whatsappHref } from "@/lib/links";
import { Icon } from "./Icon";

export function GalleryGrid({
  items,
  filters,
  variant,
  header,
}: {
  items: GalleryItem[];
  filters: GalleryFilter[];
  variant: "home" | "page";
  header?: ReactNode;
}) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter["id"]>("all");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const visible = items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter,
  );

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div
        className={
          variant === "home"
            ? "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
            : "mb-16"
        }
      >
        {header}
        <div
          className={`flex flex-wrap items-center gap-2 ${
            variant === "page" ? "justify-center" : ""
          }`}
          role="group"
          aria-label={
            variant === "home" ? business.gallery.homeTitle : business.gallery.pageTitle
          }
        >
        {filters.map((filter) => {
          const selected = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-label text-label-sm uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                variant === "page" ? "px-5 py-2.5" : ""
              } ${
                selected
                  ? "bg-forest-dark text-on-primary"
                  : "border border-border-soft text-charcoal-muted hover:border-accent hover:text-accent"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="font-body text-body-md text-charcoal-muted text-center mt-10">
          {business.gallery.empty}
        </p>
      ) : (
        <div
          className={
            variant === "home"
              ? "grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }
        >
          {visible.map((item) => {
            const label =
              variant === "home" ? item.homeCategoryLabel : item.pageCategoryLabel;
            const homeClass =
              item.homeSize === "large"
                ? "md:min-h-[440px] min-h-[380px]"
                : "min-h-[320px]";
            const span =
              item.homeColumns === 7
                ? "md:col-span-7"
                : item.homeColumns === 5
                  ? "md:col-span-5"
                  : "md:col-span-4";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                className={`group relative w-full overflow-hidden rounded-lg bg-forest-deep border border-border-soft text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  variant === "home" ? `${span} ${homeClass}` : "min-h-[340px]"
                }`}
              >
                <Image
                  src={withBase(item.image)}
                  alt={item.imageAlt}
                  fill
                  sizes={variant === "home" ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                  className="object-cover transition-transform duration-700 ease-subtle group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <span className="font-label text-label-sm text-accent-light uppercase mb-1">
                    {label}
                  </span>
                  <span
                    className={`font-headline text-on-primary font-bold ${
                      variant === "home" && item.homeSize === "large"
                        ? "text-headline-md"
                        : "text-headline-sm"
                    }`}
                  >
                    {item.title}
                  </span>
                  {variant === "home" && item.homeSize === "large" ? (
                    <span className="font-body text-body-sm text-ivory-light/90 mt-1">
                      {item.caption}
                    </span>
                  ) : null}
                </span>
                <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-forest-deep/80 text-accent-light flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                  <Icon name="fullscreen" />
                </span>
              </button>
            );
          })}
        </div>
      )}

      {active ? (
        <div
          className="fixed inset-0 z-[60] bg-forest-deep/95 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative max-w-4xl w-full bg-forest-dark border border-accent/40 rounded-lg overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <Image
                src={withBase(active.image)}
                alt={active.imageAlt}
                width={1600}
                height={1067}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                ref={closeRef}
                type="button"
                aria-label={business.cta.closeLightbox}
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-forest-deep/80 text-ivory-light hover:text-accent-light border border-border-dark flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon name="close" />
              </button>
            </div>
            <div className="p-6 bg-forest-dark text-ivory-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 id={titleId} className="font-headline text-headline-sm font-bold">
                  {active.title}
                </h3>
                <p className="font-body text-body-sm text-ivory-light/90 mt-1">
                  {active.caption}
                </p>
              </div>
              <a
                href={whatsappHref(
                  fillTemplate(business.whatsappMessages.lightbox, {
                    title: active.title,
                  }),
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-light text-forest-deep font-label text-label-lg uppercase hover:bg-champagne whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon name="chat" />
                {business.cta.enquireSetup}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

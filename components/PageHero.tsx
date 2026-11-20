export function PageHero({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  align?: "center" | "left";
}) {
  return (
    <section className="relative py-20 lg:py-28 bg-forest-deep text-ivory-light border-b border-border-dark overflow-hidden">
      <div
        className={`relative z-10 mx-auto px-6 ${
          align === "center" ? "max-w-3xl text-center" : "max-w-7xl"
        }`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-accent-light/40 bg-forest-dark/80 text-accent-light font-label text-label-sm uppercase mb-4">
          {eyebrow}
        </span>
        <h1 className="font-headline text-display-xl-mobile md:text-display-lg lg:text-display-xl font-bold max-w-3xl mb-6 text-balance">
          {title}
        </h1>
        <p
          className={`font-body text-body-lg text-ivory-light/90 max-w-2xl leading-relaxed text-pretty ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      </div>
    </section>
  );
}

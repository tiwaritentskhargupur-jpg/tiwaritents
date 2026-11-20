export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const wrap =
    align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl text-left";

  return (
    <div className={`${wrap} mb-16`}>
      <span
        className={`font-label text-label-sm uppercase mb-2 block ${
          tone === "dark" ? "text-accent-light" : "text-accent"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-headline text-display-lg-mobile md:text-headline-lg lg:text-display-lg font-bold mb-4 text-balance ${
          tone === "dark" ? "text-ivory-light" : "text-forest-dark"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`font-body text-body-md leading-relaxed text-pretty ${
            tone === "dark" ? "text-ivory-light/80" : "text-charcoal-muted"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

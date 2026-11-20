import { business } from "@/site.config";
import { addressLine, emailHref, phoneHref, whatsappHref } from "@/lib/links";
import { Icon } from "./Icon";

export function ContactPanel({ tone }: { tone: "home" | "contact" }) {
  const copy = tone === "home" ? business.homeContact : business.contactPage;
  const labels = business.contactShared;
  const card =
    tone === "home"
      ? "p-8 rounded-lg bg-ivory-light border border-border-soft space-y-6"
      : "p-8 rounded-lg bg-beige-subtle border border-border-soft space-y-6";

  const rows = [
    {
      icon: "location_on",
      label: labels.addressLabel,
      value: addressLine(),
    },
    {
      icon: "call",
      label: tone === "home" ? labels.phoneLabel : labels.phoneLabelAlt,
      value: business.phoneDisplay,
      href: phoneHref(),
    },
    {
      icon: "chat",
      label: tone === "home" ? labels.whatsappLabel : labels.whatsappLabelAlt,
      value: business.whatsappDisplay,
      href: whatsappHref(business.whatsappMessages.quote),
      external: true,
    },
    {
      icon: "mail",
      label: labels.emailLabel,
      value: business.email,
      href: emailHref(),
    },
    {
      icon: "schedule",
      label: tone === "home" ? labels.hoursLabel : labels.hoursLabelAlt,
      value: business.hours,
    },
  ];

  return (
    <div className="space-y-8">
      <div className={card}>
        <h2 className="font-headline text-headline-sm text-forest-dark font-bold">
          {copy.panelTitle}
        </h2>
        <ul className="space-y-4">
          {rows.map((row) => (
            <li key={row.label} className="flex items-center gap-4">
              <Icon name={row.icon} className="text-accent" />
              <div>
                <p className="font-body text-body-sm text-charcoal-muted">{row.label}</p>
                {row.href ? (
                  <a
                    href={row.href}
                    {...(row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="font-body text-body-md text-forest-dark hover:text-accent font-bold transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="font-body text-body-md text-forest-dark font-bold">
                    {row.value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-border-soft">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label text-label-lg text-accent hover:text-forest-dark transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon name="travel_explore" />
            {business.cta.viewGoogle}
          </a>
        </div>
      </div>

      <div
        id="location-map"
        className="rounded-lg overflow-hidden border border-border-soft shadow-sm bg-ivory-light"
      >
        <div className="p-4 bg-forest-dark text-ivory-light flex items-center justify-between gap-4">
          <h3 className="font-headline text-headline-sm font-semibold">{copy.mapHeading}</h3>
          <span className="font-body text-body-sm text-accent-light">{business.city}</span>
        </div>
        <iframe
          title={`${copy.mapHeading} — ${business.name}`}
          src={business.mapEmbedUrl}
          className="w-full h-64 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

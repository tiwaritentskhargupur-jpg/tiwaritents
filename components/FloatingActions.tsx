import { business } from "@/site.config";
import { phoneHref, whatsappHref } from "@/lib/links";
import { Icon } from "./Icon";

export function FloatingActions() {
  return (
    <aside
      aria-label={business.cta.quickContact}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      <a
        href={phoneHref()}
        aria-label={business.cta.callAria}
        title={business.cta.callNow}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-forest-dark text-ivory-light border border-accent/40 shadow-lg hover:bg-forest-deep hover:scale-105 transition-all duration-300 ease-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Icon name="call" />
      </a>
      <a
        href={whatsappHref(business.whatsappMessages.floating)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={business.cta.whatsappAria}
        title={business.cta.enquireWhatsapp}
        className="flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-accent-light text-forest-deep font-label text-label-lg border border-accent/30 shadow-xl hover:bg-champagne hover:scale-105 transition-all duration-300 ease-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
      >
        <Icon name="chat" className="text-forest-deep" />
        <span className="hidden sm:inline">{business.cta.enquireWhatsapp}</span>
      </a>
    </aside>
  );
}

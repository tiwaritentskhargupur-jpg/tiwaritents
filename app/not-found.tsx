import Link from "next/link";
import { business } from "@/site.config";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-light">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-headline text-display-lg-mobile md:text-display-lg text-forest-dark font-bold text-balance">
          {business.notFound.title}
        </h1>
        <p className="font-body text-body-lg text-charcoal-muted mt-6">{business.notFound.body}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-forest-dark text-on-primary font-label text-label-lg uppercase hover:bg-forest-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {business.notFound.home}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-forest-dark text-forest-dark font-label text-label-lg uppercase hover:bg-forest-dark hover:text-ivory-light focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {business.notFound.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}

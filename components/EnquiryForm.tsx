"use client";

import { FormEvent, useState } from "react";
import { business, type FormCopy } from "@/site.config";
import { fillTemplate, whatsappHref } from "@/lib/links";
import { Icon } from "./Icon";

export function EnquiryForm({
  copy,
  tone,
}: {
  copy: FormCopy;
  tone: "ivory" | "beige";
}) {
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const fields = business.formFields;
  const inputClass =
    tone === "ivory"
      ? "w-full px-4 py-3 bg-beige-subtle/50 border border-border-soft rounded font-body text-body-md text-charcoal focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
      : "w-full px-4 py-3 bg-ivory-light border border-border-soft rounded font-body text-body-md text-charcoal focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors";
  const cardClass =
    tone === "ivory"
      ? "p-8 sm:p-10 rounded-lg bg-ivory-light border border-border-soft shadow-sm"
      : "p-8 sm:p-10 rounded-lg bg-beige-subtle border border-border-soft shadow-sm";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const eventType = String(data.get("event_type") ?? "");
    const date = String(data.get("date") ?? "");
    const location = String(data.get("location") ?? "");
    const requirements = String(data.get("requirements") ?? "");
    const message = fillTemplate(business.whatsappMessages.enquiry, {
      intro: business.whatsappMessages.quote,
      name,
      phone,
      eventType,
      date,
      location,
      requirements: requirements || business.whatsappMessages.notesEmpty,
    });
    setWhatsappUrl(whatsappHref(message));
    setSuccess(true);
  }

  return (
    <div id="enquiry-form" className={cardClass}>
      <div className="mb-8">
        <span className="font-label text-label-sm uppercase text-accent mb-1 block">
          {copy.eyebrow}
        </span>
        <h2 className="font-headline text-headline-lg text-forest-dark font-bold">
          {copy.title}
        </h2>
        <p className="font-body text-body-md text-charcoal-muted mt-2">{copy.intro}</p>
      </div>

      <form className="space-y-6" onSubmit={onSubmit} noValidate={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="font-label text-label-lg text-forest-dark">
              {fields.nameLabel}
            </span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder={fields.namePlaceholder}
              className={inputClass}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-label text-label-lg text-forest-dark">
              {fields.phoneLabel}
            </span>
            <span className="relative flex items-center">
              <Icon name="call" className="absolute left-3.5 text-charcoal-muted" />
              <input
                type="tel"
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder={fields.phonePlaceholder}
                className={`${inputClass} pl-11`}
              />
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="font-label text-label-lg text-forest-dark">
              {fields.eventTypeLabel}
            </span>
            <select name="event_type" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                {fields.eventTypePlaceholder}
              </option>
              {fields.eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-label text-label-lg text-forest-dark">
              {fields.dateLabel}
            </span>
            <input type="date" name="date" required className={inputClass} />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="font-label text-label-lg text-forest-dark">
            {fields.locationLabel}
          </span>
          <input
            type="text"
            name="location"
            required
            placeholder={fields.locationPlaceholder}
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-label text-label-lg text-forest-dark">
            {copy.requirementsLabel}
          </span>
          <textarea
            name="requirements"
            rows={tone === "ivory" ? 3 : 4}
            placeholder={copy.requirementsPlaceholder}
            className={inputClass}
          />
        </label>

        {success ? (
          <div
            role="status"
            className="p-4 rounded bg-forest-dark text-ivory-light border border-accent/40 flex items-start gap-3"
          >
            <Icon name="check_circle" className="text-accent-light shrink-0" />
            <div className="space-y-3">
              <p className="font-body text-body-sm">{copy.success}</p>
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label text-label-sm uppercase text-accent-light hover:text-champagne focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  <Icon name="chat" />
                  {business.cta.enquireWhatsapp}
                </a>
              ) : null}
            </div>
          </div>
        ) : null}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-forest-dark text-on-primary font-label text-label-lg uppercase transition-colors duration-300 ease-subtle hover:bg-forest-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {business.cta.submitEnquiry}
          <Icon name="arrow_forward" />
        </button>
      </form>
    </div>
  );
}

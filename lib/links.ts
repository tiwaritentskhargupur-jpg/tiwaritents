import { business } from "@/site.config";

export function phoneHref() {
  return `tel:${business.phoneTel}`;
}

export function emailHref() {
  return `mailto:${business.email}`;
}

export function whatsappHref(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function fillTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  );
}

export function addressLine() {
  return `${business.addressLine}, ${business.city}`;
}

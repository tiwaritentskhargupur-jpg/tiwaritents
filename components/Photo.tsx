import Image from "next/image";

export function Photo({
  src,
  alt,
  className = "object-cover",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}

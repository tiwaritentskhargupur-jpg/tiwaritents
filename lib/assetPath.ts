// next/image does not add basePath to image URLs when images are unoptimized
// (static export), so prefix them by hand. Empty when there is no basePath.
export const withBase = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

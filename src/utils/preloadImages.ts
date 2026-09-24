const images = import.meta.glob(
  "../assets/**/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

export function preloadAllImages() {
  Object.values(images).forEach((src) => {
    const img = new Image();
    img.src = src;

    if (img.decode) {
      img.decode().catch(() => {});
    }
  });
}
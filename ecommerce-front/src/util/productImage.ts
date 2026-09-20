// The vite dev server proxies /api-image to eg.hm.com (see vite.config.ts);
// that proxy only exists in `vite dev`, so production must use the direct URL.
export const resolveProductImageSrc = (img: string) =>
  import.meta.env.DEV ? img.replace('https://eg.hm.com', '/api-image') : img;

export const CRITICAL_ASSETS = [
  "https://res.cloudinary.com/day7gel9b/video/upload/72C94B09-71C4-4795-BCF3-AD0D8EA6EF16_Copy_vavtfh.jpg",
  "https://res.cloudinary.com/day7gel9b/video/upload/26DB46C3-6640-4540-B20D-6C3000E35676_Copy_gabigd.jpg",
  "https://res.cloudinary.com/day7gel9b/video/upload/387AC562-8E99-45EC-B14F-55A25FD85C1B_Copy_cgwb2v.jpg"
];

/**
 * Preloads an array of image URLs and returns a promise that resolves when all are loaded.
 */
export async function preloadImages(urls: string[]): Promise<void[]> {
  const promises = urls.map((url) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => {
        console.warn(`Failed to preload asset: ${url}`);
        resolve(); // Resolve anyway to not block the loader forever
      };
    });
  });

  return Promise.all(promises);
}

export const importImages = () => {
  const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}");
  return Object.entries(images).map(([path, resolver]) => ({
    path,
    resolver,
  }));
};


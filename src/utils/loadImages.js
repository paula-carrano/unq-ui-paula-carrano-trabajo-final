export const loadImages = async (size, importImages, shuffleArray) => {
    const imageModules = importImages();
    const images = await Promise.all(imageModules.map(({ resolver }) => resolver()));
  
    const totalBlocks = size * size;
    const selectedImages = images.slice(0, totalBlocks / 2);
  
    const shuffledImages = shuffleArray([...selectedImages, ...selectedImages]);
  
    return shuffledImages.map((image, index) => ({
      index,
      value: image.default,
      flipped: false,
    }));
  };
  
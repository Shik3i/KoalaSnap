const MAX_DIM = 500;
const QUALITY = 0.8;

export function compressAvatar(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('File read failed'));

    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Image decode failed'));
      img.onload = () => {
        let { width, height } = img;
        if (width > MAX_DIM || height > MAX_DIM) {
          const ratio = Math.min(MAX_DIM / width, MAX_DIM / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas 2D not supported'));
          return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('WebP encoding failed'));
              return;
            }
            resolve(URL.createObjectURL(blob));
          },
          'image/webp',
          QUALITY,
        );
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

export function releaseAvatar(id) {
  const el = document.getElementById(id);
  if (el instanceof HTMLImageElement) {
    el.src = '';
  }
}

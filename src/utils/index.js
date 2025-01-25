export const getImageFromBase64 = (base64) => {
  return `data:image/png;base64,${base64}`;
};

// Sayıyı formatlayan fonksiyon
export function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
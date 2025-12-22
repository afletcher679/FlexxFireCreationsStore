export interface GalleryImage {
  id: number;
  image: string;
}
export interface Creation {
  id: number;
  name: string;
  description: string;
  price: number;
  gallery_images: GalleryImage[];
  created_at: string;
};

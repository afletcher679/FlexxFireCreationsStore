export interface Color {
  id: number;
  name: string;
  hex_code: string;
}

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
  colors: Color[];
  created_at: string;
};

export interface Color {
  id: number;
  name: string;
  hex_code: string;
}

export interface ColorCombo {
  id: number;
  colors: Color[];
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
  color_combos: ColorCombo[];
  created_at: string;
};

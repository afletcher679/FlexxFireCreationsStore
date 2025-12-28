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
  featured: boolean;
}

export interface Creation {
  id: number;
  name: string;
  mini_description: string;
  full_description: string;
  price: number;
  gallery_images: GalleryImage[];
  colors: Color[];
  color_combos: ColorCombo[];
  created_at: string;
};

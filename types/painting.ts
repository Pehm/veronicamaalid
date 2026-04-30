export type Painting = {
  title: {
    et: string;
    en: string;
    ru: string;
  };
  description: {
    et: string;
    en: string;
    ru: string;
  };
  year: number;
  price: number;
  size: string;
  sold: boolean;
  featured: boolean;
  available: boolean;
  image: string;
  category: {
    et: string[];
    en: string[];
    ru: string[];
  };
};
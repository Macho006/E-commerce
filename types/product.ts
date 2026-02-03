export interface Rating {
  expert_score: number;
  user_score: number;
  reviews_count: number;
}

export interface Attribute {
  title: string;
  value: number;
}

export interface Specifications {
  camera: string;
  os: string;
  display_diagonal: string;
  charging: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  rating: Rating;
  attributes: Attribute[];
  price: number;
  colors: string[];
  storage_options: string[];
  specifications: Specifications;
  description: string;
  category: string;
  discount?: number;
  image: string;
  isNew?: boolean;
}

export type ProductList = Product[];

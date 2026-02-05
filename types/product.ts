
export interface SpecItem {
  label: string;
  value: string | number;
}

export interface DetailedSpecs {
  factory?: SpecItem[];
  screen?: SpecItem[];
  camera?: SpecItem[];
}

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

export interface Users {
  id: string;
  name: string;
}

export interface Feedback {
  id: string;
  title: string;
  description: string;
  image: string;
  timestamp: string;
  stars: number;
  user: Users;
}

export interface Product {
  id: string;
  brand: string;
  title: string;
  slug: string;
  rating: Rating;
  attributes: Attribute[];
  price: number;
  colors: string[];
  image: string;
  imagesByColor: Record<string, string[]>;
  storage_options: string[];
  specifications: Specifications;
  detailed_specs?: DetailedSpecs;
  description: string;
  category: string;
  discount?: number;
  isNew?: boolean;
  feedbacks?: Feedback[];
}

export type ProductList = Product[];

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  images?: string[];
  price: string;
  featured?: boolean;
  longDescription?: string;
  specs?: Array<{
    label: string;
    value: string;
  }>;
  features?: Array<string | {
    title: string;
    description: string;
  }>;
  category?: string;
}

// Import actual products from JavaScript file to ensure consistency
import { products as jsProducts } from './products.js';

// Type cast the imported array to ensure type safety
export const products: Product[] = jsProducts as Product[];

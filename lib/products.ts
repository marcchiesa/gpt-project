import products from '../data/products_singapore.json';

export type Product = any;

export const CATEGORIES = [
  'Love and Romance',
  'Friends',
  'Family',
  'Graduation',
  'Get Well',
  'Valentine’s Day',
  'Mother’s Day',
] as const;

export type Category = typeof CATEGORIES[number];

export function getProductsByCategory(){
  const byCat: Record<string, Product[]> = {};
  for(const p of (products as any[])){
    const cat = (p as any).category || 'Family';
    if(!byCat[cat]) byCat[cat] = [];
    byCat[cat].push(p as any);
  }
  return byCat;
}

export interface ProductCategoryItem {
  id: string;
  title: string;
  category: 'panels' | 'inverters' | 'batteries' | 'accessories';
  badge: string;
  description: string;
  specs: string[];
  imageUrl: string;
  minOrder: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  description: string;
  details: string[];
}

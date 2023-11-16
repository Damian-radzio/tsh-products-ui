export type ProductsList = {
  productsList: Product[];
};

export type Product = {
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
  id: string;
};

export enum ProductsStatus {
  pending = 'pending',
  succeeded = 'success',
  failed = 'failed',
}

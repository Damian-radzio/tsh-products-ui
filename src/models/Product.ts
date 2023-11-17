export type ProductsList = {
  productsList: Product[];
  meta: MetaParams;
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

export type MetaParams = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

export enum ProductsStatus {
  pending = 'pending',
  succeeded = 'success',
  failed = 'failed',
}

export type ProductsParams = {
  search?: string;
  limit?: number;
  page?: number;
  promo?: boolean | null;
  active?: boolean | null;
};

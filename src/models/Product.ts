export type Product = {
  id: number;
};

export enum ProductsStatus {
  pending = 'pending',
  succeeded = 'success',
  failed = 'failed',
}

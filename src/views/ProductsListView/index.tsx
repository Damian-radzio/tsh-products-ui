import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { AppDispatch } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from 'components/ProductCard';
import { Product } from 'models/Product';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { fetchProducts } from 'features/products';
import { updateFilters } from 'features/productsFilters';
import CustomPagination from 'components/CustomPagination';

const ProductsListView = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const { productsFilters } = useSelector((state: any) => state.productsFilters);
  const { productsList, fetchProductsStatus } = useSelector((state: any) => state.products);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(updateFilters({ page: currentPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  useEffect(() => {
    dispatch(fetchProducts(productsFilters));
  }, [dispatch, productsFilters, currentPage]);

  return (
    <div className={styles.productsView}>
      {fetchProductsStatus === 'pending' ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : productsList.items?.length > 0 ? (
        <>
          <Grid container className={styles.productsWrapper}>
            {productsList.items?.map((product: Product, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
          </Grid>
          <CustomPagination
            productsList={productsList}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <Typography variant="h4" color="textPrimary" textAlign={'center'}>
          Products not found
        </Typography>
      )}
    </div>
  );
};

export default ProductsListView;

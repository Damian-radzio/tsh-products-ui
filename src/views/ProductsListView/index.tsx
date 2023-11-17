import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { AppDispatch } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from 'components/ProductCard';
import { Product, ProductsStatus } from 'models/Product';
import { CircularProgress, Grid } from '@mui/material';
import { fetchProductById, fetchProducts } from 'features/products';
import { updateFilters } from 'features/productsFilters';
import CustomPagination from 'components/CustomPagination';
import EmptyPageInfo from 'components/EmptyPageInfo';
import ProductDetailsModal from 'components/ProductCard/components/ProductDetailsModal';

const ProductsListView = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openProductId, setOpenProductId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { productsFilters } = useSelector((state: any) => state.productsFilters);
  const { productsList, productsListStatus } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(updateFilters({ page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(fetchProducts(productsFilters));
  }, [dispatch, productsFilters, currentPage]);

  useEffect(() => {
    if (!openProductId) return;
    if (isModalOpen) {
      dispatch(fetchProductById(openProductId));
    }
  }, [dispatch, openProductId, isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'scroll';
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <div className={styles.productsView}>
        {productsListStatus === ProductsStatus.pending && (
          <div className={styles.loader}>
            <CircularProgress />
          </div>
        )}
        {productsListStatus === ProductsStatus.succeeded && productsList.items?.length > 0 && (
          <>
            <Grid container className={styles.productsWrapper}>
              {productsList.items?.map((product: Product, idx: number) => (
                <ProductCard
                  key={idx}
                  product={product}
                  setIsModalOpen={setIsModalOpen}
                  setOpenProductId={setOpenProductId}
                />
              ))}
            </Grid>
            <CustomPagination
              productsList={productsList}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
        {productsListStatus === ProductsStatus.failed ||
          (productsList.items?.length <= 0 && productsListStatus !== ProductsStatus.pending && (
            <EmptyPageInfo moreInfoText={'There are no products on the list'} />
          ))}
      </div>
      {isModalOpen && openProductId !== '' && (
        <ProductDetailsModal setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default ProductsListView;

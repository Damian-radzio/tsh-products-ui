import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { fetchProducts } from 'thunks/events/thunks';
import { AppDispatch } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from 'components/ProductCard';
import { Product } from 'models/Product';
import { Grid, IconButton, Pagination, Typography } from '@mui/material';
import useWindowDimensions from 'helpers/useWindowDimension';

const ProductsListView = (): JSX.Element => {
  const { width } = useWindowDimensions();

  const dispatch = useDispatch<AppDispatch>();
  const { productsList } = useSelector((state: any) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const changeItemsPerPage = (): number => {
    let itemsPerPage: number = 8;
    if (width >= 1440) setItemsPerPage(8);
    else if (width < 1024) setItemsPerPage(4);
    else setItemsPerPage(6);

    return itemsPerPage;
  };
  useEffect(() => {
    changeItemsPerPage();
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsList.items?.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationItem = (item: any) => {
    let buttonContent;

    if (item.type === 'first') {
      buttonContent = 'First';
    } else if (item.type === 'last') {
      buttonContent = 'Last';
    } else if (item.type === 'end-ellipsis') {
      buttonContent = '...';
    } else if (item.type === 'start-ellipsis') {
      buttonContent = '...';
    } else {
      buttonContent = item.page;
    }

    return (
      <IconButton
        {...item}
        onClick={e => handleChangePage(e, item.page)}
        sx={{
          '&:disabled': {
            opacity: 0.5,
          },
          width: '40px',
        }}>
        <Typography>{buttonContent}</Typography>
      </IconButton>
    );
  };

  return (
    <div className={styles.productsView}>
      <Grid container className={styles.productsWrapper}>
        {currentItems?.map((product: Product, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(productsList.items?.length / itemsPerPage)}
        page={currentPage}
        defaultPage={1}
        boundaryCount={3}
        siblingCount={-1}
        renderItem={renderPaginationItem}
        showFirstButton
        showLastButton
        hidePrevButton
        hideNextButton
        sx={{
          '&:disabled': {
            opacity: 0.5,
          },
        }}
      />
    </div>
  );
};

export default ProductsListView;

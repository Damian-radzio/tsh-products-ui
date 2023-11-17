import React, { useEffect } from 'react';
import styles from './styles.module.scss';

import useWindowDimensions from 'helpers/useWindowDimension';
import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';
import { fetchProducts } from 'features/products';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';

const Navigation = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { productsFilters } = useSelector((state: any) => state.productsFilters);

  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(fetchProducts(productsFilters));
  }, [dispatch, productsFilters]);

  return width >= 768 ? (
    <div className={styles.navbarWrapper}>
      <DesktopLayout />
    </div>
  ) : (
    <div className={styles.navbarWrapper}>
      <MobileLayout />
    </div>
  );
};

export default Navigation;

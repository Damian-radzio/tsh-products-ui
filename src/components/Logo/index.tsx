import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { updateFilters } from 'features/productsFilters';

const Logo = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Link
      to={'/products'}
      className={styles.logo}
      onClick={() => dispatch(updateFilters({ page: 1, search: '', promo: false, active: false }))}>
      <p>join.tsh.io</p>
    </Link>
  );
};

export default Logo;

import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
const Logo = (): JSX.Element => {
  return (
    <Link to={'/products'} className={styles.logo}>
      <p>join.tsh.io</p>
    </Link>
  );
};

export default Logo;

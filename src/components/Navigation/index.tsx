import React from 'react';
import styles from './styles.module.scss';

import useWindowDimensions from 'helpers/useWindowDimension';
import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';
import { useLocation } from 'react-router-dom';

const Navigation = (): JSX.Element => {
  const location = useLocation();

  const { width } = useWindowDimensions();

  return location.pathname !== '/login' ? (
    <>
      {width >= 768 ? (
        <div className={styles.navbarWrapper}>
          <DesktopLayout />
        </div>
      ) : (
        <div className={styles.navbarWrapper}>
          <MobileLayout />
        </div>
      )}
    </>
  ) : (
    <></>
  );
};

export default Navigation;

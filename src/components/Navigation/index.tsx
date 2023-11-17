import React from 'react';
import styles from './styles.module.scss';

import useWindowDimensions from 'helpers/useWindowDimension';
import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';

const Navigation = (): JSX.Element => {
  const { width } = useWindowDimensions();

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

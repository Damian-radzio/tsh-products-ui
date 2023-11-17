import React from 'react';
import { Button } from '@mui/material';
import styles from './styles.module.scss';
type Props = {
  value: number;
  currentPage: number;
  onClick: () => void;
};

export const CustomPaginationNumber = ({ value, onClick, currentPage }: Props): JSX.Element => {
  return (
    <Button className={styles.button} onClick={onClick} disabled={value === currentPage}>
      {value}
    </Button>
  );
};

export const PaginationBreakPoint = (): JSX.Element => {
  return <Button className={styles.breakPoint}>...</Button>;
};

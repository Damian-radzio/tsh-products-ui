import React from 'react';
import { Button, Pagination } from '@mui/material';
import { ProductsList } from 'models/Product';
import { CustomPaginationNumber, PaginationBreakPoint } from './components/CustomPaginationNumber';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
type Props = {
  productsList: ProductsList;
  setCurrentPage: (page: number) => void;
};

const CustomPagination = ({ productsList, setCurrentPage }: Props): JSX.Element => {
  const { productsFilters } = useSelector((state: any) => state.productsFilters);
  const { page } = productsFilters;
  const totalPages = productsList.meta.totalPages;

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const MiddlePagination = () => (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationWrapper}>
        {page !== 1 && (
          <CustomPaginationNumber
            currentPage={page}
            onClick={() => setCurrentPage(page - 1)}
            value={page - 1}
          />
        )}
        <CustomPaginationNumber
          currentPage={page}
          onClick={() => setCurrentPage(page)}
          value={page}
        />
        <CustomPaginationNumber
          currentPage={page}
          onClick={() => setCurrentPage(page + 1)}
          value={page + 1}
        />
        {page === 1 && (
          <CustomPaginationNumber
            currentPage={page}
            onClick={() => setCurrentPage(page + 2)}
            value={page + 2}
          />
        )}

        <PaginationBreakPoint />

        <CustomPaginationNumber
          currentPage={page}
          onClick={() => setCurrentPage(totalPages - 2)}
          value={totalPages - 2}
        />
        <CustomPaginationNumber
          currentPage={page}
          onClick={() => setCurrentPage(totalPages - 1)}
          value={totalPages - 1}
        />
        <CustomPaginationNumber
          currentPage={page}
          onClick={() => setCurrentPage(totalPages)}
          value={totalPages}
        />
      </div>
    </div>
  );

  const EndPagination = () => (
    <div className={styles.paginationWrapper}>
      <CustomPaginationNumber
        currentPage={page}
        onClick={() => setCurrentPage(totalPages - 5)}
        value={totalPages - 5}
      />
      <CustomPaginationNumber
        currentPage={page}
        onClick={() => setCurrentPage(totalPages - 4)}
        value={totalPages - 4}
      />
      <CustomPaginationNumber
        currentPage={page}
        onClick={() => setCurrentPage(totalPages - 3)}
        value={totalPages - 3}
      />
      <CustomPaginationNumber
        currentPage={page}
        onClick={() => setCurrentPage(totalPages - 2)}
        value={totalPages - 2}
      />
      <CustomPaginationNumber
        currentPage={page}
        onClick={() => setCurrentPage(totalPages - 1)}
        value={totalPages - 1}
      />
      <CustomPaginationNumber
        currentPage={page}
        onClick={() => setCurrentPage(totalPages)}
        value={totalPages}
      />
    </div>
  );

  return (
    <div className={styles.pagination}>
      <div className={styles.firstButton}>
        <Button className={styles.button} onClick={() => setCurrentPage(1)} disabled={page === 1}>
          First
        </Button>
      </div>
      {totalPages <= 6 && (
        <Pagination
          count={totalPages}
          page={page}
          hidePrevButton
          hideNextButton
          onChange={handlePageChange}
          boundaryCount={0}
        />
      )}
      {totalPages > 6 && page <= totalPages - 5 && <MiddlePagination />}
      {totalPages > 6 && page > totalPages - 5 && <EndPagination />}
      <div className={styles.lastButton}>
        <Button
          className={styles.button}
          onClick={() => setCurrentPage(totalPages)}
          disabled={page === totalPages}>
          Last
        </Button>
      </div>
    </div>
  );
};

export default CustomPagination;

import React from 'react';
import { Pagination } from '@mui/material';
import { ProductsList } from 'models/Product';
import { CustomPaginationNumber, PaginationBreakPoint } from './components/CustomPaginationNumber';
import styles from './styles.module.scss';
type Props = {
  productsList: ProductsList;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const CustomPagination = ({ productsList, currentPage, setCurrentPage }: Props): JSX.Element => {
  const totalPages = productsList.meta.totalPages;

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const MiddlePagination = () => (
    <div className={styles.paginationWrapper}>
      {currentPage !== 1 && (
        <CustomPaginationNumber
          currentPage={currentPage}
          onClick={() => setCurrentPage(currentPage - 1)}
          value={currentPage - 1}
        />
      )}
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(currentPage)}
        value={currentPage}
      />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(currentPage + 1)}
        value={currentPage + 1}
      />
      {currentPage === 1 && (
        <CustomPaginationNumber
          currentPage={currentPage}
          onClick={() => setCurrentPage(currentPage + 2)}
          value={currentPage + 2}
        />
      )}

      <PaginationBreakPoint />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages - 2)}
        value={totalPages - 2}
      />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages - 1)}
        value={totalPages - 1}
      />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages)}
        value={totalPages}
      />
    </div>
  );

  const EndPagination = () => (
    <div className={styles.paginationWrapper}>
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages - 5)}
        value={totalPages - 5}
      />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages - 4)}
        value={totalPages - 4}
      />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages - 3)}
        value={totalPages - 3}
      />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages - 2)}
        value={totalPages - 2}
      />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages - 1)}
        value={totalPages - 1}
      />
      <CustomPaginationNumber
        currentPage={currentPage}
        onClick={() => setCurrentPage(totalPages)}
        value={totalPages}
      />
    </div>
  );

  return (
    <>
      {totalPages <= 6 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          hidePrevButton
          hideNextButton
          onChange={handlePageChange}
          boundaryCount={0}
        />
      )}
      {totalPages > 6 && currentPage <= totalPages - 5 && <MiddlePagination />}
      {totalPages > 6 && currentPage > totalPages - 5 && <EndPagination />}
    </>
  );
};

export default CustomPagination;

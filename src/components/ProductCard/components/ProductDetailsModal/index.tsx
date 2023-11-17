import React from 'react';
import styles from './styles.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { ProductsStatus } from 'models/Product';
import EmptyPageInfo from 'components/EmptyPageInfo';
import { colorMainText } from 'styles/colors';
import { Loader } from 'components/Loader';

type Props = {
  setIsModalOpen: (value: boolean) => void;
};

const ProductDetailsModal = ({ setIsModalOpen }: Props): JSX.Element => {
  const { productDetails, productDetailsStatus } = useSelector((state: any) => state.products);
  const { name, description, image } = productDetails;
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.productDetailsCard}>
        <Button onClick={() => setIsModalOpen(false)} className={styles.closeButton}>
          <CloseIcon sx={{ color: colorMainText, fontSize: 26 }} />
        </Button>
        {productDetailsStatus === ProductsStatus.pending && <Loader />}
        {productDetailsStatus === ProductsStatus.succeeded && (
          <div className={styles.contentWrapper}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
            <div className={styles.textWrapper}>
              <p className={styles.name}>{name}</p>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        )}
        {productDetailsStatus === ProductsStatus.failed && (
          <EmptyPageInfo moreInfoText={'Something went wrong :/'} />
        )}
      </div>
    </div>
  );
};

export default ProductDetailsModal;

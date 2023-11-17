import { Product } from 'models/Product';
import React from 'react';
import styles from './styles.module.scss';
import { Rating, Button } from '@mui/material';
import { colorOrange } from 'styles/colors';
import classnames from 'classnames';
type Props = {
  product: Product;
  setIsModalOpen: (value: boolean) => void;
  setOpenProductId: (value: string) => void;
};

const ProductCard = ({ product, setIsModalOpen, setOpenProductId }: Props): JSX.Element => {
  const { id, name, description, image, rating, active, promo } = product;

  const handleOpenModal = (id: string) => {
    setIsModalOpen(true);
    setOpenProductId(id);
  };
  return (
    <div className={classnames(styles.productCard)}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      {promo && <div className={styles.promo}>Promo</div>}
      <div className={styles.infoWrapper}>
        <div className={styles.textTop}>
          <p className={styles.productName}>{name}</p>
          <p className={styles.productDescription}>{description}</p>
        </div>
        <div className={styles.elementsBottom}>
          <Rating
            name="half-rating-read"
            value={rating}
            precision={0.5}
            readOnly
            sx={{ color: colorOrange, gap: '8px', fontSize: 16, flexWrap: 'wrap' }}
          />
          {active ? (
            <Button
              variant="contained"
              className={styles.showDetailsButton}
              onClick={() => handleOpenModal(id)}>
              Show details
            </Button>
          ) : (
            <Button variant="contained" className={styles.showDetailsButtonDisabled} disabled>
              Unavailable
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

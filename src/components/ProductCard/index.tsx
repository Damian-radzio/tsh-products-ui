import { Product } from 'models/Product';
import React from 'react';
import styles from './styles.module.scss';
import { Rating, Button } from '@mui/material';
import { colorOrange } from 'styles/colors';
import classnames from 'classnames';
type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props): JSX.Element => {
  return (
    <div className={classnames(styles.productCard)}>
      <div className={styles.image} style={{ backgroundImage: `url(${product.image})` }} />
      {product.promo ? <div className={styles.promo}>Promo</div> : null}
      <div className={styles.infoWrapper}>
        <div className={styles.textTop}>
          <p className={styles.productName}>{product.name}</p>
          <p className={styles.productDescription}>{product.description}</p>
        </div>
        <div className={styles.elementsBottom}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            sx={{ color: colorOrange, gap: '8px', fontSize: 16, flexWrap: 'wrap' }}
          />
          {product.active ? (
            <Button variant="contained" className={styles.showDetailsButton}>
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

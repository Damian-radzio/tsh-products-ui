import React, { useEffect, useState } from 'react';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { colorBlue, colorLightGray } from 'styles/colors';
import styles from './styles.module.scss';
import { fetchProducts } from 'features/products';
import { updateFilters } from 'features/productsFilters';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
type Props = {
  label: string;
};

const CheckboxComponent = ({ label }: Props): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { productsFilters } = useSelector((state: any) => state.productsFilters);
  const [checked, setChecked] = useState(false);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (label === 'Promo') {
      dispatch(updateFilters({ promo: checked }));
    }
    if (label === 'Active') {
      dispatch(updateFilters({ active: checked }));
    }
  }, [dispatch, checked, label]);

  useEffect(() => {
    dispatch(fetchProducts(productsFilters));
  }, [dispatch, productsFilters]);

  return (
    <FormControlLabel
      className={styles.checkboxWrapper}
      sx={{
        padding: '0',
        margin: '0',
        '& .MuiFormControlLabel-label': { fontSize: '14px' },
      }}
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{
            color: colorLightGray,
            padding: '0',
            marginRight: '8px',
            borderWidth: '2px',
            '&.Mui-checked': {
              color: colorBlue,
            },

            '& .MuiSvgIcon-root': { fontSize: 26 },
          }}
        />
      }
      label={label}
    />
  );
};

export default CheckboxComponent;
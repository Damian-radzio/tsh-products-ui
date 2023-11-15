import React from 'react';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { colorBlue, colorLightGray } from 'styles/colors';
import styles from './styles.module.scss';
type Props = {
  label: string;
};

const CheckboxComponent = ({ label }: Props): JSX.Element => {
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

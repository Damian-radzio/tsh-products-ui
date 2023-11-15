import React from 'react';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { colorBlue, colorLightGray } from 'styles/colors';

type Props = {
  label: string;
};

const CheckboxComponent = ({ label }: Props): JSX.Element => {
  return (
    <FormControlLabel
      sx={{
        padding: '0',
        margin: '0',
      }}
      control={
        <Checkbox
          sx={{
            color: colorLightGray,
            padding: '0 8px 0 0',
            '&.Mui-checked': {
              color: colorBlue,
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default CheckboxComponent;

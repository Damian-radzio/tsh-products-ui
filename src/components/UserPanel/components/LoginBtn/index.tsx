import React from 'react';
import { Button } from '@mui/material';
import styles from './styles.module.scss';

const LoginBtn = (): JSX.Element => {
  return (
    <Button className={styles.loginButton} variant="outlined">
      Log in
    </Button>
  );
};

export default LoginBtn;

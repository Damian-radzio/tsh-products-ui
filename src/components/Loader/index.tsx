import { CircularProgress } from '@mui/material';
import { colorLightBlue } from 'styles/colors';
import styles from './styles.module.scss';

export const Loader = () => (
  <div className={styles.loader}>
    <CircularProgress sx={{ color: colorLightBlue }} />
  </div>
);

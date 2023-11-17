import CheckboxComponent from 'components/Navigation/components/Checkbox';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import UserPanel from 'components/UserPanel';
import styles from './styles.module.scss';

const MobileLayout = (): JSX.Element => (
  <>
    <div className={styles.mobileNavRowWrapper}>
      <Logo />
      <UserPanel />
    </div>
    <SearchBar className={styles.searchBar} />
    <div className={styles.checkboxesWrapper}>
      <CheckboxComponent label="Active" />
      <CheckboxComponent label="Promo" />
    </div>
  </>
);

export default MobileLayout;

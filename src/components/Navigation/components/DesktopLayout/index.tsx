import CheckboxComponent from 'components/Navigation/components/Checkbox';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import UserPanel from 'components/UserPanel';
import styles from './styles.module.scss';

const DesktopLayout = (): JSX.Element => {
  return (
    <>
      <Logo />
      <div className={styles.desktopSearchAndCheckboxesWrapper}>
        <SearchBar className={styles.searchBar} />
        <div className={styles.checkboxesWrapper}>
          <CheckboxComponent label="Active" />
          <CheckboxComponent label="Promo" />
        </div>
      </div>
      <UserPanel />
    </>
  );
};

export default DesktopLayout;

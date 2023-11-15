import CheckboxComponent from 'components/Checkbox';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import UserPanel from 'components/UserPanel';
import styles from './styles.module.scss';
type Props = {
  handleSearch: (query: string) => void;
};

const DesktopLayout = ({ handleSearch }: Props): JSX.Element => (
  <>
    <Logo />
    <div className={styles.desktopSearchAndCheckboxesWrapper}>
      <SearchBar onSearch={handleSearch} className={styles.searchBar} />
      <div className={styles.checkboxesWrapper}>
        <CheckboxComponent label="Active" />
        <CheckboxComponent label="Promo" />
      </div>
    </div>
    <UserPanel />
  </>
);

export default DesktopLayout;

import CheckboxComponent from 'components/Checkbox';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import UserPanel from 'components/UserPanel';
import styles from './styles.module.scss';
type Props = {
  handleSearch: (query: string) => void;
};

const MobileLayout = ({ handleSearch }: Props): JSX.Element => (
  <>
    <div className={styles.mobileNavRowWrapper}>
      <Logo />
      <UserPanel />
    </div>
    <SearchBar onSearch={handleSearch} className={styles.searchBar} />
    <div className={styles.checkboxesWrapper}>
      <CheckboxComponent label="Active" />
      <CheckboxComponent label="Promo" />
    </div>
  </>
);

export default MobileLayout;

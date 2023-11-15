import React, { ChangeEvent, useState } from 'react';
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
  className: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (): void => onSearch(searchQuery);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') return handleSearch();
  };

  return (
    <Paper component="form" className={styles.root}>
      <InputBase
        className={styles.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        type="button"
        className={styles.iconButton}
        aria-label="Search"
        onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

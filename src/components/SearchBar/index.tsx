import React, { ChangeEvent, useEffect, useState } from 'react';
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss';
import { colorMainText } from 'styles/colors';
import { updateFilters } from 'features/productsFilters';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';

type Props = {
  className: string;
};

const SearchBar = ({ className }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSetSearchQuery();
    }
  };
  const handleSetSearchQuery = (): void => {
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    dispatch(updateFilters({ search: searchQuery, page: 1 }));
  }, [dispatch, searchQuery]);

  return (
    <Paper component="form" className={`${styles.root} ${className}`}>
      <InputBase
        className={styles.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <IconButton
        type="button"
        className={styles.iconButton}
        aria-label="Search"
        onClick={handleSetSearchQuery}
        sx={{ color: colorMainText }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

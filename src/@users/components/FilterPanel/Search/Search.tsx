import type {ChangeEvent, FC, KeyboardEvent} from 'react';

import styles from './Search.module.css';
import {useSearch} from './useSearch';

interface Props {
  searchValue: string;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const Search: FC<Props> = ({searchValue, onSearch, onKeyDown}) => {
  const placeholder = useSearch();

  return (
    <div className={styles.search}>
      <input
        type="search"
        value={searchValue}
        placeholder={placeholder}
        onChange={onSearch}
        onKeyDown={onKeyDown}
        autoFocus
      ></input>
    </div>
  );
};

import type {ChangeEvent, FC, KeyboardEvent} from 'react';

import {useSearch} from './useSearch';

interface Props {
  searchValue: string;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const Search: FC<Props> = ({searchValue, onSearch, onKeyDown}) => {
  const placeholder = useSearch();

  return (
    <div>
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

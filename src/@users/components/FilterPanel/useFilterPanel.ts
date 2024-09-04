import {categorySelector, usersSelector} from '@users/core/reducers/UsersReducer/selectors';
import {resetFilteredUsers, setCategory, setFilteredUsers} from '@users/core/reducers/UsersReducer/usersSlice';
import {filterByCategory} from '@users/services/helpers/filterByField';
import {Category} from '@users/types/types';
import {type ChangeEvent, KeyboardEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'src/app/store';

export const useFilterPanel = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelector);
  const selectedCategory = useAppSelector(categorySelector);

  const [searchValue, setSearchValue] = useState('');

  const handleChangeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value as Category;
    dispatch(setCategory(category));
    dispatch(resetFilteredUsers());
    setSearchValue('');
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

    const trimmedValue = searchValue.trim();
    if (trimmedValue) {
      const filteredUsers = filterByCategory(users, selectedCategory, searchValue);
      dispatch(setFilteredUsers(filteredUsers));
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
    const trimmedValue = searchValue.trim();

    if (trimmedValue) {
      const filteredUsers = filterByCategory(users, selectedCategory, searchValue);
      dispatch(setFilteredUsers(filteredUsers));
    }
    }
  }

  return {
    handleChangeCategory,
    handleSearch,
    handleKeyDown,
    selectedCategory,
    searchValue,
  };
};

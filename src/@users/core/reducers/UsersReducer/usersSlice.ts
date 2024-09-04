import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category, User} from '@users/types/types';

import {USERS_KEY} from './constants';
import {UsersState} from './types';

const initialState: UsersState = {
  users: [],
  filteredUsers: null,
  selectedCategory: Category.NAME,
};

const usersSlice = createSlice({
  name: USERS_KEY,
  initialState,
  reducers: {
    setUsers: (state: UsersState, action: PayloadAction<User[]>) => ({
      ...state,
      users: action.payload,
    }),
    setFilteredUsers: (state: UsersState, action: PayloadAction<User[]>) => ({
      ...state,
      filteredUsers: action.payload,
    }),
    resetFilteredUsers: (state: UsersState) => ({
      ...state,
      filteredUsers: initialState.filteredUsers,
    }),
    setCategory: (state: UsersState, action: PayloadAction<Category>) => ({
      ...state,
      selectedCategory: action.payload,
    }),
  },
});

export const {setFilteredUsers, setCategory, setUsers, resetFilteredUsers} = usersSlice.actions;

export default usersSlice.reducer;

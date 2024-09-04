import {createSelector} from 'reselect';
import {RootState} from 'src/app/store';

import {USERS_KEY} from './constants';
import {UsersState} from './types';

const getUsers = (state: RootState): UsersState => state[USERS_KEY];

export const usersSelector = createSelector(getUsers, (usersState) => usersState.users);

export const filteredUsersSelector = createSelector(getUsers, (usersState) => usersState.filteredUsers);

export const categorySelector = createSelector(getUsers, (usersState) => usersState.selectedCategory);

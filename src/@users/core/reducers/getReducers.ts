import {USERS_KEY} from './UsersReducer/constants';
import usersReducer from './UsersReducer/usersSlice';

const reducers = {
  [USERS_KEY]: usersReducer,
};

export const getReducers = () => ({...reducers});

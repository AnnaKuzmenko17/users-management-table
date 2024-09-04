import {filteredUsersSelector, usersSelector} from '@users/core/reducers/UsersReducer/selectors';
import {setUsers} from '@users/core/reducers/UsersReducer/usersSlice';
import {getUsers as getUsersData} from '@users/facade/getUsers/getUsers';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'src/app/store';

export const useUserTable = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsersData();
        const users = response.data;

        dispatch(setUsers(users));
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    fetchUsers();
  }, [dispatch]);

  const filteredUsers = useAppSelector(filteredUsersSelector);
  const users = useAppSelector(usersSelector);

  const selectedUsers = filteredUsers ? filteredUsers : users;

  return selectedUsers;
};

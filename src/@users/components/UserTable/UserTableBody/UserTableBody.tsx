import {User} from '@users/types/types';
import type {FC} from 'react';

import {UserTableRow} from '../UserTableRow/UserTableRow';

interface Props {
  users: User[];
}

export const UserTableBody: FC<Props> = ({users}) => {
  return (
    <tbody>
      {users.map((user) => (
        <UserTableRow
          key={user.id}
          name={user.name}
          userName={user.username}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </tbody>
  );
};

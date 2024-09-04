import {UserTableRow} from '../UserTableRow/UserTableRow';
import {useUsersTableBody} from './useUsersTableBody';

export const UserTableBody = () => {
  const users = useUsersTableBody();

  if (!users.length) {
    return <p>There is no such user. Please try again.</p>;
  }

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

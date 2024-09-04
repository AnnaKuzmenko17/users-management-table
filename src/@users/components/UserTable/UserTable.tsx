import {UserTableBody} from './UserTableBody/UserTableBody';
import {UserTableHead} from './UserTableHead/UserTableHead';

export const UserTable = () => {
  return (
    <table>
      <UserTableHead />
      <UserTableBody />
    </table>
  );
};

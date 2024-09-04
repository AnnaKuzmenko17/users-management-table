import styles from './UserTable.module.css';
import {UserTableBody} from './UserTableBody/UserTableBody';
import {UserTableHead} from './UserTableHead/UserTableHead';
import {useUserTable} from './useUserTable';

export const UserTable = () => {
  const users = useUserTable();
  if (!users.length) {
    return <p className={styles.fallback}>There is no such user. Please try again.</p>
  }

  return (
    <table className={styles.table}>
      <UserTableHead />
      <UserTableBody users={users} />
    </table>
  );
};

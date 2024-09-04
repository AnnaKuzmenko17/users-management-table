import type {FC} from 'react';

interface Props {
  name: string;
  userName: string;
  email: string;
  phone: string;
}

export const UserTableRow: FC<Props> = ({name, userName, email, phone}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

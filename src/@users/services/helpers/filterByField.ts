import {Category, User} from '@users/types/types';

export const filterByCategory = (
  users: User[],
  category: Category,
  searchValue: string,
) => {
  if (!searchValue) return users;

  return users.filter((item) =>
    item[category].toString().toLowerCase().includes(searchValue.toLowerCase()),
  );
};

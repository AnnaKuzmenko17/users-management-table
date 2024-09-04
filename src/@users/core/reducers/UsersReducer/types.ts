import {Category, User} from '@users/types/types';

export interface UsersState {
  users: User[] | [];
  filteredUsers: User[] | [] | null;
  selectedCategory: Category;
}

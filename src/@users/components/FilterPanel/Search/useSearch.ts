import {categorySelector} from '@users/core/reducers/UsersReducer/selectors';
import {useAppSelector} from 'src/app/store';

export const useSearch = () => {
  const category = useAppSelector(categorySelector);

  const placeholder = `Search by ${category}`;

  return placeholder;
};

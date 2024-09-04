import {Category} from '@users/types/types';

import {Option} from './types';

export const CATEGORY_OPTIONS: Option[] = [
  {
    label: 'Name',
    value: Category.NAME,
  },
  {
    label: 'UserName',
    value: Category.USER_NAME,
  },
  {
    label: 'Email',
    value: Category.EMAIL,
  },
  {
    label: 'Phone',
    value: Category.PHONE,
  },
];

import {Category} from '@users/types/types';
import type {ChangeEvent, FC} from 'react';

import {CATEGORY_OPTIONS} from './constants';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedCategory: Category;
}
export const Categories: FC<Props> = ({onChange, selectedCategory}) => {
  return (
    <div>
      {CATEGORY_OPTIONS.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedCategory === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

import {Category} from '@users/types/types';
import type {ChangeEvent, FC} from 'react';

import styles from './Categories.module.css';
import {CATEGORY_OPTIONS} from './constants';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedCategory: Category;
}
export const Categories: FC<Props> = ({onChange, selectedCategory}) => {
  return (
    <div className={styles.radioGroup}>
      {CATEGORY_OPTIONS.map((option) => (
        <div
          className={styles.radio}
          key={option.value}
        >
          <label className={styles.radioInput}>
            <input
              className={styles.radioButton}
              type="radio"
              value={option.value}
              checked={selectedCategory === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

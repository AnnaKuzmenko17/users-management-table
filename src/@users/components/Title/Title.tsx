import type {FC} from 'react';

import styles from './Title.module.css';

interface Props {
  text: string;
}

export const Title: FC<Props> = ({text}) => {
  return <h2 className={styles.title}>{text}</h2>;
};

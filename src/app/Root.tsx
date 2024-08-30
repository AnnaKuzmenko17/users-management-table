import type {ReactNode, FC} from 'react';
import {Provider} from 'react-redux';

import store from './store';

interface Props {
  children: ReactNode;
}

export const Root: FC<Props> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

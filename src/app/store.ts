import {getReducers} from '@users/core/reducers/getReducers';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: getReducers(),
});

type AppStore = typeof store;
type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore['getState']>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export default store;

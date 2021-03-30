import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catalogSlice from "../features/catalog/catalogSlice";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    catalog: catalogSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

/*catalog: {
  categories: {},
  items: {},
  selectedCategory: '',
    loaded: false
},
order: {}*/

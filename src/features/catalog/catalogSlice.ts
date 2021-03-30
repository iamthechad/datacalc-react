import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../../app/store";
import {CatalogData} from "../../data/catalog-data";

interface CatalogState {
  categories: { [key: string]: any };
  items: { [key: string]: any };
}

const initialState: CatalogState = {
  categories: CatalogData.CATEGORIES,
  items: CatalogData.ITEMS
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    loadCatalog: (state, action) => {
      console.log("loadCatalog", { state, payload: action.payload });
      state.categories = action.payload.categories;
      state.items = action.payload.items;
    },
    /*decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },*/
  },
});

export const { loadCatalog } = catalogSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

export const selectCatalogCategories = (state: RootState) => state.catalog.categories;
export const selectCatalogItems = (state: RootState) => state.catalog.items;

export default catalogSlice.reducer;

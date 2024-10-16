import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  rating: number;
  price: number;
  category: string;
}

const initialState: FilterState = {
  rating: 0,
  price: 100,
  category: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setRatingFilter: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setPriceFilter: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setRatingFilter, setPriceFilter, setCategoryFilter } =
  filterSlice.actions;
export default filterSlice.reducer;

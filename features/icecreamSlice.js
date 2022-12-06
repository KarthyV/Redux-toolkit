import redux from "@reduxjs/toolkit";
import { cakeSlice } from "../features/cakeSlice.js";

const { createSlice } = redux;
const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeSlice.actions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export { iceCreamSlice };

import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type initialStateType ={
    value:number
}

const initialValue:initialStateType={
    value:0
}

export const pageSlice= createSlice({
  name: "valid",
  initialState:initialValue,
  reducers: {
   pageState: (state,actions:PayloadAction<number>) => {
      return {
        ...state,
        value: actions.payload,
      };
    },
  },
});

export default pageSlice.reducer;
export const {pageState } = pageSlice.actions;
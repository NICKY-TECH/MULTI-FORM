import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  value:{
    title: string | undefined;
    amount: string | undefined;
  }[];
};

const initialValue: initialStateType = {
  value: [],
};

export const addOnSlice = createSlice({
  name: "valid",
  initialState: initialValue,
  reducers: {
    addOnState: (state, actions: PayloadAction<{
      title: string | undefined;
      amount: string | undefined;
    }[]>) => {
      return {
        ...state,
        value: [...actions.payload],
      };
    },
  },
});

export default addOnSlice.reducer;
export const { addOnState } = addOnSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  value:string [];
};

const initialValue: initialStateType = {
  value: ["Online Service"],
};

export const addOnSlice = createSlice({
  name: "valid",
  initialState: initialValue,
  reducers: {
    addOnState: (state, actions: PayloadAction<string[]>) => {
      return {
        ...state,
        value: actions.payload,
      };
    },
  },
});

export default addOnSlice.reducer;
export const { addOnState } = addOnSlice.actions;

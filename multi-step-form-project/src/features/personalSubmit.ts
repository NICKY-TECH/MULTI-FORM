import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type initialStateType ={
    value:boolean
}

const initialValue:initialStateType={
    value:false
}

export const submitFormSlice= createSlice({
  name: "valid",
  initialState:initialValue,
  reducers: {
    submitPersonalFormState: (state,action:PayloadAction<boolean>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default submitFormSlice.reducer;
export const {submitPersonalFormState } = submitFormSlice.actions;
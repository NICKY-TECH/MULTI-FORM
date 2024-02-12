import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type initialStateType ={
    value:{
        field:string,
        error:string
    }[]
}

const initialValue:initialStateType={
    value:[]
}

export const errorSlice= createSlice({
  name: "valid",
  initialState:initialValue,
  reducers: {
   errorState: (state,action:PayloadAction<[]>) => {
      return {
        ...state,
        value: [...action.payload],
      };
    },
  },
});

export default errorSlice.reducer;
export const {errorState } = errorSlice.actions;
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type initialStateType ={
    value:string
}

const initialValue:initialStateType={
    value:"Monthly"
}

export const planOptionSlice= createSlice({
  name: "valid",
  initialState:initialValue,
  reducers: {
   planOptionState: (state,actions:PayloadAction<string>) => {
      return {
        ...state,
        value: actions.payload
      };
    },
  },
});

export default planOptionSlice.reducer;
export const { planOptionState } = planOptionSlice.actions;
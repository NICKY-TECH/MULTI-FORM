import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type initialStateType ={
    value:string
}

const initialValue:initialStateType={
    value:"Arcade"
}

export const SelectedPlanSlice= createSlice({
  name: "valid",
  initialState:initialValue,
  reducers: {
    SelectedPlanState: (state,actions:PayloadAction<string>) => {
      return {
        ...state,
        value: actions.payload
      };
    },
  },
});

export default SelectedPlanSlice.reducer;
export const { SelectedPlanState } = SelectedPlanSlice.actions;
import { createSlice} from "@reduxjs/toolkit";
type initialStateType ={
    value:boolean
}

const initialValue:initialStateType={
    value:false
}

export const planSlice= createSlice({
  name: "valid",
  initialState:initialValue,
  reducers: {
   planState: (state) => {
      return {
        ...state,
        value: !state.value,
      };
    },
  },
});

export default planSlice.reducer;
export const {planState } = planSlice.actions;
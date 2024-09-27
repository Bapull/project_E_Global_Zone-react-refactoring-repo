import { createSlice } from "@reduxjs/toolkit";

export const managerSlice = createSlice({
  name:"manager",
  initialState:{
    currentStudent: "",
    data: "",
  },
  reducers: {
    setCurrentStudent: (state, action) => {
      state.currentStudent = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setCurrentStudent, setData } = managerSlice.actions

export const selectCurrentStudent = (state) => state.manager.currentStudent;
export const selectData = (state) => state.manager.data;

export default managerSlice.reducer;
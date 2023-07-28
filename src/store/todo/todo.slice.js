  import { createSlice } from "@reduxjs/toolkit";
import { addTodoThunk, fetchTodos} from "./todo.thunks";
const initialState = {
  todo: [],
  loading: false,
  error:null
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    // [fetchTodos.pending.type]: (state) => {
    //   state.loading = true;
    // },
    // [fetchTodos.fulfilled.type]: (state, action) => {
    //   state.loading = false;
    //   state.error = null;
    //   state.todo = action.payload;
    // },
    // [fetchTodos.rejected.type]: (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      
      // },
      [addTodoThunk.pending.type]: (state) => {
        state.loading = true;
      },
      [addTodoThunk.fulfilled.type]: (state, action) => {
        const todo = action.payload
        state.loading = false;
        state.error = null
        state.todo.push(...todo , todo)
      },
      [addTodoThunk.rejected.type]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
  },
});
export default todoSlice.reducer
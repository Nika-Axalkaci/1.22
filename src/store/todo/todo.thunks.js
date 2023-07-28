import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "/todos/GET",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/api/v1/todos", {
        method:'GET',
        headers: {
        
        "Content-Type": "application/json",
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const data = await res.json();
   
    if (data) return thunkAPI.fulfillWithValue(data.items);

  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});
export const addTodoThunk = createAsyncThunk("/todos/add",
async (payload,thunkAPI) =>{
  try {
    const res = await fetch("/api/v1/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
        },  
        body: JSON.stringify([{payload}]),
      })
       if (!res.ok) {
         const errorData = await res.json();
         return thunkAPI.rejectWithValue(errorData)
  }

  const data = await res.json();
  if (data) return thunkAPI.fulfillWithValue(data.items);
      return payload      
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
      
      

    }
  }
);

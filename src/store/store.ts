import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../store/TaskSlice";

// Configure the store with the taskReducer
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;

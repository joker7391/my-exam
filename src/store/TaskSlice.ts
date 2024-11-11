import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
}

interface TaskState {
  tasks: Task[];
  filter: "All" | "Pending" | "In Progress" | "Completed";
  searchQuery: string;
}

const initialState: TaskState = {
  tasks: [],
  filter: "All",
  searchQuery: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask(
      state,
      action: PayloadAction<{ id: number; updatedTask: Partial<Task> }>
    ) {
      const { id, updatedTask } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        Object.assign(task, updatedTask);
      }
    },
    setFilter(
      state,
      action: PayloadAction<"All" | "Pending" | "In Progress" | "Completed">
    ) {
      state.filter = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, deleteTask, editTask, setFilter, setSearchQuery } =
  taskSlice.actions;
export default taskSlice.reducer;

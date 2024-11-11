import TaskForm from "../src/component/TaskForm";
import TaskList from "../src/component/TaskList";
import Filter from "../src/component/Filter";
import SearchBar from "../src/component/SearchBar";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  setFilter,
  setSearchQuery,
} from "../src/store/TaskSlice";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks, filter, searchQuery } = useSelector(
    (state: any) => state.tasks
  );

  const filteredTasks = tasks.filter((task: any) => {
    const matchesStatus = filter === "All" || task.status === filter;
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-blue-400 min-h-screen flex flex-col justify-start items-center ">
      <div className="mt-10 p-5 bg-green-300 rounded-md w-3/4">
        <h1 className="text-xl font-bold py-4">To-Do List</h1>
        <TaskForm addTask={(task: Task) => dispatch(addTask(task))} />
        <SearchBar
          setSearchQuery={(query: string) => dispatch(setSearchQuery(query))}
        />
        <Filter
          setFilter={(
            status: "All" | "Pending" | "In Progress" | "Completed"
          ) => dispatch(setFilter(status))}
        />
        <TaskList
          tasks={filteredTasks}
          deleteTask={(id: number) => dispatch(deleteTask(id))}
          editTask={(id: number, updatedTask: Partial<Task>) =>
            dispatch(editTask({ id, updatedTask }))
          }
        />
      </div>
    </div>
  );
};

export default App;

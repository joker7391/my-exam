import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/TaskSlice";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
}

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [status, setStatus] = useState<"Pending" | "In Progress" | "Completed">(
    "Pending"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && dueDate) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        status,
      };
      dispatch(addTask(newTask));
      setTitle("");
      setDescription("");
      setDueDate("");
      setStatus("Pending");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="rounded-md p-3"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="rounded-md p-3"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="rounded-md p-3"
      />
      <select
        value={status}
        className="rounded-md p-3"
        onChange={(e) =>
          setStatus(e.target.value as "Pending" | "In Progress" | "Completed")
        }
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button
        className="bg-slate-500 text-white font-semibold p-2 mb-5 rounded-md"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

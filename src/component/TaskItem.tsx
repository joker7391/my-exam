import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
}

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  editTask: (id: number, updatedTask: Partial<Task>) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<Partial<Task>>({ ...task });

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedTask({
      ...editedTask,
      status: e.target.value as "Pending" | "In Progress" | "Completed",
    });
  };

  const handleSave = () => {
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask({ ...task });
    setIsEditing(false);
  };

  const isOverdue = new Date(task.dueDate) < new Date();

  return (
    <div
      className={`task-item ${isOverdue ? "overdue" : ""} flex flex-col gap-5`}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.title}
            className="rounded-md p-3"
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <textarea
            value={editedTask.description}
            className="rounded-md p-3"
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          />
          <input
            type="date"
            value={editedTask.dueDate}
            className="rounded-md p-3"
            onChange={(e) =>
              setEditedTask({ ...editedTask, dueDate: e.target.value })
            }
          />
          <select
            className="rounded-md p-3"
            value={editedTask.status}
            onChange={handleStatusChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            className="bg-slate-500 text-white font-semibold p-2 mb-5 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-slate-500 text-white font-semibold p-2 mb-5 rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button
            className="bg-slate-500 text-white font-semibold p-2 mb-5 rounded-md"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="bg-slate-500 text-white font-semibold p-2 mb-5 rounded-md"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;

import React from "react";
import TaskItem from "../component/TaskItem";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  editTask: (id: number, updatedTask: Partial<Task>) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

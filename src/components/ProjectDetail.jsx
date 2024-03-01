import { useState } from "react";

const ProjectDetail = ({ project, onDelete }) => {
  const [taskState, setTaskState] = useState([]);
  const cssClass = "text-3xl font-bold text-stone-600 mb-2";

  // TODO: hanleAddTask > Task.jsx

  const handleChange = (event) => {
    setTaskState(event.target.value);
  };

  return (
    <div>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className={cssClass}>{project.title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => onDelete(project.id)}
          >
            Delete
          </button>
        </div>
        <p>{project.dueDate}</p>
        <p>{project.description}</p>
      </header>
      <h1 className={cssClass}>Task</h1>
      <input type="text" onChange={handleChange} />
      <button>Add Task</button>
    </div>
  );
};

export default ProjectDetail;

import { useRef } from "react";

const ProjectDetail = ({
  selectProject,
  onDeleteProject,
  onAddNewTask,
  onDeleteTask,
}) => {
  const newTask = useRef([]);

  const handleAddNewTask = () => {
    onAddNewTask(selectProject.title, newTask.current.value);
    newTask.current.value = "";
  };

  const formaDate = (dueDate) => {
    const month = new Date(dueDate).toLocaleString("en-us", { month: "short" });
    const day = new Date(dueDate).toLocaleString("en-us", { day: "2-digit" });
    const year = new Date(dueDate).getFullYear();
    return <p>{`${month} ${day}, ${year}`}</p>;
  };

  return (
    <section className="w-full ml-8 mr-32">
      <div className="mx-auto my-20">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{selectProject.title}</h1>
          <button
            className="font-semibold"
            onClick={() => onDeleteProject(selectProject.title)}
          >
            Delete
          </button>
        </div>
        <h1 className="text-lg font-bold">
          {formaDate(selectProject.dueDate)}
        </h1>
        <p>{selectProject.description}</p>
      </div>
      <div className="mx-auto my-16">
        <h1 className="mt-20 mb-6 text-4xl font-bold">Tasks</h1>
        <input type="text" ref={newTask} className="p-2 font-semibold" />
        <button className="ml-6 font-semibold" onClick={handleAddNewTask}>
          Add Task
        </button>
        <div className="my-8 bg-stone-300 rounded-md">
          {selectProject.task.map((task) => (
            <div className="flex justify-between">
              <p key={`task-${task}`} className="ml-6 pt-4 pb-2 font-semibold">
                {task}
              </p>
              <button
                className="pr-4 font-semibold"
                onClick={() => onDeleteTask(task)}
              >
                Clear
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;

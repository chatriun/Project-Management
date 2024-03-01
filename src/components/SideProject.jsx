import Button from "./Button";

const SideProject = ({
  onStartAdd,
  projects,
  onSelectProject,
  selectedProject,
}) => {
  let cssClass =
    "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
  if (projects.id === selectedProject) {
    cssClass += " bg-stone-800 text-stone-200";
  } else {
    cssClass += " text-stone-400";
  }
  return (
    <aside>
      <h1>PROJECTS</h1>
      <Button onClick={onStartAdd} className={cssClass}>
        + add project
      </Button>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {projects.map((project) => (
          <li key={project.id} className="flex justify-between my-4">
            <button
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
              onClick={() => onSelectProject(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideProject;

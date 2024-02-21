const YourProject = ({ projectForm, onAddProject, onSelectProject }) => {
  return (
    <section className="bg-slate-950 w-80 mt-10 inset-y-0 left-0 rounded-r-lg text-left">
      <div className="ml-6">
        <h2 className="text-white mt-20 pb-4 uppercase font-bold">
          YOUR PROJECT
        </h2>
        <button
          className="my-6 px-4 py-2 bg-stone-600 rounded-lg text-slate-200 font-normal"
          onClick={onAddProject}
        >
          + Add Project
        </button>
      </div>
      <div className="ml-6">
        {projectForm &&
          projectForm.map((project) => (
            <li
              className="list-none text-slate-200 font-normal py-1"
              key={project.description}
            >
              <button
                className="bg-stone-700 min-w-64 p-2 text-left"
                onClick={() => onSelectProject(project.title)}
              >
                {project.title}
              </button>
            </li>
          ))}
      </div>
    </section>
  );
};

export default YourProject;

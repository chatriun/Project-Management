const YourProject = ({ projectForm, onAddProject }) => {
  return (
    <section className="bg-slate-950 w-80 mt-10 inset-y-0 left-0 rounded-r-lg text-left">
      <div>
        <h2 className="text-white ml-6 mt-20 pb-4 uppercase font-bold">
          YOUR PROJECT
        </h2>
        <button
          className="ml-6 mt-2 px-4 py-2 bg-stone-600 rounded-lg text-slate-200 font-normal"
          onClick={onAddProject}
        >
          + Add Project
        </button>
      </div>
      {projectForm &&
        projectForm.map((project) => (
          <li className="text-slate-200 font-normal" key={project.description}>
            {project.title}
          </li>
        ))}
    </section>
  );
};

export default YourProject;

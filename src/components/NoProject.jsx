const NoProject = ({ onAddProject }) => {
  return (
    <section className="mx-auto my-48 text-center">
      <img
        src="logo.png"
        alt="project-management-logo"
        className="w-16 h-16 m-auto"
      />
      <h2 className="uppercase font-bold">No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button
        className="mt-2 px-4 py-2 bg-gray-950 rounded-lg text-slate-200 font-normal"
        onClick={onAddProject}
      >
        Create new project
      </button>
    </section>
  );
};

export default NoProject;

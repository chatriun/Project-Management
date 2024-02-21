const ProjectDetail = ({ selectProject }) => {
  return (
    <section>
      <div className="mx-4 my-10">
        <button className="ml-80 text-right">delete</button>
        <h1 className="text-4xl font-bold">{selectProject[0].title}</h1>
        <h1 className="text-lg font-bold">{selectProject[0].dueDate}</h1>
        <p>{selectProject[0].description}</p>
      </div>
      <div className="mx-4 my-10">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <input type="text" />
        <button>Add Task</button>
        {/* {taskContent} */}
      </div>
    </section>
  );
};

export default ProjectDetail;

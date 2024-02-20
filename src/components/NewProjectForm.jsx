import { useState, useRef } from "react";

const NewProjectForm = () => {
  const [projectForm, setProjectForm] = useState([]);
  const newTitle = useRef();
  const newDescription = useRef();
  const newDueDate = useRef();

  const handleClick = () => {
    setProjectForm((prevProject) => {
      const updateProject = [
        ...prevProject,
        {
          title: newTitle.current.value,
          description: newDescription.current.value,
          dueDate: newDueDate.current.value,
        },
      ];
      return updateProject;
    });
  };

  console.log(projectForm);

  return (
    <section className="mx-auto my-48">
      <div>
        <button className="ml-6 mt-2 px-4 py-2 bg-stone-600 rounded-lg text-slate-200 font-normal">
          Cancel
        </button>
        <button
          className="ml-6 mt-2 px-4 py-2 bg-stone-600 rounded-lg text-slate-200 font-normal"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
      <div>
        <label htmlFor="title">title</label>
        <input
          ref={newTitle}
          type="text"
          id="title"
          // value={projectForm.title}
        />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input
          ref={newDescription}
          type="text"
          id="description"
          // value={projectForm.description}
        />
      </div>
      <div>
        <label htmlFor="due-date">due date</label>
        <input
          ref={newDueDate}
          type="date"
          id="due-date"
          // value={projectForm.dueDate}
        />
      </div>
    </section>
  );
};

export default NewProjectForm;

import { useRef } from "react";

const NewProjectForm = ({ onAddProject, onCancelProject }) => {
  const newTitle = useRef();
  const newDescription = useRef();
  const newDueDate = useRef();

  const handleAdd = () => {
    onAddProject({
      title: newTitle.current.value,
      description: newDescription.current.value,
      dueDate: newDueDate.current.value,
      task: [],
    });
    newTitle.current.value = "";
    newDescription.current.value = "";
    newDueDate.current.value = "";
  };

  const handleCancel = () => {
    onCancelProject();
  };

  return (
    <section className="mx-auto my-48">
      <div>
        <button
          className="ml-6 mt-2 px-4 py-2 bg-stone-600 rounded-lg text-slate-200 font-normal"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="ml-6 mt-2 px-4 py-2 bg-stone-600 rounded-lg text-slate-200 font-normal"
          onClick={handleAdd}
        >
          Save
        </button>
      </div>
      <div>
        <label htmlFor="title">title</label>
        <input ref={newTitle} type="text" id="title" />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input ref={newDescription} type="text" id="description" />
      </div>
      <div>
        <label htmlFor="due-date">due date</label>
        <input ref={newDueDate} type="date" id="due-date" />
      </div>
    </section>
  );
};

export default NewProjectForm;

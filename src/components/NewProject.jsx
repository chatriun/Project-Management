import { useRef } from "react";
import Form from "./Form";
import Modal from "./Modal";

const NewProject = ({ onAddProjectState, onClose }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleAdd = () => {
    const newTitle = title.current.value;
    const newDescription = description.current.value;
    const newDueDate = dueDate.current.value;

    if (
      newTitle.trim() === "" ||
      newDescription.trim() === "" ||
      newDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProjectState({
      id: Math.random(),
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
    });
  };

  return (
    <div>
      <Modal ref={modal} buttonText="close">
        <h3>please enter title/description/due date</h3>
      </Modal>
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleAdd}
        >
          Save
        </button>
      </menu>
      <div className="w-[35rem] mt-16">
        <Form ref={title} label="title" type="text" />
        <Form ref={description} label="description" type="text" textarea />
        <Form ref={dueDate} label="dueDate" type="date" />
      </div>
    </div>
  );
};

export default NewProject;

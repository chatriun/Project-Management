import { useState } from "react";
import NewProjectForm from "./components/NewProjectForm";
import ProjectDetail from "./components/ProjectDetail";
import YourProject from "./components/YourProjects";
import NoProject from "./components/NoProject";

const App = () => {
  const [projectForm, setProjectForm] = useState([]);
  const [pageProject, setPageProject] = useState("");
  const handleAddProject = () => {
    console.log("handleAddProject was click");
    setPageProject("NewProjectForm");
  };

  const handleForm = (newProject) => {
    setProjectForm((preProject) => {
      const updateProject = [...preProject, newProject];
      return updateProject;
    });
  };
  console.log(projectForm);
  return (
    <>
      <YourProject onAddProject={handleAddProject} projectForm={projectForm} />
      {pageProject === "NewProjectForm" ? (
        <NewProjectForm onAddProject={handleForm} />
      ) : (
        <NoProject />
      )}
    </>
  );
};

export default App;

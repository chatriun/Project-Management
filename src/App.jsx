import { useState } from "react";
import NewProjectForm from "./components/NewProjectForm";
import ProjectDetail from "./components/ProjectDetail";
import YourProject from "./components/YourProjects";
import NoProject from "./components/NoProject";

const App = () => {
  const [projectForm, setProjectForm] = useState([]);
  const [pageProject, setPageProject] = useState("NoProject");
  const handleAddProject = () => {
    setPageProject("NewProjectForm");
  };
  const handleCancelProject = () => {
    setPageProject("NoProject");
  };

  const handleForm = (newProject) => {
    setProjectForm((preProject) => {
      const updateProject = [...preProject, newProject];
      return updateProject;
    });
    setPageProject(newProject.title);
  };

  const handleSelectProject = (title) => {
    setPageProject(title);
  };

  let pageContent;
  const selectProject = projectForm.filter(
    (project) => project.title === pageProject
  );
  console.log(selectProject);
  if (pageProject === "NewProjectForm") {
    pageContent = (
      <NewProjectForm
        onAddProject={handleForm}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (pageProject === "NoProject") {
    pageContent = <NoProject onAddProject={handleAddProject} />;
  } else {
    pageContent = <ProjectDetail selectProject={selectProject} />;
  }

  // console.log(pageProject);
  // console.log(projectForm);
  return (
    <>
      <YourProject
        projectForm={projectForm}
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
      />
      {pageContent}
    </>
  );
};

export default App;

import { useState, useRef } from "react";
import NewProjectForm from "./components/NewProjectForm";
import ProjectDetail from "./components/ProjectDetail";
import YourProject from "./components/YourProjects";
import NoProject from "./components/NoProject";

const INITIAL_PROJECT_FORM = [
  {
    title: "",
    description: "",
    dueDate: "",
    task: [],
  },
];

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

  const handleDeleteProject = (removeProject) => {
    setProjectForm(
      projectForm.filter((project) => project.title !== removeProject)
    );
    setPageProject("NoProject");
  };

  const handleDeleteTask = (removeTask) => {
    const updateTask = projectForm.map((project) => {
      return {
        ...project,
        task: project.task.filter((task) => task !== removeTask),
      };
    });
    setProjectForm(updateTask);
  };

  let pageContent;
  const selectProject = projectForm.find(
    (project) => project.title === pageProject
  );

  const handleAddNewTask = (projectTitle, newTask) => {
    const projectIndex = projectForm.findIndex(
      (project) => project.title === projectTitle
    );
    const updateProject = [...projectForm];
    updateProject[projectIndex].task.push(newTask);
    setProjectForm(updateProject);
  };

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
    pageContent = (
      <ProjectDetail
        selectProject={selectProject}
        onDeleteProject={handleDeleteProject}
        onAddNewTask={handleAddNewTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

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

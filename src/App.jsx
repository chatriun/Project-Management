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

const page = {
  noProject: "noProject",
  newProjectForm: "newProjectForm",
  projectDetail: "projectDetail",
};

const App = () => {
  const [projectForm, setProjectForm] = useState([]);
  const [pageProject, setPageProject] = useState(page.noProject);
  let selectProject;

  const handleAddProject = () => {
    setPageProject(page.newProjectForm);
  };
  const handleCancelProject = () => {
    setPageProject(page.noProject);
  };

  console.log(projectForm.length);

  const handleForm = (newProject) => {
    setProjectForm((preProject) => {
      const updatePage = [...preProject, newProject];
      return updatePage;
    });
    if (projectForm.length > 1) {
      selectProject = projectForm.find(
        (project) => project.description === description
      );
    }
    setPageProject(page.projectDetail);

    // setPageProject((prePageProject) => {
    //   const updatePage = {
    //     ...prePageProject,
    //     newPageTitle: newProject.title,
    //   };
    //   return updatePage;
    // });
  };
  console.log(pageProject);
  console.log(projectForm);

  const handleSelectProject = (description) => {
    // selectProject = projectForm.find(
    //   (project) => project.description === description
    // );
    if (projectForm.length > 1) {
      selectProject = projectForm.find(
        (project) => project.description === description
      );
    } else if (projectForm.length === 1) {
      selectProject = projectForm[0];
    }
    setPageProject(page.projectDetail);
  };

  const handleDeleteProject = (removeProject) => {
    setProjectForm(
      projectForm.filter((project) => project.title !== removeProject)
    );
    setPageProject(page.noProject);
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

  let pageContent = null;
  // const selectProject = projectForm.find(
  //   (project) => project.title === pageProject
  // );

  const handleAddNewTask = (projectTitle, newTask) => {
    const projectIndex = projectForm.findIndex(
      (project) => project.title === projectTitle
    );
    const updateProject = [...projectForm];
    updateProject[projectIndex].task.push(newTask);
    setProjectForm(updateProject);
  };

  const getSelectProject = (description) => {
    if (projectForm.length === 1) {
      selectProject = projectForm[0];
    } else if (projectForm.length > 1) {
      selectProject = projectForm.find(
        (project) => project.description === description
      );
    }
  };

  if (pageProject === page.newProjectForm) {
    pageContent = (
      <NewProjectForm
        onAddProject={handleForm}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (pageProject === page.noProject) {
    pageContent = <NoProject onAddProject={handleAddProject} />;
  } else if (pageProject === page.projectDetail) {
    pageContent = (
      <ProjectDetail
        selectProject={selectProject}
        onDeleteProject={handleDeleteProject}
        onAddNewTask={handleAddNewTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  console.log(selectProject);
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

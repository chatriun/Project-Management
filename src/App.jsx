import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProject from "./components/NoProject";
import SideProject from "./components/SideProject";
import ProjectDetail from "./components/ProjectDetail";

const page = {
  noSelected: "noSelected",
  newProject: "newProject",
  projectDetail: "projectDetail",
};

const App = () => {
  const [pageState, setPageState] = useState({
    selectedProject: null,
    selectedPage: page.noSelected,
    projects: [],
  });

  const handleSelectedProject = (projectId) => {
    setPageState((prevPageState) => {
      const selectedId = pageState.projects.find(
        (project) => project.id === projectId
      );
      return {
        ...prevPageState,
        selectedProject: selectedId,
        selectedPage: page.projectDetail,
      };
    });
  };

  const handleDeleteProject = (projectId) => {
    const updateProjects = pageState.projects.filter(
      (project) => project.id !== projectId
    );
    setPageState((prevPageState) => {
      console.log(pageState.projects.length);

      const projectIndex = pageState.projects.findIndex(
        (project) => project.id === projectId
      );

      const updateSelectedProject =
        pageState.projects.length > 1
          ? pageState.projects[projectIndex - 1]
          : null;
      const updateSelectedPage =
        pageState.projects.length === 1 ? page.noSelected : page.projectDetail;

      return {
        ...prevPageState,
        selectedProject: updateSelectedProject,
        selectedPage: updateSelectedPage,
        projects: updateProjects,
      };
    });
  };

  const handleCancelAddProject = () => {
    setPageState((prevPageState) => {
      return {
        ...prevPageState,
        selectedPage: page.noSelected,
      };
    });
  };

  const handleStartAddProject = () => {
    setPageState((prevPageState) => {
      return {
        ...prevPageState,
        selectedPage: page.newProject,
      };
    });
  };

  const handleAddProjectState = (newProject) => {
    setPageState((prevPageState) => {
      return {
        ...prevPageState,
        selectedProject: newProject,
        selectedPage: page.projectDetail,
        projects: [...prevPageState.projects, newProject],
      };
    });
  };

  let pageContent;
  if (pageState.selectedPage === page.noSelected) {
    pageContent = <NoProject onStartAdd={handleStartAddProject} />;
  } else if (pageState.selectedPage === page.newProject) {
    pageContent = (
      <NewProject
        onAddProjectState={handleAddProjectState}
        onClose={handleCancelAddProject}
      />
    );
  } else if (pageState.selectedPage === page.projectDetail) {
    pageContent = (
      <ProjectDetail
        onDelete={handleDeleteProject}
        project={pageState.selectedProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideProject
        onStartAdd={handleStartAddProject}
        projects={pageState.projects}
        onSelectProject={handleSelectedProject}
        selectedProject={pageState.selectedProject}
      />
      {pageContent}
    </main>
  );
};

export default App;

import logo from "../assets/no-projects.png";
import Button from "./Button";

const NoProject = ({ onStartAdd }) => {
  return (
    <section>
      <img className="w-20 h-20" src={logo} alt="logo-no-selected" />
      <h1>No project selected</h1>
      <Button onClick={onStartAdd}> add project</Button>
    </section>
  );
};

export default NoProject;

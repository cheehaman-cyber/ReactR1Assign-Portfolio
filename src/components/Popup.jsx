import "./Popup.css";
import linkIcon from "../assets/link-icon.svg";

function Popup(props) {
  return (
    <div className="popup">
      <img src={props.screenshot} alt={props.name} className="img" />
      <h2 className="projectTitle">{props.name}</h2>
      <p className="projectTxt"><b>Tech used:</b> {props.tech}</p>
      <p className="projectTxt"><b>What it does:</b> {props.whatItDoes}</p>
      <p className="projectTxt"><b>What I learned:</b> {props.learned}</p>
      <p className="projectTxt"><b>My role:</b> {props.role}</p>
      <p className="projectTxt"><b>Challenges:</b> {props.challenges}</p>
      <a href={props.github} target="_blank" className="projectLink">
        <img src={linkIcon} alt="" className="icon" />
        GitHub repo
      </a>
    </div>
  );
}

export default Popup;
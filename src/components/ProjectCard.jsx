// ProjectCard.jsx: ONE project card (same idea as the teacher's Profile.jsx).
// App.jsx imports this file and uses <ProjectCard ... /> 3 times with different props.

import "./ProjectCard.css";                             // import 1: the card's own styles (like: import "./Profile.css")
import linkIcon from "../assets/link-icon.svg";         // import 2: a picture (like: import profilePic from "../assets/profile.png")
                                                        //   ../ = go UP one folder (out of components, into src), then into assets

function ProjectCard(props) {                           // props = a box with all the values sent from App.jsx
  return (
    <div className="projectCard">                       {/* like <div className="profile">: the card box */}
      <img src={props.screenshot} alt={props.name} className="img" />  {/* like className="img"; screenshot comes from a PROP */}
      <h2 className="projectTitle">{props.name}</h2>    {/* like className="profileTitle" */}
      <p className="projectTxt"><b>Tech used:</b> {props.tech}</p>             {/* like className="profileTxt" */}
      <p className="projectTxt"><b>What it does:</b> {props.whatItDoes}</p>    {/* same class = same style */}
      <p className="projectTxt"><b>What I learned:</b> {props.learned}</p>
      <p className="projectTxt"><b>My role:</b> {props.role}</p>
      <p className="projectTxt"><b>Challenges:</b> {props.challenges}</p>
      <a href={props.github} target="_blank" className="projectLink">  {/* link; opens in a new tab */}
        <img src={linkIcon} alt="" className="icon" />  {/* the imported icon (SAME on every card) */}
        GitHub repo
      </a>
    </div>
  );
}

export default ProjectCard;                             // send it out so App.jsx can import it (like export default Profile)

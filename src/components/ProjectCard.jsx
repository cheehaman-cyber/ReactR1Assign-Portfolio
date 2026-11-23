// ProjectCard.jsx: ONE project card (same idea as the teacher's Profile.jsx).
// App.jsx imports this file and uses <ProjectCard ... /> 3 times with different props.

function ProjectCard(props) {                           // props = a box with all the values sent from App.jsx
  return (
    <div className="card">                              {/* the card box */}
      <img src={props.screenshot} alt={props.name} />   {/* like the teacher's <img src={profilePic} /> */}
      <h2>{props.name}</h2>                             {/* like <h2>Michelle</h2>, but the name comes from a prop */}
      <p><b>Tech used:</b> {props.tech}</p>             {/* the tech list */}
      <p><b>What it does:</b> {props.whatItDoes}</p>    {/* write-up 1 */}
      <p><b>What I learned:</b> {props.learned}</p>     {/* write-up 2 */}
      <p><b>My role:</b> {props.role}</p>               {/* write-up 3 */}
      <p><b>Challenges:</b> {props.challenges}</p>      {/* write-up 4 */}
      <a href={props.github} target="_blank">GitHub repo</a>  {/* link; opens in a new tab */}
    </div>
  );
}

export default ProjectCard;                             // send it out so App.jsx can import it (like export default Profile)

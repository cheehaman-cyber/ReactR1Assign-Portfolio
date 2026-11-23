// ProjectCard.jsx
// ------------------------------------------------------------
// This file makes ONE reusable component: a card that shows one project.
// Think of it as a cookie cutter. App.jsx uses it 3 times,
// each time with different "props" (the information inside the card).
// ------------------------------------------------------------

// Bring in the CSS that styles the card.
// Vite adds these styles to the page for us.
import "./ProjectCard.css";

// A component is a function. Its name MUST start with a capital letter.
//
// React puts all the props into ONE object and gives it to the function.
// The { name, screenshot, ... } part is "destructuring": it unpacks that
// object, so we can write `name` instead of `props.name`.
// (Same idea as: const { name } = person; from your JS lessons.)
function ProjectCard({
  name,        // text: the project's title
  screenshot,  // text: path to the picture, e.g. "/screenshots/daily-card.svg"
  github,      // text: link to the GitHub repo
  tech,        // array: list of technologies, e.g. ["HTML", "CSS"]
  whatItDoes,  // text: what the project does
  learned,     // text: what you learned
  role,        // text: your role (only for group projects, can be left out)
  challenges,  // text: a challenge you solved
}) {
  // A component returns JSX: it looks like HTML, but it lives inside JavaScript.
  // Two differences from normal HTML:
  //   - use className instead of class
  //   - { curly braces } mean "run JavaScript here", e.g. {name} shows the prop
  return (
    // <article> is a normal HTML tag for a stand-alone piece of content.
    <article className="card">
      {/* The screenshot. alt text is read aloud for people who can't see it. */}
      <img
        className="card-image"
        src={screenshot}
        alt={`Screenshot of ${name}`}
      />

      <div className="card-body">
        {/* The project name, taken from the "name" prop */}
        <h2 className="card-title">{name}</h2>

        {/* Tech used.
            tech is an array, so we use .map() to turn EACH item into an <li>.
            React needs a unique "key" on each item in a list so it can keep track
            of them. The tech name itself is unique, so we use that. */}
        <ul className="tech-list">
          {tech.map((item) => (
            <li key={item} className="tech-tag">
              {item}
            </li>
          ))}
        </ul>

        {/* The short write-up. Each part comes from its own prop. */}
        <h3>What it does</h3>
        <p>{whatItDoes}</p>

        <h3>What I learned</h3>
        <p>{learned}</p>

        {/* Only show "My role" if a role prop was given.
            `role && (...)` means: IF role has a value, THEN show this part.
            If role is missing (undefined), React shows nothing. */}
        {role && (
          <>
            {/* <> </> is a "fragment": a wrapper that adds no extra HTML tag */}
            <h3>My role</h3>
            <p>{role}</p>
          </>
        )}

        <h3>Challenges I solved</h3>
        <p>{challenges}</p>

        {/* Link to GitHub.
            target="_blank" opens it in a new tab.
            rel="noreferrer" is a safety habit when opening new tabs. */}
        <a
          className="card-link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </article>
  );
}

// Send the component out of this file, so App.jsx can import and use it.
export default ProjectCard;

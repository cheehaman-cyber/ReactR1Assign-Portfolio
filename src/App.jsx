// App.jsx
// ------------------------------------------------------------
// The main component: the whole page.
// main.jsx imports App and shows it on the screen.
// ------------------------------------------------------------

// Bring in our own ProjectCard component from the components folder.
// (ProjectCard.jsx ends with "export default ProjectCard", which is why this works.)
import ProjectCard from "./components/ProjectCard";
import "./App.css";

function App() {
  return (
    // <> </> is a fragment: it groups everything without adding an extra tag.
    <>
      {/* ---------- Top of the page ---------- */}
      <header className="hero">
        <p className="hero-hello">Hi, I'm</p>
        <h1 className="hero-name">Chee Chee Tay</h1>
        <p className="hero-text">
          Front-end student learning HTML, CSS, JavaScript and React.
          Here are some projects I have built.
        </p>
      </header>

      {/* ---------- The projects ---------- */}
      <main>
        <h2 className="section-title">My projects</h2>

        {/* The grid places the cards side by side (see App.css) */}
        <section className="projects-grid">
          {/* Card 1.
              Each name="value" below is a PROP.
              - Text props use quotes:            name="Mummy's Daily Card"
              - Other values use curly braces:    tech={["React", "Vite"]}
              Inside ProjectCard, these arrive as name, tech, and so on. */}
          <ProjectCard
            name="HeadPhones"
            screenshot="/screenshots/headphones.svg"
            github="https://github.com/Sharanyadussa-glitch/HeadPhones-Project"
            tech={["HTML", "CSS", "Responsive design", "Git", "GitHub"]}
            whatItDoes="A website for a headphones brand with four pages: home, product gallery, about us and contact us."
            learned="How to build one website together as a team, using Git branches, pull requests and merging."
            role="I styled the About Us page, the footer and the button hover effects. Sharanya, Carolina and Edin built the other parts."
            challenges="Merging everyone's branches without breaking each other's code, and keeping the colours and hover effects the same on every page."
          />

          {/* Card 2: same component, different props = a different card */}
          <ProjectCard
            name="Bank Account (ATM)"
            screenshot="/screenshots/atm.svg"
            github="https://github.com/cheehaman-cyber/LessonJS05Assign-Objects-and-Scope"
            tech={["JavaScript", "HTML"]}
            whatItDoes="A simple bank account program: check the balance, deposit and withdraw money."
            learned="How to group data and functions together in a JavaScript object, and how scope decides where a variable can be used."
            // No role prop here: this was a solo project,
            // so the "My role" part is not shown on this card.
            challenges="Stopping a withdrawal when there is not enough money in the account."
          />

          {/* Card 3 */}
          <ProjectCard
            name="Moonlight Animation"
            screenshot="/screenshots/moonlight.svg"
            github="https://github.com/cheehaman-cyber/Lesson09Assign-AnimationMoonlight"
            tech={["HTML", "CSS", "Animation"]}
            whatItDoes="A night-sky scene where the moon and stars move using only CSS."
            learned="How to use @keyframes, animation timing and transforms to make things move without JavaScript."
            challenges="Getting the timing right so the animation loops smoothly."
          />
        </section>
      </main>

      {/* ---------- Bottom of the page ---------- */}
      <footer className="footer">
        <a href="https://github.com/cheehaman-cyber" target="_blank" rel="noreferrer">
          My GitHub
        </a>
      </footer>
    </>
  );
}

// Send App out so main.jsx can import it.
export default App;

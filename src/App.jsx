// App.jsx: my portfolio page.
// main.jsx imports App from this file and shows it on the screen.

//  PART 1: IMPORTS (bring things into this file)
import ProjectCard from "./components/ProjectCard";     // get my card component from its own file (must match the folder name exactly)
import headphonesPic from "./assets/headphones.png";    // real screenshot of project 1 (same way as teacher's profilePic)
import atmPic from "./assets/atm.svg";                  // project 2: still a placeholder (replace with atm.png later)
import moonlightPic from "./assets/moonlight.png";      // real screenshot of project 3

//  PART 2: THE COMPONENT
// ProjectCard now lives in components/ProjectCard.jsx. App uses it 3 times below.
function App() {                                        // the whole page
  return (
    <>                                                  {/* fragment: wraps everything */}
      <h1>My Portfolio</h1>                             {/* page heading */}

      <div className="projects">                        {/* box that holds the 3 cards */}

        <ProjectCard                                    // CARD 1: fill the props
          name="HeadPhones"
          screenshot={headphonesPic}                    // {curly braces} because it's an imported picture
          github="https://github.com/Sharanyadussa-glitch/HeadPhones-Project"
          tech="HTML, CSS, Git"
          whatItDoes="A website for a headphones brand with four pages."
          learned="How to work in a team with Git branches."
          role="I styled the About Us page and the footer."
          challenges="Merging everyone's code without breaking it."
        />

        <ProjectCard                                    // CARD 2: same component, different props
          name="Bank Account (ATM)"
          screenshot={atmPic}
          github="https://github.com/cheehaman-cyber/LessonJS05Assign-Objects-and-Scope"
          tech="JavaScript, HTML"
          whatItDoes="A bank account: check balance, deposit and withdraw money."
          learned="How to use JavaScript objects."
          role="Solo project."
          challenges="Stopping a withdrawal when there is not enough money."
        />

        <ProjectCard                                    // CARD 3
          name="Moonlight Animation"
          screenshot={moonlightPic}
          github="https://github.com/cheehaman-cyber/Lesson09Assign-AnimationMoonlight"
          tech="HTML, CSS"
          whatItDoes="An animated invitation page for a Moonlight Party."
          learned="How to use @keyframes to make animations."
          role="Solo project."
          challenges="Making the animation loop smoothly."
        />

      </div>
    </>
  );
}

// ===== PART 3: EXPORT =====
export default App;                                     // send App out so main.jsx can import and show it

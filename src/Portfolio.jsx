import ProjectCard from "./components/ProjectCard";     // get my card component
import headphonesPic from "./assets/headphones.png";    // screenshot of project 1
import atmPic from "./assets/atm.svg";                  // project 2: placeholder (replace with atm.png later)
import moonlightPic from "./assets/moonlight.png";      // screenshot of project 3

function Portfolio() {                                  // the Portfolio PAGE
    return (
        <>                                                 
            <h1>My Projects</h1>                              
            <div className="projects">
                <ProjectCard                                    // CARD 1
                    name="HeadPhones"
                    screenshot={headphonesPic}                    // {curly braces} because it's an imported picture
                    github="https://github.com/Sharanyadussa-glitch/HeadPhones-Project"
                    tech="HTML, CSS, Git"
                    whatItDoes="A website for a headphones brand with four pages."
                    learned="How to work in a team with Git branches."
                    role="I styled the About Us page and the footer."
                    challenges="Merging everyone's code without breaking it."
                />

                <ProjectCard                                    // CARD 2
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
                        

export default Portfolio;                         
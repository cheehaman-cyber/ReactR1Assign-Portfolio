import { useState } from "react";     // useState = lets the page REMEMBER a value
import Popup from "./components/Popup";
import ProjectCard from "./components/ProjectCard";     // get my card component
import headphonesPic from "./assets/headphones.png";    // screenshot of project 1
import atmPic from "./assets/atm.svg";                  // project 2: placeholder (replace with atm.png later)
import moonlightPic from "./assets/moonlight.png";      // screenshot of project 3

// ===== MY PROJECTS: an ARRAY (list) of OBJECTS =====
// [ ] = array (a list), { } = object (one project with its details)
const projects = [
    {
        name: "HeadPhones",
        screenshot: headphonesPic,
        github: "https://github.com/Sharanyadussa-glitch/HeadPhones-Project",
        tech: "HTML, CSS, Git",
        whatItDoes: "A website for a headphones brand with four pages.",
        learned: "How to work in a team with Git branches.",
        role: "I styled the About Us page and the footer.",
        challenges: "Merging everyone's code without breaking it.",
    },
    {
        name: "Bank Account (ATM)",
        screenshot: atmPic,
        github: "https://github.com/cheehaman-cyber/LessonJS05Assign-Objects-and-Scope",
        tech: "JavaScript, HTML",
        whatItDoes: "A bank account: check balance, deposit and withdraw money.",
        learned: "How to use JavaScript objects.",
        role: "Solo project.",
        challenges: "Stopping a withdrawal when there is not enough money.",
    },
    {
        name: "Moonlight Animation",
        screenshot: moonlightPic,
        github: "https://github.com/cheehaman-cyber/Lesson09Assign-AnimationMoonlight",
        tech: "HTML, CSS",
        whatItDoes: "An animated invitation page for a Moonlight Party.",
        learned: "How to use @keyframes to make animations.",
        role: "Solo project.",
        challenges: "Making the animation loop smoothly.",
    },
];

function Portfolio() {                                  // the Portfolio PAGE
    const [selectedProject, setSelectedProject] = useState(null);  // memory: which project is open in the popup
    const [search, setSearch] = useState("");           // memory: what the user typed. starts as "" = empty

    const searchText = search.toLowerCase();            // make the search small letters, so "CSS" = "css"

    // filter = keep only the projects that pass the test below
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchText) // test 1: does the NAME contain the search text?
        ||                                              // || = OR
        project.tech.split(", ").some((tech) =>         // test 2: split "HTML, CSS" into ["HTML", "CSS"]...
            tech.toLowerCase().includes(searchText)     // ...does SOME (at least one) tech match?
        )
    );

        return (
            <>
            <h1>My Projects</h1>
            {selectedProject && (
                <Popup
                    name={selectedProject.name}
                    screenshot={selectedProject.screenshot}
                    github={selectedProject.github}
                    tech={selectedProject.tech}
                    whatItDoes={selectedProject.whatItDoes}
                    learned={selectedProject.learned}
                    role={selectedProject.role}
                    challenges={selectedProject.challenges}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            <input
                type="text"
                className="searchBar"
                placeholder="Search by name or tech, e.g. CSS"
                value={search}                                  // the box always shows what's in memory
                onChange={(event) => setSearch(event.target.value)}  // each letter typed: save the new text
            />
            {filteredProjects.length === 0 && <p className="noResults">No projects found.</p>}  {/* if the list is empty: show a message */}

            <div className="projects">
                {filteredProjects.map((project) => (    // for EACH project that passed the filter...
                    <ProjectCard                        // ...make one card
                        key={project.name}              // key = a unique name React needs for lists
                        name={project.name}
                        onSelect={setSelectedProject}
                        screenshot={project.screenshot}
                        github={project.github}
                        tech={project.tech}
                        whatItDoes={project.whatItDoes}
                        learned={project.learned}
                        role={project.role}
                        challenges={project.challenges}
                    />
                ))}
            </div>
            </>
        );
}

export default Portfolio;                         // send Portfolio out so App.jsx can use it
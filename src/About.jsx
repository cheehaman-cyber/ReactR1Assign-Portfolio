//App.jsx and your new About.jsx are both in src, so they "see" the folders the same way.

import AboutMe from "./components/AboutMe";   // bring in my AboutMe component (photo + text)

function About() {                             // the About PAGE
    return(
        <>                                     {/* wrapper */}
            <AboutMe />                        {/* show my AboutMe component here */}
        </>
    )
}

export default About;                          // send About out so App.jsx can use it later
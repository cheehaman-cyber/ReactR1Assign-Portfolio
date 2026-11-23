// AboutMe.jsx: who I am (built the same way as the teacher's Profile.jsx).
// App.jsx imports this file and shows <AboutMe /> above my projects.

import "./AboutMe.css";                                 // import 1: this component's own styles (like: import "./Profile.css")
import profilePic from "../assets/profile.jpg";         // import 2: my photo with the red roses (like: import profilePic from "../assets/profile.png")

function AboutMe() {                                    // a component = a function, capital letter
  return (
    <div className="about">                             {/* like <div className="profile"> */}
      <img src={profilePic} alt="Profile picture" className="aboutImg" />  {/* like className="img" */}
      <h2 className="aboutTitle">Hi, I'm Chee Chee</h2> {/* like <h2 className="profileTitle">Michelle</h2> */}
      <p className="aboutTxt">                          {/* like <p className="profileTxt"> */}
        I'm a front-end developer student learning HTML, CSS, JavaScript and React.
        I'm a Malaysian mum living in Sweden, and I speak English and Mandarin.
      </p>
      <p className="aboutTxt">
        Before coding, I made videos and Instagram Reels, so I care about clear design
        and pages that are easy to use. I like building things that help busy people.
      </p>
    </div>
  );
}

export default AboutMe;                                 // send it out so App.jsx can import it

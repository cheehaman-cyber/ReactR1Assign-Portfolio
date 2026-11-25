// App.jsx: my portfolio page.
// main.jsx imports App from this file and shows it on the screen.

//  PART 1: IMPORTS (bring things into this file)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";              // bring in my Home page (src/Home.jsx)
import About from "./About";            // bring in my About page (src/About.jsx)
import Portfolio from "./Portfolio";    // bring in my Portfolio page (src/Portfolio.jsx)

//  PART 2: THE COMPONENT
// ProjectCard now lives in components/ProjectCard.jsx. App uses it 3 times below.
function App() {                                          // the whole site
  // BrowserRouter = turns the router on
  // Routes        = box for all the page rules
  // Route         = one rule: address (path) → page (element)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

// ===== PART 3: EXPORT =====
export default App;                                     // send App out so main.jsx can import and show it

import { Link } from "react-router-dom";     // the Link tool, for menu links

function Navbar() {                           // the menu at the top of every page
  // nav  = HTML tag for a menu
  // Link = like <a>, but switches page without reloading
  // to   = like href: must match a path in App.jsx
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
        </nav>
    );
}

export default Navbar;                        // send Navbar out so App.jsx can use it
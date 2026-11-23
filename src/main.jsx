// ============================================================
// main.jsx: the STARTING POINT of the React app.
// index.html loads this file. This file puts App into the page.
// You almost never need to change anything here.
// ============================================================

// ===== PART 1: IMPORTS (get the tools we need) =====
import { StrictMode } from 'react'              // StrictMode = a helper that warns you about mistakes (only while coding)
import { createRoot } from 'react-dom/client'   // createRoot = the tool that connects React to the web page
import './index.css'                            // load the styles for the WHOLE site
import App from './App.jsx'                     // get the App component (works because App.jsx says "export default App")
// App.jsx: Vite's STARTER page, with comments to help you read it.
// your page gets onto the screen through a chain of 3 files, and App.jsx is the last link.
//  index.html  ──►  main.jsx  ──►  App.jsx
// (empty box)     (the starter)    (your page)

// ===== PART 2: PUT APP ON THE SCREEN =====
createRoot(                                     // 1. make a React "root" (the place React controls)...
  document.getElementById('root')               // 2. ...inside the empty <div id="root"> in index.html
).render(                                       // 3. then DRAW something inside it:
  <StrictMode>                                  {/* a wrapper that checks for mistakes (shows nothing on the page) */}
    <App />                                     {/* 4. draw your App component = your whole page */}
  </StrictMode>,                                // end of the wrapper
)                                               // end of render( )

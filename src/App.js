import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>
          MySite
        </Link>

        <div
          style={styles.dropdown}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button style={styles.dropbtn}>
            Menu ▼
          </button>
          {dropdownOpen && (
            <div style={styles.dropdownContent}>
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                About
              </NavLink>
              <NavLink
                to="/page1"
                style={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                Page 1
              </NavLink>
              <NavLink
                to="/page2"
                style={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                Page 2
              </NavLink>
            </div>
          )}
        </div>
      </nav>

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to the Homepage!</h2>;
}

function About() {
  return (
    <>
      <h2>About Us</h2>
      <p>This is the about page with some info about the website.</p>
    </>
  );
}

function Page1() {
  return <h2>This is Page 1</h2>;
}

function Page2() {
  return <h2>This is Page 2</h2>;
}

function NoMatch() {
  return <h2>404 Page Not Found</h2>;
}

const styles = {
  nav: {
    display: "flex",
    backgroundColor: "#333",
    padding: "10px 20px",
    alignItems: "center",
  },
  logo: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    marginRight: "auto",
  },
  dropdown: {
    position: "relative",
    display: "inline-block",
  },
  dropbtn: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  },
  dropdownContent: {
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
  },
  link: {
    color: "black",
    padding: "12px 16px",
    textDecoration: "none",
    display: "block",
  },
  activeLink: {
    backgroundColor: "#ddd",
    color: "black",
    padding: "12px 16px",
    textDecoration: "none",
    display: "block",
    fontWeight: "bold",
  },
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Training } from "./pages/training";
import { Donate } from "./pages/donate";
import { NotFound } from "./pages/notFound";
import { ContactUs } from "./pages/contactus";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>Jesus Training</Link>
        <div
          style={styles.dropdown}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button style={styles.dropbtn}>Menu ▼</button>
          {dropdownOpen && (
            <div style={styles.dropdownContent}>
              <Link to="/about" style={styles.link}>About</Link>
              <Link to="/training" style={styles.link}>Training</Link>
              <Link to="/donate" style={styles.link}>Donate</Link>
              <Link to="/contactus" style={styles.link}>Contact Us</Link>
            </div>
          )}
        </div>
      </nav>

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
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
};

export default App;

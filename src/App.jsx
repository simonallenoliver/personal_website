import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import styles from "./styles/App.module.css";

function App() {
  // theme can be light or dark
  const [theme, setTheme] = useState("light");

  const toggleTheme= () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    // theme wraps entire app
    <div className={theme === "light" ? styles.lightApp : styles.darkApp}>
      <Navbar theme = {theme} onToggleTheme={toggleTheme} />

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
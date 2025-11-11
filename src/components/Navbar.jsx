import { Link, NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar({theme, onToggleTheme}){
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Link to ="/">Simon.dev</Link>
            </div>

            <nav className={styles.navLinks}>
                <NavLink to="/" className={({isActive}) => isActive ? styles.activeLink : ""}>
                    Home
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? styles.activeLink : ""}>
                    Projects
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? styles.activeLink : ""}>
                    About
                </NavLink>
                <NavLink to ="/blog" className={({isActive}) => isActive ? styles.activeLink : ""}>
                    Blog
                </NavLink>
            </nav>

            <button className={styles.themeToggle} onClick={onToggleTheme}>
                {theme === "light" ? "Hacker Mode" : "Cute Mode"}
            </button>
        </header>
    ); 
}

export default Navbar;
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
    HiMoon,
    HiSun,
    HiBars3,
    HiXMark
} from "react-icons/hi2";

import useTheme from "../../hooks/useTheme";

function Navbar() {

    const { theme, toggleTheme } = useTheme();

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

            <div className="container navbar-container">

                {/* Logo */}

                <Link
                    to="home"
                    smooth
                    duration={500}
                    className="logo"
                    onClick={closeMenu}
                >
                    {"<V/>"}
                </Link>

                {/* Navigation */}

                <nav className={menuOpen ? "nav active" : "nav"}>

                    <ul className="nav-links">

                        <li>
                            <Link
                                to="home"
                                smooth
                                spy
                                duration={500}
                                offset={-80}
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="about"
                                smooth
                                spy
                                duration={500}
                                offset={-80}
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="skills"
                                smooth
                                spy
                                duration={500}
                                offset={-80}
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Skills
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="experience"
                                smooth
                                spy
                                duration={500}
                                offset={-80}
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Experience
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="projects"
                                smooth
                                spy
                                duration={500}
                                offset={-80}
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="certificates"
                                smooth
                                spy
                                duration={500}
                                offset={-80}
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Certificates
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="contact"
                                smooth
                                spy
                                duration={500}
                                offset={-80}
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>

                </nav>

                {/* Right Actions */}

                <div className="nav-actions">

                    <Link
                        to="contact"
                        smooth
                        duration={500}
                        offset={-80}
                        className="hire-btn"
                        onClick={closeMenu}
                    >
                        Hire Me
                    </Link>

                    <button
                        className="theme-btn"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <HiSun /> : <HiMoon />}
                    </button>

                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <HiXMark /> : <HiBars3 />}
                    </button>

                </div>

            </div>

        </header>

    );

}

export default Navbar;
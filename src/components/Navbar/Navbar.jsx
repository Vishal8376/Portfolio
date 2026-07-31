import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

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
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }

        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <motion.header
            className={`navbar ${scrolled ? "scrolled" : ""}`}
            initial={{ y: -80 }}
            animate={{
                y: 0,
                scale: scrolled ? 0.97 : 1,
            }}
            transition={{
                duration: 0.35,
                ease: "easeOut",
            }}
        >

            <div className="navbar-container">

                {/* Logo */}
                <Link
                    to="home"
                    smooth
                    spy
                    duration={500}
                    offset={-80}
                    className="logo"
                    onClick={closeMenu}
                >
                    {"<V/>"}
                </Link>
                {/* Navigation */}

                <nav className={`nav ${menuOpen ? "active" : ""}`}>

                    <ul className="nav-links">

                        {[
                            "home",
                            "about",
                            "skills",
                            "experience",
                            "projects",
                            "certificates",
                            "contact",
                        ].map((item) => (

                            <li key={item}>

                                <Link
                                    to={item}
                                    smooth
                                    spy
                                    duration={500}
                                    offset={-80}
                                    activeClass="active"
                                    onClick={closeMenu}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>

                            </li>

                        ))}

                    </ul>

                </nav>

                {/* Right Side */}

                <div className="nav-actions">

                    <Link
                        to="contact-form"
                        smooth
                        spy
                        duration={500}
                        offset={-100}
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
                        {theme === "dark"
                            ? <HiSun size={20} />
                            : <HiMoon size={20} />}
                    </button>

                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen
                            ? <HiXMark size={28} />
                            : <HiBars3 size={28} />}
                    </button>

                </div>

            </div>

        </motion.header>

    );

}

export default Navbar;
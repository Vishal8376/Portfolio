import "./Footer.css";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaCode
} from "react-icons/fa";

import Reveal from "../Animation/Reveal";

function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="container">

                <Reveal>

                    <div className="footer-content">

                        <h2 className="footer-logo">

                            Vishal

                        </h2>

                        <p className="footer-description">

                            Passionate Full Stack Developer focused on building scalable,
                            user-friendly applications with Java, Spring Boot and React.

                        </p>

                        <div className="footer-socials">

                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >

                                <FaGithub />

                            </a>

                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >

                                <FaLinkedin />

                            </a>

                            <a
                                href="https://leetcode.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LeetCode"
                            >

                                <FaCode />

                            </a>

                            <a
                                href="mailto:yourmail@gmail.com"
                                aria-label="Email"
                            >

                                <FaEnvelope />

                            </a>

                        </div>

                    </div>

                    <div className="footer-bottom">

                        © {year} Vishal. All Rights Reserved.

                    </div>

                </Reveal>

            </div>

        </footer>

    );

}

export default Footer;
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
                                href="https://github.com/Vishal8376"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >

                                <FaGithub />

                            </a>

                            <a
                                href="https://linkedin.com/in/vishal-s/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >

                                <FaLinkedin />

                            </a>

                            <a
                                href="https://leetcode.com/Vishal_3012"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LeetCode"
                            >

                                <FaCode />

                            </a>

                            <a
                                href="mailto:vishal.decruze@gmail.com"
                                aria-label="Email"
                            >

                                <FaEnvelope />

                            </a>

                        </div>

                    </div>

                    <div className="footer-bottom">

                        © {year} Vishal S. All Rights Reserved.

                    </div>

                </Reveal>

            </div>

        </footer>

    );

}

export default Footer;
import "./Hero.css";
import { motion } from "framer-motion";
import resume from "../../assets/resume.pdf";
import profile from "../../assets/images/profile.png"; // Change to your image

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">

                {/* Left Content */}

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="hero-badge">
                        🚀 Open to Software Engineering Opportunities
                    </div>

                    <h1 className="hero-title">
                        Vishal S
                    </h1>

                    <h2 className="hero-subtitle">
                        Building scalable software, one project at a time.
                    </h2>

                    <p className="hero-description">
                        Computer Science student focused on backend engineering, full-stack
                        development, and AI-powered applications. I enjoy transforming ideas into
                        performant, production-ready software using Java, Spring Boot, React,
                        Firebase, and modern cloud technologies.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="primary-btn"
                        >
                            View Projects
                        </a>

                        <a
                            href={resume}
                            download="Vishal_S_Resume.pdf"
                            className="secondary-btn"
                        >
                            <FaDownload />
                            <span>  Download Resume</span>
                        </a>

                    </div>

                    <div className="hero-socials">

                        <a
                            href="https://github.com/Vishal8376"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/vishals-/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={22} />
                        </a>

                        <a
                            href="https://leetcode.com/u/Vishal_3012/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LeetCode"
                        >
                            <SiLeetcode size={22} />
                        </a>

                        <a
                            href="mailto:vishal.decruze@gmail.com"
                            aria-label="Email"
                        >
                            <FaEnvelope size={22} />
                        </a>

                    </div>

                </motion.div>

                {/* Right Image */}

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                >
                    <img
                        src={profile}
                        alt="Vishal"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
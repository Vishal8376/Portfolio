import "./About.css";
import Reveal from "../Animation/Reveal";

import {
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaLaptopCode,
    FaAward,
    FaRocket,
} from "react-icons/fa";

function About() {
    return (
        <section id="about" className="about">
            <div className="container">

                <Reveal>
                    <h2 className="section-title">
                        Building Software
                    </h2>

                    <p className="section-subtitle">
                        I enjoy designing scalable backend systems, building modern
                        web applications, and solving real-world problems through
                        clean architecture and intuitive user experiences.
                    </p>
                </Reveal>

                <div className="about-grid">

                    {/* Main Card */}

                    <Reveal>
                        <div className="about-text card">

                            <h3>Hi, I'm Vishal 👋</h3>

                            <p>
                                I'm a Computer Science Engineering student with a
                                passion for backend engineering and full-stack
                                development. I enjoy transforming ideas into
                                reliable software using Java, Spring Boot, React,
                                MySQL, and modern development tools.
                            </p>

                            <ul>

                                <li>
                                    <FaCode />
                                    Backend Development with Java & Spring Boot
                                </li>

                                <li>
                                    <FaLaptopCode />
                                    Modern Frontend Development with React
                                </li>

                                <li>
                                    <FaRocket />
                                    Building AI-Powered Full-Stack Applications
                                </li>

                            </ul>

                        </div>
                    </Reveal>

                    {/* Right Cards */}

                    <Reveal delay={0.2}>
                        <div className="about-cards">

                            <div className="info-card card">

                                <FaAward />

                                <h4>Oracle Certified</h4>

                                <p>
                                    Java SE 21
                                    <br />
                                    Professional Developer
                                </p>

                            </div>

                            <div className="info-card card">

                                <FaGraduationCap />

                                <h4>Education</h4>

                                <p>
                                    B.E Computer Science Engineering
                                    <br />
                                    Saveetha Engineering College
                                </p>

                            </div>

                            <div className="info-card card">

                                <FaBriefcase />

                                <h4>Experience</h4>

                                <p>
                                    Web Development Intern
                                    <br />
                                    Velandev Solutions
                                </p>

                            </div>

                            <div className="info-card card">

                                <FaRocket />

                                <h4>Focus Areas</h4>

                                <p>
                                    Backend Engineering
                                    <br />
                                    AI • Full Stack • REST APIs
                                </p>

                            </div>

                        </div>
                    </Reveal>

                </div>

            </div>
        </section>
    );
}

export default About;
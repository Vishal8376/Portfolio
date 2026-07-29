import "./About.css";
import Reveal from "../Animation/Reveal";

import {
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaLaptopCode
} from "react-icons/fa";

function About() {

    return (

        <section
            id="about"
            className="about"
        >

            <div className="container">

                <Reveal>

                    <h2 className="section-title">
                        About Me
                    </h2>

                    <p className="section-subtitle">
                        I'm a Computer Science Engineering student passionate
                        about backend development, scalable systems, and building
                        beautiful web applications.
                    </p>

                </Reveal>

                <div className="about-grid">

                    <Reveal>

                        <div className="about-text card">

                            <h3>Hello 👋</h3>

                            <p>
                                I enjoy solving real-world problems using
                                Java, Spring Boot and React.

                                My focus is writing clean, maintainable code
                                while continuously learning new technologies.
                            </p>

                            <ul>

                                <li>
                                    <FaCode />
                                    Java & Spring Boot
                                </li>

                                <li>
                                    <FaLaptopCode />
                                    React Developer
                                </li>

                            </ul>

                        </div>

                    </Reveal>

                    <Reveal delay={0.2}>

                        <div className="about-cards">

                            <div className="info-card card">

                                <FaGraduationCap />

                                <h4>Education</h4>

                                <p>
                                    B.E Computer Science
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

                        </div>

                    </Reveal>

                </div>

            </div>

        </section>

    );

}

export default About;
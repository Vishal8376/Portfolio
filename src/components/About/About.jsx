import "./About.css";
import Reveal from "../Animation/Reveal";
import {
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <Reveal>
          <h2 className="section-title">Engineering</h2>

          <p className="section-subtitle">
            Passionate about building scalable backend systems, modern web
            applications, and AI-powered solutions with clean architecture and
            performance in mind.
          </p>
        </Reveal>

        <div className="about-grid">

          {/* Left */}

          <div className="about-left">

            <Reveal>
              <div className="card about-card">

                <h3>What I Build</h3>

                <p>
                  I build scalable backend systems, full-stack web applications,
                  and AI-powered software focused on performance, maintainability,
                  and real-world impact.
                </p>

              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card about-card">

                <h3>What I Focus On</h3>

                <ul className="focus-list">
                  <li>Backend Engineering with Java & Spring Boot</li>
                  <li>Modern Web Applications using React</li>
                  <li>REST APIs & Database Design</li>
                  <li>AI-powered Full Stack Applications</li>
                  <li>Clean Architecture & Scalable Systems</li>
                </ul>

              </div>
            </Reveal>

          </div>

          {/* Right */}

          <div className="about-right">

            <Reveal delay={0.15}>
              <div className="info-card card">

                <FaAward />

                <h4>Certification</h4>

                <p>
                  Oracle Certified
                  <br />
                  Java SE 21 Professional
                </p>

              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="info-card card">

                <FaGraduationCap />

                <h4>Education</h4>

                <p>
                  B.E Computer Science Engineering
                  <br />
                  Saveetha Engineering College
                </p>

              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="info-card card">

                <FaBriefcase />

                <h4>Experience</h4>

                <p>
                  Web Development Intern
                  <br />
                  Velandev Solutions
                </p>

              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="info-card card">

                <FaRocket />

                <h4>Current Focus</h4>

                <p>
                  Backend Engineering
                  <br />
                  AI • Full Stack • System Design
                </p>

              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
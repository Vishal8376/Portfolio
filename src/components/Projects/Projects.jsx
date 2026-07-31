import "./Projects.css";

import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import FeaturedProjectCard from "../FeaturedProjectCard/FeaturedProjectCard";
import Reveal from "../Animation/Reveal";

function Projects() {
    const featuredProjects = projects.filter(
        (project) => project.featured
    );

    const otherProjects = projects.filter(
        (project) => !project.featured
    );

    return (
        <section className="projects" id="projects">
            <div className="container">
                <Reveal>
                    <h2 className="section-title">
                        Featured Projects
                    </h2>

                    <p className="section-subtitle">
                        A collection of my best work showcasing full-stack development,
                        AI integration, backend engineering, and modern web applications.
                    </p>
                </Reveal>

                {/* Featured Projects */}
                <div className="featured-projects">
                    {featuredProjects.map((project, index) => (
                        <Reveal
                            key={project.id}
                            delay={index * 0.15}
                            direction="up"
                        >
                            <FeaturedProjectCard {...project} />
                        </Reveal>
                    ))}
                </div>

                {/* Other Projects */}
                <Reveal delay={0.2}>
                    <div className="other-projects-header">
                        <h3>Other Projects</h3>
                        <p>
                            Additional projects exploring web development,
                            UI design, accessibility, and software engineering.
                        </p>
                    </div>
                </Reveal>

                <div className="projects-grid">
                    {otherProjects.map((project, index) => (
                        <Reveal
                            key={project.id}
                            delay={index * 0.1}
                            direction={index % 2 === 0 ? "left" : "right"}
                        >
                            <ProjectCard {...project} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
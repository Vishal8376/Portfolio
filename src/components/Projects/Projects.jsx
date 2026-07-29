import "./Projects.css";

import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import Reveal from "../Animation/Reveal";

function Projects() {

    return (

        <section
            className="projects"
            id="projects"
        >

            <div className="container">

                <Reveal>

                    <h2 className="section-title">

                        Projects

                    </h2>

                    <p className="section-subtitle">

                        A selection of projects that demonstrate my problem-solving skills and full-stack development experience.

                    </p>

                </Reveal>

                <div className="projects-grid">

                    {

                        projects.map((project, index) => (

                            <Reveal
                                key={project.id}
                                delay={index * 0.15}
                                direction={index % 2 === 0 ? "left" : "right"}
                            >

                                <ProjectCard
                                    {...project}
                                />

                            </Reveal>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Projects;
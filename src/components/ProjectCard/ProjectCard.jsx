import "./ProjectCard.css";
import BaseCard from "../Card/BaseCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({

    icon: Icon,
    title,
    description,
    technologies,
    github,
    demo

}) {

    return (

        <BaseCard className="project-card">

            <div className="project-banner">

                <Icon className="project-icon" />

            </div>

            <div className="project-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="tech-stack">

                    {

                        technologies.map((tech) => (

                            <span key={tech}>

                                {tech}

                            </span>

                        ))

                    }

                </div>

            </div>

            <div className="project-buttons">

                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    aria-label={`View ${title} source code on GitHub`}
                >

                    <FaGithub />

                    <span>GitHub</span>

                </a>

                {

                    demo && (

                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn outline-btn"
                            aria-label={`Open live demo of ${title}`}
                        >

                            <FaExternalLinkAlt />

                            <span>Live Demo</span>

                        </a>

                    )

                }

            </div>

        </BaseCard>

    );

}

export default ProjectCard;
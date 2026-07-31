import "./ProjectCard.css";

import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

function ProjectCard({
    icon: Icon,
    title,
    description,
    technologies,
    github,
    demo,
}) {
    return (
        <article className="project-card">

            <div className="project-banner">
                {Icon && <Icon className="project-icon" />}
            </div>

            <div className="project-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="tech-stack">
                    {(technologies ?? []).map((tech) => (
                        <span key={tech}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="project-buttons">

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            aria-label={`Open live demo of ${title}`}
                        >
                            <FaExternalLinkAlt />
                            <span>Live Demo</span>
                        </a>
                    )}

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        aria-label={`View ${title} source code on GitHub`}
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>

                </div>

            </div>

        </article>
    );
}

export default ProjectCard;
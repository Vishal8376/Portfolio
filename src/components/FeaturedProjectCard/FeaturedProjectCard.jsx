import "./FeaturedProjectCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedProjectCard({
    title,
    subtitle,
    description,
    technologies,
    image,
    github,
    demo,
    category,
    status,
}) {
    return (
        <article className="featured-project-card">

            <div className="featured-project-image">

                <img
                    src={image}
                    alt={title}
                />

                <div className="image-overlay"></div>

            </div>

            <div className="featured-project-content">

                <div className="project-meta">

                    <span className="project-category">
                        {category}
                    </span>

                    <span
                        className={`project-status ${status
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                    >
                        {status}
                    </span>

                </div>

                <h3>{title}</h3>

                <h4>{subtitle}</h4>

                <p>{description}</p>

                <div className="featured-tech-stack">

                    {technologies.map((tech) => (
                        <span key={tech}>
                            {tech}
                        </span>
                    ))}

                </div>

                <div className="featured-buttons">

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="featured-btn primary"
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>
                    )}

                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="featured-btn secondary"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                </div>

            </div>

        </article>
    );
}

export default FeaturedProjectCard;
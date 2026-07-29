import "./Experience.css";

import experience from "../../data/experience";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Reveal from "../Animation/Reveal";

function Experience() {

    return (

        <section
            className="experience"
            id="experience"
        >

            <div className="container">

                <Reveal>

                    <h2 className="section-title">

                        Experience & Leadership

                    </h2>

                    <p className="section-subtitle">

                        Leadership roles, internships, certifications and technical achievements.

                    </p>

                </Reveal>

                <div className="experience-grid">

                    {experience.map((item, index) => (

                        <Reveal
                            key={item.id}
                            delay={index * 0.15}
                            direction={index % 2 === 0 ? "left" : "right"}
                        >

                            <ExperienceCard
                                {...item}
                            />

                        </Reveal>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Experience;
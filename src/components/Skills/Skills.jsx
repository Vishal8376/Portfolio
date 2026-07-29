import "./Skills.css";

import skills from "../../data/skills";
import SkillCard from "../SkillCard/SkillCard";
import Reveal from "../Animation/Reveal";

function Skills() {

    return (

        <section
            className="skills section"
            id="skills"
        >

            <div className="container">

                <Reveal>

                    <h2 className="section-title">

                        Skills

                    </h2>

                    <p className="section-subtitle">

                        Technologies I use to build modern applications.

                    </p>

                </Reveal>

                <div className="skills-grid">

                    {

                        skills.map((skill, index) => (

                            <Reveal
                                key={skill.id || index}
                                delay={index * 0.1}
                                direction={index % 2 === 0 ? "left" : "right"}
                            >

                                <SkillCard
                                    {...skill}
                                />

                            </Reveal>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Skills;
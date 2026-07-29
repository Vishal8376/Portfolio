import "./Achievements.css";
import Reveal from "../Animation/Reveal";

import {
    FaGoogle,
    FaCertificate,
    FaTrophy,
    FaShieldAlt
} from "react-icons/fa";

const achievements = [
    {
        id: 1,
        icon: FaGoogle,
        title: "Google Student Ambassador",
        description:
            "Selected as a Google Student Ambassador 2026, leading AI initiatives and technical events."
    },
    {
        id: 2,
        icon: FaCertificate,
        title: "Oracle Certified Professional",
        description:
            "Oracle Certified Professional: Java SE 21 Developer (1Z0-830)."
    },
    {
        id: 3,
        icon: FaTrophy,
        title: "Adobe India Hackathon",
        description:
            "Participated in Adobe India Hackathon, building innovative software solutions."
    },
    {
        id: 4,
        icon: FaShieldAlt,
        title: "Shaastra CTF",
        description:
            "Secured a top ranking at IIT Madras Shaastra Capture The Flag cybersecurity competition."
    }
];

function Achievements() {

    return (

        <section
            id="achievements"
            className="achievements"
        >

            <div className="container">

                <Reveal>

                    <h2 className="section-title">
                        Achievements
                    </h2>

                    <p className="section-subtitle">
                        Certifications, leadership roles and competitive accomplishments.
                    </p>

                </Reveal>

                <div className="achievements-grid">

                    {achievements.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <Reveal
                                key={item.id}
                                delay={index * 0.15}
                            >

                                <div className="achievement-card card">

                                    <div className="achievement-icon">

                                        <Icon />

                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                </div>

                            </Reveal>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default Achievements;
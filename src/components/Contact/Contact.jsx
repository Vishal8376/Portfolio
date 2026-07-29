import "./Contact.css";

import contact from "../../data/contact";
import BaseCard from "../Card/BaseCard";
import Reveal from "../Animation/Reveal";

function Contact() {

    return (

        <section
            className="contact"
            id="contact"
        >

            <div className="container">

                <Reveal>

                    <h2 className="section-title">
                        Get In Touch
                    </h2>

                    <p className="section-subtitle">
                        I'm always open to discussing internships, freelance opportunities,
                        innovative projects, or simply connecting with fellow developers.
                    </p>

                </Reveal>

                <div className="contact-grid">

                    {contact.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <Reveal
                                key={item.id}
                                delay={index * 0.1}
                                direction={index % 2 === 0 ? "left" : "right"}
                            >

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >

                                    <BaseCard className="contact-card">

                                        <div className="contact-icon">
                                            <Icon />
                                        </div>

                                        <div className="contact-card-content">

                                            <h3>{item.title}</h3>

                                            <p>{item.value}</p>

                                        </div>

                                    </BaseCard>

                                </a>

                            </Reveal>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default Contact;
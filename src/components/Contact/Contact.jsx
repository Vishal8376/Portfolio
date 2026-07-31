import "./Contact.css";

import contact from "../../data/contact";
import BaseCard from "../Card/BaseCard";
import Reveal from "../Animation/Reveal";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setIsSending(true);
        setStatus("");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus("success");
                form.current.reset();
            })
            .catch((error) => {
                console.error(error);
                setStatus("error");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

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

                {/* Contact Cards */}

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

                {/* Contact Form */}

                <Reveal delay={0.5}>

                    <div
                        id="contact-form"
                        className="contact-form-wrapper"
                    >

                        <h3 className="contact-form-title">
                            Send Me a Message
                        </h3>

                        <p className="contact-form-subtitle">
                            Have an opportunity, project idea, or just want to say hello?
                            Fill out the form below and I'll get back to you as soon as possible.
                        </p>

                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="contact-form"
                        >

                            <div className="input-row">

                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Your Name"
                                    required
                                />

                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="Your Email"
                                    required
                                />

                            </div>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                            />

                            <textarea
                                rows="6"
                                name="message"
                                placeholder="Write your message..."
                                required
                            />

                            <button
                                type="submit"
                                className="primary-btn"
                                disabled={isSending}
                            >
                                {isSending ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <p className="success-message">
                                    ✓ Message sent successfully!
                                </p>
                            )}

                            {status === "error" && (
                                <p className="error-message">
                                    Failed to send the message. Please try again.
                                </p>
                            )}

                        </form>

                    </div>

                </Reveal>

            </div>

        </section>
    );
}

export default Contact;
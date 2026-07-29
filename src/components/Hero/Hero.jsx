import "./Hero.css";

import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload
} from "react-icons/fa";

import profile from "../../assets/images/profile.png";

function Hero() {

    return (

        <section
            id="home"
            className="hero"
        >

            <div className="container hero-container">

                {/* Left Side */}

                <div className="hero-content">

                    <motion.span
                        className="hero-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        🚀 Available for Opportunities
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Hi, I'm
                        <span> Vishal</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                    >
                        Software Engineer &
                        <br />
                        Full Stack Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                    >
                        Passionate about building scalable web applications
                        using Java, Spring Boot and React.
                        I enjoy solving real-world problems through clean,
                        efficient code and intuitive user experiences.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.75 }}
                    >

                        <a
                            href="#projects"
                            className="btn"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            className="btn outline-btn"
                            download
                        >
                            <FaDownload />
                            Resume
                        </a>

                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1 }}
                    >

                        <motion.a
                            href="#"
                            whileHover={{
                                scale: 1.2,
                                rotate: 10
                            }}
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            href="#"
                            whileHover={{
                                scale: 1.2,
                                rotate: 10
                            }}
                        >
                            <FaLinkedin />
                        </motion.a>

                        <motion.a
                            href="#"
                            whileHover={{
                                scale: 1.2,
                                rotate: 10
                            }}
                        >
                            <FaEnvelope />
                        </motion.a>

                    </motion.div>

                </div>

                {/* Right Side */}

                <motion.div
                    className="hero-image"
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotate: -10
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.4
                    }}
                >

                    <motion.div
                        className="image-ring"
                        animate={{
                            y: [0, -12, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >

                        <img
                            src={profile}
                            alt="Vishal"
                        />

                    </motion.div>

                </motion.div>

            </div>

        </section>

    );

}

export default Hero;
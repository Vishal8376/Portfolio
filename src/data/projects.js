import {
    FaUsers,
    FaUtensils,
    FaMicrophone,
    FaGithub,
    FaGlobe
} from "react-icons/fa";

const projects = [

    {
        id: 1,

        title: "Interest Based Networking Platform",

        description:
            "A full-stack networking platform that helps users discover and connect with people who share similar interests, communities and collaboration goals.",

        icon: FaUsers,

        technologies: [
            "Spring Boot",
            "React",
            "MySQL",
            "REST API",
            "JWT"
        ],

        github: "https://github.com/yourusername/Interest-based-networking-platform",

        demo: "",

        githubIcon: FaGithub,

        demoIcon: FaGlobe
    },

    {
        id: 2,

        title: "Restaurant Management System",

        description:
            "A restaurant management application for handling menus, orders, payments, inventory and staff with an intuitive dashboard.",

        icon: FaUtensils,

        technologies: [
            "Django",
            "SQLite",
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github: "https://github.com/yourusername/Restaurant-Management-System",

        demo: "",

        githubIcon: FaGithub,

        demoIcon: FaGlobe
    },

    {
        id: 3,

        title: "VoiceForAll",

        description:
            "An AI-powered accessibility platform enabling voice-based reporting with sentiment analysis and location-aware incident tracking.",

        icon: FaMicrophone,

        technologies: [
            "Python",
            "Streamlit",
            "Gemini AI",
            "TextBlob",
            "Firebase"
        ],

        github: "https://github.com/yourusername/VoiceForAll",

        demo: "",

        githubIcon: FaGithub,

        demoIcon: FaGlobe
    }

];

export default projects;
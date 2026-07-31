// src/data/projects.js

import pharmatrace from "../assets/projects/pharmatrace.png";
import finops from "../assets/projects/finops.png";
import blogapp from "../assets/projects/blogapp.png";
import kitchary from "../assets/projects/kitchary.png";
import clothing from "../assets/projects/clothing.png";
import voiceforall from "../assets/projects/voiceforall.png";
import connecthub from "../assets/projects/connecthub.png";
const projects = [
    {
        id: 1,
        featured: true,
        status: "Completed",
        category: "AI • Healthcare",

        title: "PharmaTrace",

        subtitle: "AI-Powered Cold Chain Monitoring",

        description:
            "An intelligent pharmaceutical supply chain platform that monitors temperature-sensitive shipments in real time using Firebase and Google Gemini. The platform predicts shipment risks, provides AI-generated recommendations, and helps reduce pharmaceutical wastage through proactive monitoring.",

        image: pharmatrace,

        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Firebase",
            "Firestore",
            "Google Gemini",
            "Chart.js",
        ],

        github: "https://github.com/Vishal8376/PharmaTrace",

        demo: "https://pharma-trace-teal.vercel.app/",
    },

    {
        id: 2,
        featured: true,
        status: "Completed",
        category: "Finance",

        title: "FinOps",

        subtitle: "Personal Finance Management Platform",

        description:
            "A modern finance management application that helps users track expenses, monitor budgets, visualize spending patterns, and manage financial goals through an intuitive dashboard.",

        image: finops,

        technologies: [
            "React",
            "Spring Boot",
            "MySQL",
            "REST API",
        ],

        github: "https://github.com/Vishal8376/FinOps",

        demo: "",
    },

    {
        id: 3,
        featured: true,
        status: "Completed",
        category: "Full Stack",

        title: "BlogApp",

        subtitle: "Modern Blogging Platform",

        description:
            "A full-stack blogging platform with authentication, article management, categories, comments, and a clean responsive user interface for publishing and reading content.",

        image: blogapp,

        technologies: [
            "React",
            "Spring Boot",
            "MySQL",
            "JWT",
        ],

        github: "https://github.com/Vishal8376/BlogApp",

        demo: "https://blog-app-livid-alpha.vercel.app/",
    },

    {
        id: 4,
        featured: false,
        status: "Completed",
        category: "Restaurant",

        title: "Kitchary",

        subtitle: "Restaurant Management System",

        description:
            "Restaurant management platform supporting menu management, food ordering, and operational workflows.",

        image: kitchary,

        technologies: [
            "Django",
            "SQLite",
            "HTML",
            "CSS",
        ],

        github: "https://github.com/Vishal8376/Restaurant-Order-Management",

        demo: "",
    },

    {
        id: 5,
        featured: false,
        status: "Completed",
        category: "E-Commerce",

        title: "Clothing Store",

        subtitle: "Responsive E-Commerce Website",

        description:
            "A modern online clothing store featuring responsive layouts, product browsing, and shopping cart functionality.",

        image: clothing,

        technologies: [
            "React",
            "CSS",
            "JavaScript",
        ],

        github: "https://github.com/Vishal8376/clothing",

        demo: "",
    },

    {
        id: 6,
        featured: false,
        status: "Completed",
        category: "AI",

        title: "VoiceForAll",

        subtitle: "AI-Powered Accessibility Platform",

        description:
            "An accessibility-focused platform that enables voice-based reporting with AI-powered sentiment analysis and interactive data visualization.",

        image: voiceforall,

        technologies: [
            "Streamlit",
            "Python",
            "Firebase",
            "Gemini",
            "TextBlob",
        ],

        github: "https://github.com/Vishal8376/VoiceForAll",

        demo: "https://voice-for-all-phi.vercel.app/",
    },

    {
    id: 7,
    featured: false,
    status: "In Development",
    category: "Full Stack • Social",

    title: "ConnectHub",

    subtitle: "Interest-Based Networking Platform",

    description:
        "A full-stack networking platform that connects people based on shared interests, enabling users to discover communities, build meaningful connections, and engage through interest-driven interactions.",

    image: connecthub,

    technologies: [
        "React",
        "Spring Boot",
        "MySQL",
        "JWT",
        "REST API"
    ],

    github: "https://github.com/Vishal8376/Interest-based-networking-platform",

    demo: "",

    year: "2026",

    team: "Personal Project"
}
];

export default projects;
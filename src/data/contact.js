import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaCode
} from "react-icons/fa";

const contact = [

    {
        id: 1,
        icon: FaEnvelope,
        title: "Email",
        value: "yourmail@gmail.com",
        link: "mailto:yourmail@gmail.com"
    },

    {
        id: 2,
        icon: FaLinkedin,
        title: "LinkedIn",
        value: "linkedin.com/in/yourprofile",
        link: "https://linkedin.com/in/yourprofile"
    },

    {
        id: 3,
        icon: FaGithub,
        title: "GitHub",
        value: "github.com/yourusername",
        link: "https://github.com/yourusername"
    },

    {
        id: 4,
        icon: FaCode,
        title: "LeetCode",
        value: "leetcode.com/yourusername",
        link: "https://leetcode.com/yourusername"
    }

];

export default contact;
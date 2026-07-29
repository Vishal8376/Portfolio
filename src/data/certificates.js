import oracleLogo from "../assets/certificates/oracle.png";
import oraclePdf from "../assets/certificates/oracle.pdf";

import ibmLogo from "../assets/certificates/ibm.png";
import ibmPdf from "../assets/certificates/ibm.pdf";

import gfgLogo from "../assets/certificates/gfg.png";
import gfgPdf from "../assets/certificates/gfg.pdf";

import adobeLogo from "../assets/certificates/adobe.png";
import adobePdf from "../assets/certificates/adobe.pdf";

const certificates = [
    {
        id: 1,
        title: "Oracle Certified Professional Java SE 21",
        issuer: "Oracle",
        date: "2026",
        image: oracleLogo,
        pdf: oraclePdf
    },
    {
        id: 2,
        title: "IBM Java for Beginners",
        issuer: "IBM",
        date: "2025",
        image: ibmLogo,
        pdf: ibmPdf
    },
    {
        id: 3,
        title: "GFG Full Stack",
        issuer: "GeeksforGeeks",
        date: "2025",
        image: gfgLogo,
        pdf: gfgPdf
    },
    {
        id: 4,
        title: "Adobe Hackathon",
        issuer: "Adobe",
        date: "2025",
        image: adobeLogo,
        pdf: adobePdf
    }
];

export default certificates;
import "./CertificateCard.css";
import BaseCard from "../Card/BaseCard";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

function CertificateCard({

    image,
    title,
    issuer,
    date,
    pdf

}){

    return(

        <BaseCard className="certificate-card">

            <div className="certificate-logo-wrapper">

                <img
                    src={image}
                    alt={`${issuer} logo`}
                    className="certificate-logo"
                />

            </div>

            <div className="certificate-content">

                <h3>{title}</h3>

                <p>{issuer}</p>

                <small>{date}</small>

            </div>

            <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn certificate-btn"
                aria-label={`View ${title} certificate`}
            >

                <FaFilePdf />

                <span>View Credential</span>

                <FaExternalLinkAlt className="external-icon"/>

            </a>

        </BaseCard>

    );

}

export default CertificateCard;
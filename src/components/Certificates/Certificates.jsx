import "./Certificates.css";

import certificates from "../../data/certificates";
import CertificateCard from "../CertificateCard/CertificateCard";
import Reveal from "../Animation/Reveal";

function Certificates() {

    return (

        <section
            className="certificates"
            id="certificates"
        >

            <div className="container">

                <Reveal>

                    <h2 className="section-title">
                        Certifications
                    </h2>

                    <p className="section-subtitle">
                        Certifications and achievements that validate my technical skills.
                    </p>

                </Reveal>

                <div className="certificates-grid">

                    {certificates.map((certificate, index) => (

                        <Reveal
                            key={certificate.id}
                            delay={index * 0.15}
                            direction={index % 2 === 0 ? "left" : "right"}
                        >

                            <CertificateCard
                                {...certificate}
                            />

                        </Reveal>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Certificates;
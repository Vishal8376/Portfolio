import "./SkillCard.css";
import BaseCard from "../Card/BaseCard";

function SkillCard({

    icon: Icon,
    title,
    subtitle

}) {

    return (

        <BaseCard className="skill-card">

            <div className="skill-icon-wrapper">

                <div className="skill-icon">

                    <Icon />

                </div>

            </div>

            <div className="skill-content">

                <h3>{title}</h3>

                <p>{subtitle}</p>

            </div>

        </BaseCard>

    );

}

export default SkillCard;
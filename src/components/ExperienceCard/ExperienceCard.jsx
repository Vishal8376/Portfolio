import "./ExperienceCard.css";
import BaseCard from "../Card/BaseCard";
import { HiOutlineCalendarDays } from "react-icons/hi2";

function ExperienceCard({

    icon: Icon,
    title,
    organization,
    duration,
    description

}) {

    return (

        <BaseCard className="experience-card">

            <div className="experience-header">

                <div className="experience-icon">

                    <Icon />

                </div>

                <div>

                    <h3>{title}</h3>

                    <h4>{organization}</h4>

                </div>

            </div>

            <div className="experience-duration">

                <HiOutlineCalendarDays />

                <span>{duration}</span>

            </div>

            <p>{description}</p>

        </BaseCard>

    );

}

export default ExperienceCard;
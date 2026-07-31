import "./BaseCard.css";

function BaseCard({ children, className = "" }) {
    return (
        <div className={`base-card ${className}`}>
            {children}
        </div>
    );
}

export default BaseCard;
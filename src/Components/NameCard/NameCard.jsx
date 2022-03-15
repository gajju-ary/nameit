import react from "react";
import './NameCard.css'

const NameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard = ({ suggestedName }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            href={`${NameCheapUrl}${suggestedName}`} className="card-link"
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;
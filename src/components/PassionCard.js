import { useState } from 'react';
import './PassionCard.css'; // CSS séparé

export default function PassionCard({ backImage, label, icon, description }) {
  const [flipped, setFlipped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
    if (flipped) setShowDetails(false); // on referme les détails quand on retourne
  };

  const handleToggleDetails = (e) => {
    e.stopPropagation(); // empêche le clic sur la carte de s'exécuter
    setShowDetails(!showDetails);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        {/* Face avant */}
        <div className="card-front">
          <img src={backImage} alt="Passion visuelle" />
        </div>

        {/* Face arrière */}
        <div className="card-back">
          <div className="icon">{icon}</div>
          <h3>{label}</h3>
          <button onClick={handleToggleDetails}>
            {showDetails ? 'Cacher' : 'En savoir plus'}
          </button>
          {showDetails && <p className="details">{description}</p>}
        </div>
      </div>
    </div>
  );
}

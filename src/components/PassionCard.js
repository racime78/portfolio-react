import { useState } from 'react';

export default function PassionCard({ backImage, label, icon, description }) {
  const [flipped, setFlipped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
    if (flipped) setShowDetails(false);
  };

  const handleToggleDetails = (e) => {
    e.stopPropagation();
    setShowDetails(!showDetails);
  };

  return (
    <div className={`passion-card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="passion-inner">
        <div className="passion-front">
          <img src={backImage} alt="Passion visuelle" />
        </div>

        <div className="passion-back">
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

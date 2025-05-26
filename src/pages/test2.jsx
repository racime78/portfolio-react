import React from 'react';
import './test2.css';
import portrait from '../assets/plante.jpg'; // Vérifie bien le chemin de l'image

export default function TestPage() {
  return (
    <div className="test-container">
      <div className="left-side">
        <img src={portrait} alt="Portrait" className="portrait" />
      </div>
      
      <div className="right-side">
        <h1 className="title">Bienvenue sur mon site</h1>
      </div>
    </div>
  );
}

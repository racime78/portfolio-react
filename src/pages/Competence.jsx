import { useState } from 'react';
import './Competence.css';

const categories = [
  {
    title: 'Langages',
    items: ['HTML', 'CSS', 'JavaScript/React', 'PHP', 'Python', 'Java', 'C', 'C++', 'SQL', 'VBA'],
  },
  {
    title: 'Outils & Environnements',
    items: ['Node.js', 'MySQL', 'phpMyAdmin', 'CMS (WordPress, Webflow)', 'Office', 'Feedly', 'Looker Studio'],
  },
  {
    title: 'Soft Skills',
    items: ['Autonomie', 'Proactivité', 'Aisance orale', 'Rigueur', 'Travail en équipe'],
  },
  {
    title: 'SEO & Analyse',
    items: ['Google Analytics', 'SEMrush', 'Optimisation SEO', 'Analyse de performance'],
  },
  {
    title: 'Langues',
    items: ['Français (natif)', 'Anglais (B2)', 'Arabe (A1-A2)'],
  },
  {
    title: 'En cours d’acquisition',
    items: [
      'C#',
      'Intelligence Artificielle & Machine Learning',
      'Internet des objets',
      'Robot mobile autonome',
      'Traitement d’image',
      'Modélisation 3D',
    ],
  },
];

export default function Competence() {
  const [openStates, setOpenStates] = useState(Array(categories.length).fill(true));

  const toggle = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  };

  return (
    <div className="competence-container">
      <h2 className="competence-title">Compétences Techniques</h2>
      <p className="competence-intro">
        Voici un aperçu structuré de mes savoir-faire techniques, outils maîtrisés, soft skills et compétences en cours d'acquisition.
      </p>
      <div className="competence-grid">
        {categories.map((cat, index) => (
          <div key={index} className="competence-card">
            <button className="competence-header" onClick={() => toggle(index)}>
              {cat.title}
              <span className={`arrow ${openStates[index] ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`competence-collapse ${openStates[index] ? 'expanded' : ''}`}>
              <ul className="competence-list">
                {cat.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

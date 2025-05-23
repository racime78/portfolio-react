import '../css/Accueil.css';
import LogoSlider from '../components/LogoSlider';
// import portrait from '../assets/portrait.jpg';

export default function Accueil() {
  return (
    <div className="accueil-container">
      <h1 className="accueil-title">Bienvenue sur mon portfolio</h1>

      <img
        // src={portrait}
        alt="Portrait de Racime Houhou"
        className="accueil-avatar"
      />

      <p>
        Je suis <span className="accueil-highlight">Racime Houhou</span>, étudiant ingénieur en informatique à l’EICNAM Paris.
        Spécialisé en développement web, j’ai une passion pour les technologies modernes, l’automatisation,
        et les projets concrets.
      </p>

      <div className="accueil-section">
        <h2>🎯 Objectif professionnel</h2>
        <p>
          Je suis à la recherche d’une <span className="accueil-highlight">alternance informatique</span> à partir de 2025
          afin de mettre mes compétences en pratique au service d’une équipe ambitieuse et innovante.
        </p>
      </div>

      <div className="accueil-section">
        <h2>🤝 Ils m'ont fait confiance</h2>
        <LogoSlider />
      </div>

      <div className="accueil-section">
        <h2>🗂 Ce que vous trouverez ici</h2>
        <ul>
          <li>📚 Mon parcours scolaire et académique</li>
          <li>💼 Mes expériences professionnelles</li>
          <li>🚀 Mes projets réalisés</li>
          <li>🧠 Mes compétences techniques et humaines</li>
          <li>📄 Des documents téléchargeables</li>
          <li>📬 Un espace pour me contacter facilement</li>
        </ul>
      </div>

      <div className="accueil-section">
        <h2>✨ Ce qui me distingue</h2>
        <p>
          J’ai déjà contribué à des projets pour des entreprises, refondu des sites web, automatisé des tâches comptables via API,
          et animé des sessions d’initiation à l’IA. Je suis à l’aise aussi bien en <span className="accueil-highlight">front-end qu’en back-end</span>,
          avec un vrai sens de la communication et du travail bien fait.
        </p>
      </div>

      <div className="accueil-footer">
        👉 <strong>Naviguez via le menu ci-dessus</strong> pour en apprendre plus sur mon profil,<br />
        ou rendez-vous directement sur la page <em>Contact</em> pour me joindre.
      </div>
    </div>
  );
}

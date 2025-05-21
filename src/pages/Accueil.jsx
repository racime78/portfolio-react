//import portrait from '../assets/portrait.jpg'; // Remplace par ta vraie image
import LogoSlider from '../components/LogoSlider';


export default function Accueil() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenue sur mon portfolio</h1>

      <img
        //src={portrait}
        alt="Portrait de Racime Houhou"
        style={{ width: "180px", borderRadius: "50%", marginBottom: "1rem" }}
      />

      <p>
        Je suis <strong>Racime Houhou</strong>, étudiant ingénieur en informatique à l’EICNAM Paris. 
        Spécialisé en développement web, j’ai une passion pour les technologies modernes, l’automatisation, 
        et les projets concrets.
      </p>

      <h2>🎯 Objectif professionnel</h2>
      <p>
        Je suis à la recherche d’une <strong>alternance informatique</strong> à partir de 2025 afin de 
        mettre mes compétences en pratique au service d’une équipe ambitieuse et innovante.
      </p>

      <h2 style={{ marginTop: '3rem' }}>Ils m'ont fait confiance</h2>
      <LogoSlider />

      <h2>🗂 Ce que vous trouverez ici</h2>
      <ul>
        <li>📚 Mon parcours scolaire et académique</li>
        <li>💼 Mes expériences professionnelles</li>
        <li>🚀 Mes projets réalisés</li>
        <li>🧠 Mes compétences techniques et humaines</li>
        <li>📄 Des documents téléchargeables</li>
        <li>📬 Un espace pour me contacter facilement</li>
      </ul>
      
      <h2>✨ Ce qui me distingue</h2>
      <p>
        J’ai déjà contribué à des projets pour des entreprises, refondu des sites web, automatisé des tâches comptables via API, et animé des sessions d’initiation à l’IA. Je suis à l’aise aussi bien en <strong>front-end qu’en back-end</strong>, avec un vrai sens de la communication et du travail bien fait.
      </p>

      <p style={{ marginTop: "2rem" }}>
        👉 <strong>Naviguez via le menu ci-dessus</strong> pour en apprendre plus sur mon profil, ou rendez-vous directement sur la page <em>Contact</em> pour me joindre.
      </p>
    </div>
  );
}

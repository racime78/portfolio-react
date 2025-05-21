//import projet3i from '../assets/3i-project.jpg'; // ex : image de projet
//import lasource from '../assets/lasource.jpg';

export default function ParcoursPro() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Mon Expérience Professionnelle</h2>

      <h3>🧑‍💻 3i School (2023 - 2024)</h3>
       {/*<img src={projet3i} alt="Projet 3i School" style={{ width: "100%", maxWidth: "500px" }} />*/}
      <ul>
        <li>Automatisation comptable via API Qonto + Python</li>
        <li>Création et refonte de sites WordPress/Webflow</li>
        <li>Animation de sessions sur l’IA</li>
        <li>Chef de projet d’un agrégateur d’offres d’emploi</li>
      </ul>

      <h3>💻 La Source Jeune (2023 et 2022 - 4 mois)</h3>
       {/*<img src={lasource} alt="Travail chez La Source Jeune" style={{ width: "100%", maxWidth: "500px" }} />*/}
      <ul>
        <li>Tests QA sur application mobile</li>
        <li>Refonte site web, optimisation SEO</li>
        <li>Correction d’erreurs HTTP, chatbot client</li>
      </ul>
    </div>
  );
}

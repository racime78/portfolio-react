import '../css/Accueil.css';
import LogoSlider from '../components/LogoSlider';
import portrait from '../assets/portrait.png';
import { Link } from 'react-router-dom';

export default function Accueil() {
  return (
    <div className="accueil-container">
      <div className="accueil-content">
        <div className="accueil-left">
          <h1 className="accueil-title">Bienvenue sur mon portfolio</h1>
          <img src={portrait} alt="Portrait de Racime Houhou" className="accueil-avatar" />
        </div>

        <div className="accueil-right">
          <h2 className="accueil-name">Racime Houhou</h2>
          <p>
            ✨ Je suis <span className="accueil-highlight">Racime Houhou</span>, étudiant ingénieur en informatique à l’EICNAM Paris, 
            en quête de <span className="accueil-highlight">nouveaux défis technologiques</span>.
          </p>
          <p>
            🚀 Passionné par le <span className="accueil-highlight">développement web</span> et l’optimisation digitale, 
            j’aime concevoir des systèmes performants et intuitifs. Mon objectif est de 
            <span className="accueil-highlight"> transformer des idées innovantes en projets concrets</span>, 
            en exploitant les technologies les plus avancées.
          </p>
          <p>
            🔧 Grâce à mes expériences, j’ai acquis une expertise en 
            <span className="accueil-highlight"> automatisation</span>, en <span className="accueil-highlight">gestion de données</span>, 
            et en <span className="accueil-highlight">développement front-end et back-end</span>. 
            J’aime relever des défis et trouver des solutions efficaces pour améliorer l’interaction entre utilisateurs et technologie.
          </p>
        </div>
      </div>

      <div className="accueil-section">
        <h2>🎯 Objectif professionnel</h2>
        <p>
          📌 <strong>Mon ambition est claire :</strong> évoluer dans un environnement où je peux allier <span className="accueil-highlight">innovation</span> et <span className="accueil-highlight">expertise technique</span>, tout en apportant une réelle valeur ajoutée à mon équipe et à l’entreprise.
        </p>
        <ul>
          <li>🚀 Trouver une <span className="accueil-highlight">alternance en informatique</span> à partir de 2025 pour appliquer mes compétences.</li>
          <li>💻 Développer des solutions web performantes en exploitant des <span className="accueil-highlight">technologies modernes</span>.</li>
          <li>🤖 Maîtriser des concepts avancés : <span className="accueil-highlight">IA, IoT, Modélisation 3D</span>.</li>
          <li>🌍 Contribuer à des projets innovants avec une approche orientée utilisateur.</li>
          <li>🏆 Évoluer vers des <span className="accueil-highlight">responsabilités techniques et stratégiques</span>.</li>
        </ul>
      </div>

      <div className="accueil-section">
        <h2>🤝 Ils m'ont fait confiance</h2>
        <LogoSlider />
      </div>

      <div className="accueil-sections-container">
        <div className="accueil-section">
          <h2>🗂 Ce que vous trouverez ici</h2>
          <ul>
            <li>📚 <Link to="/parcours-scolaire">Mon parcours scolaire et académique</Link></li>
            <li>💼 <Link to="/parcours-pro">Mes expériences professionnelles</Link></li>
            <li>🚀 <Link to="/projets">Mes projets réalisés</Link></li>
            <li>🧠 <Link to="/competence">Mes compétences techniques et humaines</Link></li>
            <li>📄 <Link to="/documents">Des documents téléchargeables</Link></li>
            <li>📬 <Link to="/contact">Un espace pour me contacter facilement</Link></li>
          </ul>
        </div>

        <div className="accueil-section">
          <h2>🛠 Mes outils préférés</h2>
          <ul>
            <li>💻 VM WARE, Oracle VM, Cisco Packet Tracer</li>
            <li>⚡ React, Next.js, Node.js</li>
            <li>🛠 Tailwind CSS, Bootstrap</li>
            <li>🗄️ MySQL, MongoDB, PhpMyAdmin</li>
            <li>🚀 Wordpress, Webflow</li>
            <li>🔍 Semrush, Search Console</li>
          </ul>
        </div>

        <div className="accueil-section">
          <h2>📈 Mes objectifs futurs</h2>
          <ul>
            <li>🌍 Contribuer à des projets open source</li>
            <li>🚀 Devenir expert en cloud computing</li>
            <li>🤖 Travailler sur l’intelligence artificielle</li>
            <li>🛠 Développer des outils d’automatisation</li>
            <li>🎯 Lancer un projet personnel innovant</li>
            <li>🏆 Continuer à apprendre et progresser</li>
          </ul>
        </div>
      </div>

      <div className="accueil-distinction">
        <h2>✨ Ce qui me distingue</h2>
        <p>
          💡 Ce qui fait la différence, ce ne sont pas juste les <span className="accueil-highlight">compétences techniques</span>, mais la capacité à <span className="accueil-highlight">les appliquer intelligemment</span> dans des contextes variés.
        </p>
        <ul>
          <li>🖥️ <strong>Développement Web :</strong> création et amélioration de sites, modernisation du design et <span className="accueil-highlight">optimisation SEO</span>.</li>
          <li>🔄 <strong>Automatisation :</strong> API Qonto et Python pour simplifier la gestion comptable.</li>
          <li>🤝 <strong>Gestion de projet :</strong> Méthodologie Agile, travail en équipe et esprit d'initiative.</li>
          <li>🛠 <strong>Qualité et tests :</strong> assurance performance, tests QA et audits SEO.</li>
          <li>🎓 <strong>Partage du savoir :</strong> animation de sessions d’initiation à l’IA et au développement.</li>
        </ul>
        <p>Je suis quelqu’un de <span className="accueil-highlight">rigoureux</span>, <span className="accueil-highlight">polyvalent</span>, et <span className="accueil-highlight">proactif</span>, avec une volonté de résoudre des problèmes de manière efficace et créative.</p>
      </div>

      <div className="accueil-footer">
        👉 <strong>Naviguez via le menu ci-dessus</strong> pour en apprendre plus sur mon profil,<br />
        ou rendez-vous directement sur la page <em>Contact</em> pour me joindre.
      </div>
    </div>
  );
}

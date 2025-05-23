import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Projets.css';

import jobApp from '../assets/job-aggregator.jpg';
import qontoApp from '../assets/qonto-automation.webp';
import appliBlog from '../assets/appliblog.jpg';
import portfolioScreenshot from '../assets/Logo_Racime.png';

const projets = [
  {
    image: jobApp,
    title: "Agrégateur d’offres d’emploi",
    description:
      "Projet personnel mené avec HTML, Tailwind CSS, JavaScript, NodeJS, PHP et SQL. Utilisation de la méthodologie Agile, conception de la base de données et développement complet.",
    link: "https://github.com/racime78/agregateur2.5"
  },
  {
    image: qontoApp,
    title: "Automatisation Fichier Comptable Qonto",
    description:
      "Projet d’alternance : récupération automatique des transactions (débits/crédits) et solde via API Qonto pour générer des bilans prévisionnels.",
    note: "⚠️ Le code ne fonctionne pas sans clés API. Elles ont été retirées volontairement.",
    link: "https://github.com/racime78/API-Qonto"
  },
  {
    image: appliBlog,
    title: "Application Mobile Android “AppliBlog”",
    description:
      "Application mobile Android développée en Java pour consulter les articles d’un blog connecté à une base de données PHP/MySQL.",
    link: "https://github.com/racime78/AppliBlog"
  },
  {
    image: portfolioScreenshot,
    title: "Portfolio React",
    description:
      "Ce site même ! Construit avec React 19, React Router DOM, EmailJS, Framer Motion, Intersection Observer et Tailwind CSS.",
    list: [
      "Formulaire de contact dynamique",
      "Timeline animée scolaire et pro",
      "Accordéons interactifs",
      "Aperçu PDF pour CV & lettres"
    ],
    link: "https://github.com/racime78/portfolio-react"
  }
];

export default function Projets() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="projets-slider-container">
      <h2 className="projets-title">Mes Projets</h2>

      <Slider {...settings}>
        {projets.map((projet, index) => (
          <div key={index} className="projet-slide">
            <img src={projet.image} alt={projet.title} className="projet-image" />
            <div className="projet-content">
              <h3>{projet.title}</h3>
              <p>{projet.description}</p>
              {projet.note && <p className="note">{projet.note}</p>}
              {projet.list && (
                <ul>
                  {projet.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {projet.link && (
                <a
                  href={projet.link}
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accéder au code
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>

      <div className="github-global-button">
        <a
          href="https://github.com/racime78?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir tous mes projets sur GitHub →
        </a>
      </div>
    </div>
  );
}

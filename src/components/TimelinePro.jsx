import { useRef, useEffect, useState } from 'react';
import ProItem from './ProItem';
import './Timeline.css';

import logo3i from '../assets/3i-project.svg';
import logoSource from '../assets/lasource.jpeg';

export default function TimelinePro() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const data = [
  {
    year: '2023 - 2024',
    company: '3i School',
    description: [
      'Automatisation comptable via API Qonto + Python (export, traitement CSV, archivage)',
      'Création et refonte de sites avec WordPress, Webflow et Elementor',
      'Animation de sessions sur l’intelligence artificielle générative (ChatGPT, Midjourney, Notion AI)',
      'Chef de projet d’un agrégateur d’offres d’emploi (PHP + JS + API)',
      'Mise en place de workflows automatisés (Zapier / Make)',
      'Suivi d’équipe et gestion de backlog Agile (Trello, Notion)',
      'Mise en conformité RGPD des formulaires et mentions légales',
      'Intégration responsive (Flexbox, media queries)',
      'Création de maquettes Figma et adaptation mobile',
    ],
    logo: logo3i,
  },
  {
    year: '2023 et 2022 (4 mois)',
    company: 'La Source Jeune',
    description: [
      'Recettage fonctionnel d’une application mobile (QA + checklist)',
      'Optimisation SEO : amélioration balises meta, vitesse, sitemap',
      'Refonte graphique du site sous WordPress (Elementor)',
      'Correction d’erreurs HTTP (404, redirections), et bugs CSS',
      'Ajout d’un chatbot client via Tidio et tests A/B des questions',
      'Suivi du trafic via Google Analytics + Looker Studio',
      'Mise en place de formulaires de contact dynamiques',
      'Création de contenus (articles, pages de présentation)',
    ],
    logo: logoSource,
  },
];


 useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const timeline = containerRef.current;
      const timelineTop = timeline.offsetTop;
      const timelineHeight = timeline.offsetHeight;

      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const windowBottom = scrollY + windowHeight;

      const startOffset = 100;

      let progressRatio = (windowBottom - (timelineTop + startOffset)) / timelineHeight;
      progressRatio = Math.min(Math.max(progressRatio, 0), 1);

      setProgress(progressRatio * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline" ref={containerRef}>
      <div className="timeline-bar-background" />
      <div className="timeline-bar-progress" style={{ height: `${progress}%` }} />
      <div className="timeline-items">
        {data.map((item, index) => (
          <ProItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

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
        'Automatisation comptable via API Qonto + Python',
        'Création et refonte de sites WordPress/Webflow',
        'Animation de sessions sur l’IA',
        'Chef de projet d’un agrégateur d’offres d’emploi',
      ],
      logo: logo3i,
    },
    {
      year: '2023 et 2022 (4 mois)',
      company: 'La Source Jeune',
      description: [
        'Tests QA sur application mobile',
        'Refonte site web, optimisation SEO',
        'Correction d’erreurs HTTP, chatbot client',
      ],
      logo: logoSource,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const fullHeight = rect.height + windowHeight;

      const scrolled = Math.min(
        Math.max(((windowHeight - rect.top) / fullHeight) * 100, 0),
        100
      );

      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
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

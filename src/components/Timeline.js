import { useRef, useEffect, useState } from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

import eicnamLogo from '../assets/eicnam.jpeg';
import foucauldLogo from '../assets/charles_foucauld.png';
import esieeLogo from '../assets/esiee.png';
import deGaulleLogo from '../assets/de_gaulle.jpeg';

export default function Timeline() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const data = [
    {
      year: '2025 - 2028',
      title: 'Cycle Ingénieur Informatique',
      school: 'EICNAM Paris',
      description: 'Alternance avec spécialisation en développement logiciel, IA et gestion de projets techniques.',
      logo: eicnamLogo,
    },
    {
      year: '2023 - 2024',
      title: 'Licence Informatique',
      school: 'Lycée Charles de Foucauld',
      description: 'Approfondissement en algorithmique, programmation web, architecture des systèmes.',
      logo: foucauldLogo,
    },
    {
      year: '2021 - 2023',
      title: 'BTS SIO - SLAM',
      school: 'Lycée Charles de Foucauld',
      description: 'Spécialisation en développement d’applications web, bases de données, JavaScript, PHP.',
      logo: foucauldLogo,
    },
    {
      year: '2020 - 2021',
      title: 'BTS SN - IR',
      school: 'ESIEE-IT',
      description: 'Études des réseaux, systèmes embarqués, électronique et programmation bas-niveau.',
      logo: esieeLogo,
    },
    {
      year: '2018 - 2020',
      title: 'Bac STI2D - SIN',
      school: 'Lycée Charles de Gaulle',
      description: 'Premiers pas dans le développement, la domotique, les objets connectés.',
      logo: deGaulleLogo,
    }
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
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

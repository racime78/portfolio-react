import ValueCard from '../components/ValueCard';
import PassionCard from '../components/PassionCard';
import mstImg from '../assets/mystere.jpg';
import { FaMusic, FaDumbbell, FaBook } from 'react-icons/fa';
import { useEffect } from 'react';

import '../css/Apropos.css';

const GA_ID = 'G-T744FMLRYS';

export default function Apropos() {

 useEffect(() => {
    if (GA_ID) {
      // Injecte dynamiquement le script Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

     script.onload = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_ID);
};
    }
  }, []);

  return (
    <div className="apropos-container">
      <h1 className="apropos-title">À propos de moi</h1>

      <p>
  Je m’appelle <span className="accueil-highlight">Racime Houhou</span>, actuellement en <span className="accueil-highlight">cycle ingénieur</span> à l’EICNAM Paris. 
  Mon parcours s’est construit autour d’une conviction simple : la <span className="accueil-highlight">technologie</span> n’a de valeur que 
  lorsqu’elle <span className="accueil-highlight">résout un problème réel</span>, <span className="accueil-highlight">améliore l’expérience humaine</span> ou <span className="accueil-highlight">facilite un processus complexe</span>.
</p>

<p>
  Au fil de mes <span className="accueil-highlight">études</span> et <span className="accueil-highlight">expériences</span>, j’ai appris bien plus que des langages de programmation. 
  J’ai appris à <span className="accueil-highlight">m’adapter</span>, à <span className="accueil-highlight">structurer mes idées</span>, à <span className="accueil-highlight">travailler en équipe</span>, 
  et surtout à <span className="accueil-highlight">transformer des besoins fonctionnels en solutions concrètes</span>.
</p>

<p>
  Ce que j’aime par-dessus tout, c’est <span className="accueil-highlight">comprendre comment les choses fonctionnent</span>, 
  <span className="accueil-highlight">déconstruire un problème</span>, et le <span className="accueil-highlight">reconstruire avec méthode et créativité</span>. 
  C’est ce qui me pousse à explorer sans cesse de <span className="accueil-highlight">nouveaux domaines</span> : 
  du <span className="accueil-highlight">développement web</span> à <span className="accueil-highlight">l’automatisation</span>, 
  en passant par la <span className="accueil-highlight">gestion de projet</span> et <span className="accueil-highlight">l’analyse de données</span>.
</p>

<p>
  Mon profil se veut volontairement <span className="accueil-highlight">hybride</span> : 
  <span className="accueil-highlight"> rigoureux techniquement</span>, <span className="accueil-highlight">curieux par nature</span>, 
  et animé par l’envie de <span className="accueil-highlight">bien faire</span>. 
  J'accorde une grande importance à la <span className="accueil-highlight">communication</span> et à <span className="accueil-highlight">l’écoute</span>, 
  convaincu qu’un bon projet est avant tout une affaire de <span className="accueil-highlight">collaboration</span>.
</p>

<p>
  Que ce soit à travers un <span className="accueil-highlight">site web</span>, une <span className="accueil-highlight">API</span> ou une <span className="accueil-highlight">interface utilisateur</span>, 
  mon objectif reste le même : <span className="accueil-highlight">créer des solutions utiles, bien pensées et durables</span>.
</p>


      <div className="apropos-section">
        <h2>🎯 Mes valeurs</h2>
        <div className="values-container">
          <ValueCard title="Autonomie" description="Je sais travailler en autonomie, apprendre par moi-même et livrer un travail complet." />
          <ValueCard title="Rigueur" description="Je suis exigeant sur la qualité, la structure et la clarté de mon code." />
          <ValueCard title="Esprit d'équipe" description="J'apprécie collaborer, partager mes connaissances et m’adapter aux autres." />
          <ValueCard title="Proactivité" description="Je prends des initiatives, je propose des idées et je vais au-delà des attentes." />
        </div>
      </div>

      <div className="apropos-section">
        <h2>🎵 En dehors du code</h2>
        <p>
          En dehors du développement, je suis passionné par plusieurs activités qui me permettent de garder un bon équilibre 
          mental, physique et créatif. Voici quelques-unes de mes passions :
        </p>
        <div className="passions-grid">
          <PassionCard
            backImage={mstImg}
            label="Musique"
            icon={<FaMusic />}
            description="J’écoute énormément de musique, tous styles confondus. Cela m’accompagne pendant mes phases de concentration ou de détente."
          />
          <PassionCard
            backImage={mstImg}
            label="Sport"
            icon={<FaDumbbell />}
            description="Je fais du sport régulièrement. Cela m’aide à garder un bon équilibre, à rester motivé et à structurer mes journées."
          />
          <PassionCard
            backImage={mstImg}
            label="Lecture"
            icon={<FaBook />}
            description="Je lis tout type de contenu : romans, mangas, BD… C’est une vraie source d’inspiration et de culture générale."
          />
        </div>
      </div>
    </div>
  );
}

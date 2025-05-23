import ValueCard from '../components/ValueCard';
//import HobbyGrid from '../components/HobbyGrid';
import PassionCard from '../components/PassionCard';
import readingImg from '../assets/reading.webp';
import mstImg from '../assets/mystere.jpg';
import { FaMusic, FaDumbbell, FaBook } from 'react-icons/fa';

export default function Apropos() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>À propos de moi</h1>

      <p>
        Je suis <strong>Racime Houhou</strong>, étudiant en cycle ingénieur à l’EICNAM Paris, passionné par le 
        développement web, l’automatisation et les technologies innovantes. Mon parcours est marqué par la polyvalence, 
        la curiosité et un fort engagement dans ce que je fais.
      </p>

      <h2>🎯 Mes valeurs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <ValueCard title="Autonomie" description="Je sais travailler en autonomie, apprendre par moi-même et livrer un travail complet." />
        <ValueCard title="Rigueur" description="Je suis exigeant sur la qualité, la structure et la clarté de mon code." />
        <ValueCard title="Esprit d'équipe" description="J'apprécie collaborer, partager mes connaissances et m’adapter aux autres." />
        <ValueCard title="Proactivité" description="Je prends des initiatives, je propose des idées et je vais au-delà des attentes." />
      </div>

      <h2 style={{ marginTop: '2rem' }}>🎵 En dehors du code</h2>
      <p>
        En dehors du développement, je suis passionné par plusieurs activités qui me permettent de garder un bon équilibre 
        mental, physique et créatif. Voici quelques-unes de mes passions :
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin: '2rem auto',
          maxWidth: '1000px'
        }}
      >
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
  );
}
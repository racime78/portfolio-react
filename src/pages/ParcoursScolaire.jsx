import Timeline from '../components/Timeline';
import '../components/Timeline.css';

export default function ParcoursScolaire() {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1000px', margin: 'auto', backgroundColor: '#ffffff' }}>
      <h1 style={{ color: '#1c8755', textAlign: 'center', marginBottom: '2rem' }}>Parcours Scolaire</h1>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        Voici un aperçu de mon évolution académique au fil des années, depuis mes premiers pas en STI2D jusqu’à mon cycle d’ingénieur.
      </p>
      <Timeline />
    </div>
  );
}

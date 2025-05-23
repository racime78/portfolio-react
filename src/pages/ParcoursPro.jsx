import TimelinePro from '../components/TimelinePro';
import '../components/Timeline.css';

export default function ParcoursPro() {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1000px', margin: 'auto', backgroundColor: '#ffffff' }}>
      <h1 style={{ color: '#1c8755', textAlign: 'center', marginBottom: '2rem' }}>Parcours Professionnel</h1>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        Voici un aperçu de mes expériences professionnelles réalisées en entreprise et en missions diverses.
      </p>
      <TimelinePro />
    </div>
  );
}
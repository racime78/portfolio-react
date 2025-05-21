import { Link } from 'react-router-dom';
import logo from '../assets/Logo_Racime_V3-sf.png'; // mets ton propre logo ici

export default function NavBar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 2rem',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ddd',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo Racime Houhou" style={{ height: '60px', marginRight: '1rem' }} />
        <h1 style={{ fontSize: '1.4rem', margin: 0 }}>Racime Houhou</h1>
      </div>

      <ul style={{
        display: 'flex',
        gap: '1rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/apropos">À propos</Link></li>
        <li><Link to="/parcours-scolaire">Parcours scolaire</Link></li>
        <li><Link to="/parcours-pro">Parcours pro</Link></li>
        <li><Link to="/projets">Projets</Link></li>
        <li><Link to="/competence">Compétences</Link></li>
        <li><Link to="/documents">Documents</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

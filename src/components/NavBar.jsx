import { Link } from 'react-router-dom';
import logo from '../assets/Logo_Racime_V3-sf.png';
import '../css/NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* ✅ Ajout du lien autour du logo + nom */}
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo Racime Houhou" />
        <h1>Racime Houhou</h1>
      </Link>

      <ul className="navbar-links">
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

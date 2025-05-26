import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_Racime_V3-sf.png';
import '../css/NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo Racime Houhou" />
          <h1>Racime Houhou</h1>
        </Link>

        <button
          className="burger-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
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

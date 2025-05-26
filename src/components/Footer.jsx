import logo from '../assets/Logo_Racime_V2-sf.png';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Link to="/">
          <img src={logo} alt="Logo Racime Houhou" className="footer-logo" />
        </Link>
      </div>
      <div className="footer-text">
        <p>
          Contact : <a href="mailto:hracime@gmail.com">hracime@gmail.com</a> | 
          <a href="https://www.linkedin.com/in/racime-houhou/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Racime Houhou — Tous droits réservés</p>
      </div>
    </footer>
  );
}

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Racime Houhou — Tous droits réservés</p>
      <p>
        Contact : <a href="mailto:hracime@gmail.com">hracime@gmail.com</a> | 
        <a href="https://www.linkedin.com/in/racime-houhou/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "0.5rem" }}>
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

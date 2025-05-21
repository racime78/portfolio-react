export default function Footer() {
    return (
      <footer style={{
        marginTop: '3rem',
        padding: '1rem 2rem',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
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
  
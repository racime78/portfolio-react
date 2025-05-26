import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import ParcoursScolaire from './pages/ParcoursScolaire';
import ParcoursPro from './pages/ParcoursPro';
import Projets from './pages/Projets';
import Competence from './pages/Competence';
import Documents from './pages/Documents';
import Contact from './pages/Contact';

const GA_ID = 'G-T744FMLRYS';

function App() {
  useEffect(() => {
    if (GA_ID) {
      // Charger Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA_ID);
      };
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/parcours-scolaire" element={<ParcoursScolaire />} />
        <Route path="/parcours-pro" element={<ParcoursPro />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

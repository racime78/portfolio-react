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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/parcours-scolaire" element={<ParcoursScolaire />} />
        <Route path="/parcours-pro"s element={<ParcoursPro />} />
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

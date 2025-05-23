import cvPDF from '../assets/cv-racime.pdf';
import lettrePDF from '../assets/lettre-recommandation.pdf';
import '../css/Documents.css';

export default function Documents() {
  return (
    <div className="documents-container">
      <h1>Mes Documents</h1>
      <div className="documents-grid">
        <div className="document-card">
          <h3>📄 Curriculum Vitae</h3>
          <iframe src={cvPDF} title="CV" className="document-preview" />
          <a href={cvPDF} download className="download-button">Télécharger le CV</a>
        </div>

        <div className="document-card">
          <h3>📄 Lettre de recommandation</h3>
          <iframe src={lettrePDF} title="Lettre de recommandation" className="document-preview" />
          <a href={lettrePDF} download className="download-button">Télécharger la lettre</a>
        </div>
      </div>
    </div>
  );
}

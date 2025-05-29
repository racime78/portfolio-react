import '../css/KYC.css';

export default function KYCPage() {
  return (
    <div className="kyc-container">
      <h1 className="kyc-title">🔍 KYC Risk Checker</h1> 
      <p className="kyc-description">Testez l'analyse de risque KYC directement ici.</p>
      
      <iframe 
        src="https://kyc-risk-checker.onrender.com" 
        width="100%" 
        height="700px"
        frameBorder="0"
        className="kyc-iframe"
      ></iframe>
    </div>
  );
}

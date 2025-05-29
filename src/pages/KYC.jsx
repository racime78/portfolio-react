import '../css/KYC.css';

export default function KYCPage() {
  return (
    <div className="kyc-container">
      <h1>🔍 KYC Risk Checker</h1>
      <p>Testez l'analyse de risque KYC directement ici.</p>
      
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

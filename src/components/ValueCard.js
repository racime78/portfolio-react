export default function ValueCard({ title, description }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      width: '250px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem' }}>{description}</p>
    </div>
  );
}

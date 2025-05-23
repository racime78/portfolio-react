import { useInView } from 'react-intersection-observer';
import '../css/Timeline.css';

export default function ProItem({ year, company, description, logo }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`timeline-item ${inView ? 'visible' : ''}`}>
      <div className="timeline-logo">
        {logo && <img src={logo} alt={`${company} logo`} />}
      </div>
      <div className="timeline-dot" />
      <div className="timeline-content">
        <h3>{company} ({year})</h3>
        <ul>
          {description.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

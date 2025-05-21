import { useInView } from 'react-intersection-observer';
import './Timeline.css';

export default function TimelineItem({ year, title, school, description, logo }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`timeline-item ${inView ? 'visible' : ''}`}>
      <div className="timeline-logo">
        {logo && <img src={logo} alt={`${school} logo`} />}
      </div>
      <div className="timeline-dot" />
      <div className="timeline-content">
        <h3>{year}</h3>
        <h4>{title}</h4>
        <p className="school">{school}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

import '../css/LogoSlider.css';
import logo1 from '../assets/logo-3i.png';
import logo2 from '../assets/logo-certiflab.png';
import logo3 from '../assets/logo-kebchi.png';
import logo4 from '../assets/logo-lsj.png';
import logo5 from '../assets/logo-cc.png';
import logo6 from '../assets/logo-mdbm.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function LogoSlider() {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
        {/* Double les logos pour un effet de boucle fluide */}
        {logos.map((logo, index) => (
          <div className="logo-item" key={index + 100}>
            <img src={logo} alt={`logo-duplicate-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

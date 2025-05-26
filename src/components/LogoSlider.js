import '../css/LogoSlider.css';
import logo1 from '../assets/logo-3i-sf.png';
import logo2 from '../assets/logo-certiflab-sf.png';
import logo3 from '../assets/logo-kebchi.png';
import logo4 from '../assets/logo-lsj.png';
import logo5 from '../assets/logo-cc.png';
import logo6 from '../assets/logo-mdbm.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2, logo3, logo4, logo5, logo6];
const logosDuplicated = [...logos, ...logos]; // Doubler les logos pour une transition fluide

export default function LogoSlider() {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {logosDuplicated.map((logo, index) => ( // Boucle pour afficher chaque logo
          <div className="logo-item" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

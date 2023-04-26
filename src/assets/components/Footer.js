import logo from '../images/logolemon.png';
import '../assets/../css/footer-nav.css';

function Footer() {
  return (
    <footer>
      <img src={logo} className="Logo-footer" alt="logo" />
      <p>Copyright little lemon 2023</p>
    </footer>
  );
}

export default Footer;
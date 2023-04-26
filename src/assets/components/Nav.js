import logo from '../assets/../images/logohorizontal.png';
import '../assets/../css/footer-nav.css';
import Homepage from './Homepage';
import About from './About';
import Menu from './Menu';
import { Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <div className='logo' >
         <img src={logo} className="head-logo" alt="logo" />
      </div>
      <nav>
        <Link to="/#" className="nav-item">Home</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </header>
    
  );
}

export default Nav;
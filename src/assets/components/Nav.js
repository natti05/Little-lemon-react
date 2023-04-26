import logo from '../assets/../logos/logohorizontal.png';
import '../assets/../css/Nav.css';
import Homepage from './Homepage';
import { Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
  <section>
    <header>
      <div className='logo' >
         <img src={logo} className="head-logo" alt="logo" />
      </div>
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
      </nav>
    </header>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
  </section>
    
  );
}

export default Nav;
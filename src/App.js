import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import logo from './images/logo.png'
import './styles/app.scss'
import Homepage from './pages/Homepage';
import Footer from './pages/Footer/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import './color.js';
import {useState} from 'react';
function App() {

  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  window.onscroll = function () {
    let logo_img = document.getElementById("logo_img");
    let header_id = document.getElementById("header_id");
    if (window.scrollY > header_id.offsetHeight) {
      logo_img.classList.add("stick");
    }
    else {
      logo_img.classList.remove("stick");
    }
  }

 
  return (
    <div className='wrapper'>
      <div className='content'>
        <Router>
          <nav className="navbar navbar-expand-lg header-menu" id="header_id">
            <ul className="navbar-nav menu">
              <li className="nav-item nav-item-menu">
                <Link  className={activeItem === 'home' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleItemClick('home')} to="/">Home</Link>
              </li>
              <li className="nav-item nav-item-menu">
                <Link  className={activeItem === 'About' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleItemClick('About')} to="/About">About</Link>
              </li>
              <li className="nav-item nav-item-menu">
                <Link className={activeItem === 'Projects' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleItemClick('Projects')} to="/Projects">Projects</Link>
              </li>
              <li className="nav-item nav-item-menu">
                <Link className={activeItem === 'Articles' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleItemClick('Articles')} to="/Articles">Articles</Link>
              </li>
              <li className="nav-item nav-item-menu">
                <Link className={activeItem === 'Contact' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleItemClick('Contact')} to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className='logo-div' id="logo_img">
            <img src={logo} alt="cannot load image" />
          </div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/Articles" element={<Articles />} />
          </Routes>
        </Router>

      </div>

      <Footer />
    </div>
  );
}

export default App;

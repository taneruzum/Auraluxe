import React from 'react';
import './NavBar.css'; // CSS dosyasını dahil ettik
import { FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Arama ikonu dahil ettik
//import logoImage from '../../../src/images/auraluxe.png';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex align-items-center w-100"> {/* Esnek konteyner ile yerleştirme */}

        {/* Arama ikonu ve arama alanı */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Ürün arama..." className="search-input" />
        </div>

        <a className="navbar-brand mx-auto" href="#">
          {/* <img src={logoImage} alt="Auraluxe" className="logo-img" /> */}
        </a>


        {/* Profil ve Alışveriş Sepeti İkonları */}
        <div className="icons">
          <a href="#" className="nav-link">
            <FaUserCircle size={24} />
          </a>
          <a href="#" className="nav-link">
            <FaShoppingCart size={24} />
          </a>
        </div>
      </div>

      {/* Dropdown menü */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Diğer Sayfalar
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Link 1</a>
              <a className="dropdown-item" href="#">Link 2</a>
              <a className="dropdown-item" href="#">Link 3</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Link 4</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <nav className="container">
        <div className="main-header row">
          <NavLink className="col l3 brand" to="/home"></NavLink>
          <nav className="col l8 offset-l2">
            <input type="checkbox" id="nav"/><label htmlFor="nav"></label>
            <div className="nav-background"></div>
            <ul className="navbar">
              <li>
                <NavLink className="navbar-link" to="/nosotros">
                Quienes somos</NavLink>
              </li>
              <li>
                <NavLink className="navbar-link" to="/fideicomisos">
                Negocios Fiduciarios</NavLink>
              </li>
              <li>
                <NavLink className="navbar-link" to="/fondos">
                Fondos</NavLink>
              </li>
              <li>
                <NavLink className="navbar-link" to="/faq">
                FAQ</NavLink>
              </li>
              <li>
                <NavLink className="navbar-link" to="/contacto">
                Contacto</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;

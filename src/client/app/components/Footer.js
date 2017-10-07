import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import ContactForm from '../components/ContactForm.js'
import ContactDetails from '../components/ContactDetails.js'

import tarifario from '../data/downloads/tarifario.pdf'


const Footer = () => {
  return (
    <footer>
		<div className="footer-info">
			<div className="container">
				<div className="row">
					<div className="col l3 m5 s12 download-links">
						<Link to="/resoluciones#header" className="button-light block-display">Resoluciones</Link>
						<a href={tarifario} className="button-light block-display" target="_blank">Tarifario</a>
						<a className="button-light block-display">Marco Legal</a>	
					</div>
					<div className="col l1 m1 border-right"></div>
					<div className="col l4 m6 s12 contact-details-container cotact-details-ligth text-light">
						<ContactDetails />
					</div>
					<div className="col l1 border-left"></div>
					<div className="col l3 m12 s12">
						<ContactForm formType="main" formType="footer" />
					</div>
				</div>
			</div>
		</div>
		<div className="footer-navbar">
			<Link to="/nosotros#header" className="navbar-link">Quienes somos</Link>
			<Link to="/fideicomisos#header" className="navbar-link">Negocios Fiduciarios</Link>
			<Link to="/fondos#header" className="navbar-link">Fondos</Link>
			<Link to="/faq#header" className="navbar-link hidden">FAQ</Link>
			<Link to="/contacto#header" className="navbar-link">Contacto</Link>
		</div>
    </footer>
  );
};

export default Footer;
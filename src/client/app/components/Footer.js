import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import ScrollButton from '../components/ScrollButton.js'
import ContactForm from '../components/ContactForm.js'
import ContactDetails from '../components/ContactDetails.js'

import tarifario from '../data/downloads/tarifario.pdf'


const Footer = () => {
  return (
    <footer>
		<div className="footer-info">
			<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
			<div className="container">
				<div className="row">
					<div className="col l3 m5 s12 download-links">
						<Link to="/resoluciones" className="button-light block-display">Resoluciones</Link>
						<a href={tarifario} className="button-light block-display" target="_blank">Tarifario</a>
						<Link to="/marcolegal" className="button-light block-display">Marco Legal</Link>
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
			<Link to="/nosotros" className="navbar-link">Quiénes somos</Link>
			<Link to="/fideicomisos" className="navbar-link">Negocios Fiduciarios</Link>
			<Link to="/fondos" className="navbar-link">Fondos</Link>
			<Link to="/faq" className="navbar-link">FAQ</Link>
			<Link to="/contacto" className="navbar-link">Contacto</Link>
		</div>
		<div className="footer-copy"> ©️ Fiduamericas 2017 | Todos los derechos reservados. </div>
		<div className="footer-copy"> Some icons and images were taken but modified from
			&nbsp;<a href="www.freepick.com">Freepik</a> &nbsp; and
			&nbsp;<a href="www.flaticon.com">Flaticon</a> </div>
    </footer>
  );
};

export default Footer;
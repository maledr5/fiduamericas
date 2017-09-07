import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import resoluciones from '../data/downloads/resoluciones.pdf'
import tarifario from '../data/downloads/tarifario.pdf'


const Footer = () => {
  return (
    <footer>
		<div className="footer-info">
			<div className="container">
				<div className="row">
					<div className="col l3 m5 s12 download-links">
						<a href={resoluciones} className="button-light block-display" target="_blank">Resoluciones</a>
						<a href={tarifario} className="button-light block-display" target="_blank">Tarifario</a>
						<a className="button-light block-display">Marco Legal</a>	
					</div>
					<div className="col l1 m1 border-right"></div>
					<div className="col l4 m6 s12 contact-details">
							+593 (2) 600 0150<br/>
							Edificio Mirage, Oficina 8A, Av. 12 de Octubre N26-48 y Orellana. <br/>
							<a className="icon-social-facebook"></a>
							<a className="icon-social-twitter"></a>
							<a className="icon-social-linkedin"></a>
					</div>
					<div className="col l1 border-left"></div>
					<div className="col l3 m12 s12">
						<form>
							<input className="input-light" type="text" name="input-name" placeholder="Nombre y Apellido" />
							<input className="input-light" type="text" name="input-email" placeholder="Correo Electrónico" />
							<textarea className="input-light" rows="3" cols="30" name="input-message" placeholder="Consulta o Mensaje"></textarea>
							<input className="input-light" type="button" name="footer-submit" value="Enviar Consulta" />
						</form>
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
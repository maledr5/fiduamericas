import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const ContactoCta = () => {
	return (
		<div id="contacto-cta">
			<h5 className="center-text">¿NECESITAS MÁS INFORMACIÓN?</h5>
			<div className="actions">
				<div>
					<span className="border-box box-dark">
						<Link to="/fideicomisos#header" className="main-link">Negocios Fiduciarios</Link>
					</span>
				</div>
				<div>
					<span className="border-box box-dark">
						<Link to="/contacto#header" className="main-link">Formulario de Contacto</Link>
					</span>
				</div>
				<div className="hidden">
					<span className="border-box box-dark">
						<Link to="/faq#header" className="main-link">Preguntas Frecuentes</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default ContactoCta
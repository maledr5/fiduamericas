import React from 'react';

const ContactoCta = () => {
	return (
		<div id="contacto-cta">
			<h5 className="center-text">¿NECESITAS MÁS INFORMACIÓN?</h5>
			<div className="actions">
				<div>
					<span className="border-box box-dark">
						<a href="#/fideicomisos" className="main-link">Negocios Fiduciarios</a>
					</span>
				</div>
				<div>
					<span className="border-box box-dark">
						<a href="#/contacto" className="main-link">Formulario de Contacto</a>
					</span>
				</div>
				<div>
					<span className="border-box box-dark">
						<a href="#/faq" className="main-link">Preguntas Frecuentes</a>
					</span>
				</div>
			</div>
		</div>
	)
}

export default ContactoCta
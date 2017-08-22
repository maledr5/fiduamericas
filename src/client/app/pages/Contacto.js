import React from 'react';

const Contacto = () => {
	return (
		<div>
			<div className="container page-header text-main">
				<div className="row">
					<h1 className="col offset-s1">Contacto</h1>
					<div className="col offset-s1 header-division"></div>
				</div>
			</div>
		
			<div id="contact-form">
				<div className="container">
					<form>
						<div className="row">
							<input className="col s10 l4 offset-s1 offset-m1 offset-l2 input-main" type="text" name="input-name" placeholder="Nombre y Apellido*" />
							<input className="col s10 l3 offset-s1 offset-m1 offset-l1 input-main" type="text" name="input-name" placeholder="Email*" />
						</div>
						<div className="row">
							<input className="col s10 l4 offset-s1 offset-m1 offset-l2 input-main" type="text" name="input-name" placeholder="Teléfono o celular" />
							<p className="col s10 l3 offset-s1 offset-m1 offset-l1 second text-main">Quiero información acerca de:</p>
						</div>
						<div className="row">
							<textarea className="col s10 l4 offset-s1 offset-m1 offset-l2 input-main" rows="3" cols="30" name="input-message" placeholder="Consulta o Mensaje"></textarea>
							<select className="col s10 l3 offset-s1 offset-m1 offset-l1 input-main" name="question">
								<option value="" disabled defaultValue>Escoge un tipo de consulta</option>
								<option value="negocios_fiduciarios">Negocios Fiduciarios</option>
								<option value="fondos_inversion">Fondos de Inversión</option>
								<option value="otro">Otro tipo de consulta</option>
							</select>
						</div>
						<div className="row">
							<input className="col s10 l8 offset-s1 offset-m1 offset-l2 input-main" type="button" name="footer-submit" value="Enviar Consulta" />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
};

export default Contacto
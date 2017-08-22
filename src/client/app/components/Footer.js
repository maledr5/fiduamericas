import React from 'react';

const Footer = () => {
  return (
    <footer>
		<div className="footer-info">
			<div className="container">
				<div className="row">
					<div className="col l3 m5 s12 download-links">
						<a className="button-light block-display">Resoluciones</a>
						<a className="button-light block-display">Tarifario</a>
						<a className="button-light block-display">Marco Legal</a>	
					</div>
					<div className="col l1 m1 border-right"></div>
					<div className="col l4 m6 s12 contact-details">
							(02) 323 8747  <br/>
							099 732 3882   <br/>
							Piciatis aunde omnis iste natus error sit voluptatem iste natus error sit. <br/>
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
			<a>Quienes Somos</a>
			<a>Negocios Fiduciarios</a>
			<a>Fondos</a>
			<a>FAQ</a>
			<a>Contacto</a>
		</div>
    </footer>
  );
};

export default Footer;
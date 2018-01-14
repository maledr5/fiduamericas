import React from 'react';
import { NavLink as Link } from 'react-router-dom';


class FondofitCta extends React.Component {

	render (){
		return (
			<div id="contacto-cta">
				<h5 className="center-text">¿NECESITA MÁS INFORMACIÓN?</h5>
				<div className="actions">
					<div>
						<span className="border-box box-dark">
							<Link to="/faq#cuales_son_los_beneficios_de_invertir_en_un_fondo_de_inversion" className="main-link">Beneficios</Link>
						</span>
					</div>
					<div>
						<span className="border-box box-dark">
							<Link to="/faq#como_puedo_invertir" className="main-link">¿Cómo puedo invertir?</Link>
						</span>
					</div>
					<div className="">
						<span className="border-box box-dark">
							<Link to="/fondos" className="main-link">¿Cómo funciona?</Link>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default FondofitCta
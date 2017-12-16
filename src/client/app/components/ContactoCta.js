import React from 'react';
import { NavLink as Link } from 'react-router-dom';


class ContactoCta extends React.Component {

	getProductCta(productCta){
		if( productCta == "fideicomisos") return "Negocios Fiduciarios";
		return "Fondos de Inversión";
	}

	render (){
		const productCta = this.props.productCta;
		const CurrentProduct = this.props.CurrentProduct;
		let linkTo = "/" + productCta;
		return (
			<div id="contacto-cta">
				<h5 className="center-text">¿NECESITAS MÁS INFORMACIÓN?</h5>
				<div className="actions">
					<div>
						<span className="border-box box-dark">
							<Link to={linkTo} className="main-link">{this.getProductCta(productCta)}</Link>
						</span>
					</div>
					<div>
						<span className="border-box box-dark">
							<Link to={"/contacto?product=" + CurrentProduct} className="main-link">Formulario de Contacto</Link>
						</span>
					</div>
					<div className="">
						<span className="border-box box-dark">
							<Link to="/faq" className="main-link">Preguntas Frecuentes</Link>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactoCta
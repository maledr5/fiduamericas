import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ProductsCards from '../components/ProductsCards.js'
import ContactoCta from '../components/ContactoCta.js'

import fideicomisosData from '../data/fideicomisos_data.js';

import constituyente from '../images/constituyente.svg'
import beneficiario from '../images/beneficiario.svg'
import fiduciaria_small from '../images/fiduciaria_small.svg'
import fideicomiso_how from '../images/fideicomiso_how.svg'
import fideicomiso_ventajas from '../images/fideicomiso_ventajas.svg'


const Fideicomisos = () => {
	return (
		<div id="fideicomisos">

			<div id="fid-banner" className="container">
				 <h3 className="text-main">¿Qué es un Fideicomiso?</h3>
				 <p className="second text-dark">Es un patrimonio autónomo, con personalidad jurídica, cuyos activos y recursos están vinculados al cumplimiento de un objeto determinado en el contrato.</p>
				 <br/>
				 <Link to="#fid-negocios" className="second-link">Ver Negocios Fiduciarios</Link>
				 <br/><br/>
				 <h3 className="text-main">Las partes que intervienen en un fideicomiso son:</h3>
			</div>

			<div id="fid-info" className="container">
				<div className="row">
					<div className="col l4 m5 s10 offset-l1 offset-m1 offset-s1 border-box box-light-grey">
						<div id="fid-info-element">
							<img src={constituyente} />
							<h3>Constituyente</h3>
							<ul>
								<li>Es quien transfiere los bienes.</li>
								<li>Establece las instrucciones a ser cumplidas por la fiduciaria.</li>
								<li>Puede ser beneficiario del fideicomiso.</li>
							</ul>
						</div>
					</div>
					<div className="col l4 m5 s10 offset-l2 offset-s1 border-box box-light-grey">
						<div id="fid-info-element">
							<img src={beneficiario} />
							<h3>Beneficiario</h3>
							<ul>
								<li>Recibe los beneficios establecidos por el Fiduciario.</li>
								<li>Puede ser el mismo Constituyente.</li>
								<li>No puede ser la Entidad Fiduciaria.</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col l4 m6 s10 offset-l4 offset-m3 offset-s1 border-box box-light-grey">
						<div id="fid-info-element">
							<img src={fiduciaria_small} height="150" className="fiduciaria" />
							<h3>Fiduciaria</h3>
							<ul>
								<li>Recibe los bienes para su administración.</li>
								<li>Ejecuta la gestión encomendada.</li>
								<li>Son entes autorizados y regulados por la ley.</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<h3 className="col m12 s10 offset-s1 text-main">¿Cómo funciona un fideicomiso?</h3>
					<div className="col m12 s10 offset-s1 border-box box-light-grey">
						<div id="fid-info-element" className="fideicomiso_how">
							<img src={fideicomiso_how} />
							<p>El <span className="text-main">Constituyente</span> transmite bienes, cantidades de dinero o derechos, presentes o futuros a la <span className="text-main">Fiduciaria</span>, para que ésta administre o invierta los bienes en beneficio propio o de un <span className="text-main">Beneficiario</span> posterior al cumplimiento de un plazo o condición.</p>
							<div className="fid-info-small"></div>
						</div>
					</div>
				</div>
			</div>

			<div id="fid-ventajas">
				<div className="full-screen banner-height banner-fideicomisos-bg parallax">
					<div>
						<h3 className=" text-light">¿Cuáles son las ventajas de los Fideicomisos?</h3>
						<ul className=" text-light"> 
							<li>Confidencialidad</li>
							<li>Facilita la gestión sobre bienes</li>
							<li>Administración especializada y técnica</li>
							<li>Irrevocabilidad</li>
						</ul>
					</div>
					<img src={fideicomiso_ventajas} />
				</div>
			</div>
			
			<div id="fid-negocios" className="container">
				<h3 className="text-main">Negocios Fiduciarios</h3>
				<p className="text-dark">Son negocios de confianza que sirven para cumplir las instrucciones de un mandante por medio de un tercero.</p>
				<ProductsCards products={fideicomisosData()} />
			</div>

			<ContactoCta productCta="fondos"/>

		</div>
	)
};

export default Fideicomisos

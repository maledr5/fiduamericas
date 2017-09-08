import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import ContactoCta from '../components/ContactoCta.js'

import fondos_como from '../images/fondos_como.svg'


const Fondos = () => {
	return (
		<div id="fondos">

			<div id="fondos-banner">
				<div className="full-screen banner-height banner-fondos-bg parallax">
					<div className="border-box box-light text-dark">
						<div className="nos-quote">
							<div className="quote-main quote-icon"></div>
							<p className="main"> El camino a la prosperidad depende fundamentalmente de dos palabras: 
							<br/> trabajo y ahorro </p>
							<p className="second text-main">Benjamin Franklin</p>
						</div>
					</div>
				</div>
			</div>
	
			<div id="fondos-cta" className="container">
				<div className="row">
					<span className="col l4 m6 s10 offset-s1 offset-l7 border-box box-main">
                		<Link to="#fondos-como" className="main-link">¿Cómo funciona un fondo?</Link>
					</span>
					<span className="col l4 m6 s10 offset-s1 offset-l1 border-box box-main">
						<Link to="#fondos-lista" className="main-link">Conoce nuestros fondos de inversión</Link>
					</span>
				</div>
			</div>
	
			<div id="fondos-como">
				<div className="content">
					<h3>¿Cómo funciona un fondo de inversión?</h3>
					<p className="normal text-dark">El fondo de inversión es un patrimonio común que es invertido por un comité especializado, en diversos títulos valor con el fin de generar rendimiento, liquidez y seguridad para nuestros inversionistas.</p>
				</div>
				<img src={fondos_como} />

				<div className="fondos-como-img"></div>
			</div>
	
			<div id="fondos-lista" className="container">
				<h3 className="text-main">Nuestros Fondos de Inversión</h3>
				<div className="product-container box-light-grey">
					<h4 className="text-main">Fondo 1</h4>
					<p>Es el tipo de contrato que maneja y gestiona el patrimonio de un tercero conforme sus instrucciones.</p>
				</div>
				<div className="offset-m1 offset-l1 product-container box-light-grey">
					<h4 className="text-main">Fondo2</h4>
					<p>Es el tipo de contrato que tiene como objetivo el desarrollo de un proyecto de construcción, manejando las relaciones con terceros.</p>
				</div>
			</div>

			<ContactoCta />

		</div>
	)
};

export default Fondos
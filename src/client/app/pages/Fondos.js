import React from 'react';
import { HashLink } from 'react-router-hash-link';

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
					<span className="col l4 m6 s10 offset-s2 offset-l7 border-box box-main">
						<HashLink to="/fondofit" className="main-link">Quiero Invertir en el Fondo Fit</HashLink>
					</span>
					<span className="col l4 m6 s10 offset-s2 offset-l7 border-box box-main hidden">
						<HashLink to="#fondos-como" className="main-link">¿Cómo funciona un fondo?</HashLink>
					</span>
					<span className="col l4 m6 s10 offset-s1 offset-l1 border-box box-main">
						<HashLink to="#fondos-lista" className="main-link">Conoce nuestros fondos de inversión</HashLink>
					</span>
				</div>
			</div>

			<div id="fondos-como">
				<div className="content">
					<h3>¿Cómo funciona un fondo de inversión?</h3>
					<p className="normal text-dark">El fondo de inversión es un patrimonio común que es invertido por un comité especializado, en diversos títulos valor con el fin de generar rendimiento, liquidez y seguridad para nuestros inversionistas.</p>
				</div>
				<img src={fondos_como} alt="fondos de inversion" name="fondos de inversion"/>

				<div className="fondos-como-img"></div>
			</div>

			<div id="fondos-contenido" className="container">
				<br/><br/>
				<div className="row">
					<p className="col offset-l3 l6">
						El <HashLink to="/fondo-de-inversion">Fondo de Inversión</HashLink> es una excelente alternativa de ahorro porque ofrece más
						 rentabilidad que otras opciones de inversión y mayor disponibilidad de sus ahorros por su política de retiros. Su portafolio de inversión
						 está en instrumentos con calificación de Riesgo A- o superior, de renta fija y variable. El objetivo del fondo de inversión es
						 obtener rendimientos a través de inversiones seguras y liquidas.
				 	</p>
			 	</div>
			 	<div className="row">
					<p className="col offset-l3 l6">
						A través del <HashLink to="/fondo-de-inversion">Fondo de Inversión</HashLink>, se puede acumular los rendimientos
						 mensuales e invertirlos automáticamente junto al capital,
						 para mejorar el rendimiento y así obtener un mayor retorno para la inversión realizada. También, se puede realizar un <strong>ahorro</strong>
						 &nbsp; programado es decir se autoriza el débito automático de una cuenta bancaria.
					</p>
				</div>
				<div className="row">
					<p className="col offset-l3 l6">
						El <strong>Fondo de Inversión</strong> invierte en títulos valores aprobados por la Superintendencia de Compañías, Valores y Seguros.
						 Por ejemplo, invierte en certificados de depósito a plazo, pólizas de acumulación, entre otros, emitidos por instituciones
						 financieras del Ecuador. También invierte en títulos emitidos a través del Mercado de Valores como papel comercial, facturas
						 comerciales negociables, obligaciones, entre otros.
					</p>
				</div>
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

			<ContactoCta productCta="fideicomisos" CurrentProduct="fondos"/>

		</div>
	)
};

export default Fondos